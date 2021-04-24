import { Module } from '@nestjs/common';
import { ApplicationForExecutionController } from './application-for-execution.controller';
import { ApplicationForExecutionService } from './application-for-execution.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ApplicationEntity} from "./entities/ApplicationEntity";

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationEntity])],
  controllers: [ApplicationForExecutionController],
  providers: [ApplicationForExecutionService],
})
export class ApplicationForExecutionModule {}
