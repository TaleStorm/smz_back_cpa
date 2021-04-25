import { REQUEST } from '@nestjs/core';
import {ConflictException, Inject, Injectable, NotFoundException, Scope} from '@nestjs/common';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })

export class CookieService {

    @Inject(REQUEST)
    private readonly request: Request;

    setDefaultCookie(value: string, name: string): void {
        this.request.res.cookie(name, value, {
            // signed: true,
            httpOnly: false,
            // expires?: Date;
            // maxAge?: number;
            // // path?: string;
            // domain?: string;
            // secure: true,
            // encode?: (val: string) => string;
            // sameSite?: boolean | 'lax' | 'strict' | 'none';
            sameSite: 'none',
        });
    }

    getDefaultCookie(name): any {

        if(!this.request.headers.cookie) {
            throw new NotFoundException('Cookie not found');
        }

        const cookieArr = this.request.headers.cookie.split("=");

        if(cookieArr[0] == name) {
            return cookieArr[1];
        }

        throw new NotFoundException(`Cookie by name ${name} not found`)

    }
}
