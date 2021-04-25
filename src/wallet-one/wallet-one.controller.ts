import {
    BadRequestException,
    Body,
    ConflictException,
    Controller,
    HttpService, Inject, Injectable,
    Post, Scope,
    UnauthorizedException
} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import axios from 'axios';
import {CreatePersonDto} from "./dto/CreatePersonDto";
import { v4 as uuidv4 } from 'uuid';
import {InnDto} from "./dto/InnDto";
import {CookieService} from "./CookieService";



@ApiTags('Контроллер Wallet One')
@Controller('wallet-one')
export class WalletOneController {
    private authUrl = 'http://185.209.114.26:9001/';
    private baseUrl = 'http://185.209.114.26:8080/';

    private authObj = {
        username: 'agent11' ,
        password: 'agent11',
        grant_type: 'password',
        tocken_type: 'bearer',
        client_secret: 'e5d2b5c1-4211-48aa-b272-91d75f4ab0e5',
        client_id: 'agentService'
    }



    constructor(
        private readonly http: HttpService
    ) {}

    @Inject()
    private readonly cookieService: CookieService;

    @ApiOperation({summary: 'Аторизация в W1, на выходе ставится кука token'})
    @Post('/auth')
    async auth(@Body() body):  Promise<any>{
        await this.http.post(
            this.authUrl+'auth/realms/plutdev/protocol/openid-connect/token',
            new URLSearchParams(this.authObj),
            {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            },

        }).toPromise()
            .then(item=>{
                this.cookieService.setDefaultCookie(item.data.access_token, 'token');
                //this.cookieService.setDefaultCookie(item.data.refresh_token, 'refresh_token');
                return item.data
            })
            .catch(e=>{
                console.log(e)
                return e
            })
    }

    @ApiOperation({summary: 'Создание персоны'})
    @Post('/create-person')
    async createPerson(@Body() body: CreatePersonDto) : Promise<any> {
        const obj = {
            "externalId": uuidv4(),
            "nationality": body.nationality,
            "initials": {
                ...body.initials
            },
            "inn": {
                ...body.inn
            },
            "phone": {
                ...body.phone
            }

        }

        await axios.post(this.baseUrl+'subject/person/individual',
            JSON.stringify(obj),
            {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer '+this.cookieService.getDefaultCookie('token')
                },

            }).then(item=>{

            return item
        }).catch(e=>{
                 if(e.response.status == 401) {
                    throw new UnauthorizedException()
                }
                throw new BadRequestException(e.response.data)
        })

    }

    @ApiOperation({summary: 'Запрос на наличие ограничений при поставноке на учет как самозанятый'})
    @Post('/getTaxpayerRestrictionsRequest')
    async getTaxpayerRestriction(@Body() body: InnDto): Promise<any> {

        const data = await axios.post(this.baseUrl+'api/smz/getTaxpayerRestrictionsRequest?externalId='+uuidv4(),
            JSON.stringify(body),
            {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer '+this.cookieService.getDefaultCookie('token')
                }})

        return data.data
        // await this.http.post(
        //     this.baseUrl+'api/smz/getTaxpayerRestrictionsRequest?externalId='+uuidv4(),
        //     JSON.stringify(body),
        //     {
        //         headers: {
        //             'Content-type': 'application/json',
        //             'Authorization': 'Bearer '+this.cookieService.getDefaultCookie('token')
        //         },
        //     }).toPromise()
        //     .then(item=>{
        //         //console.log(item)
        //         return item
        //     }).catch(e=>{
        //         //console.log(e)
        //         if(e.response.status == 401) {
        //             throw new UnauthorizedException()
        //         }
        //         throw new BadRequestException(e.response.data)
        //     })
    }
}
