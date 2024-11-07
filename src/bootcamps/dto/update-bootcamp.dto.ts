import { PartialType } from '@nestjs/mapped-types';
import { CreateBootcampDto } from './create-bootcamp.dto';

export class UpdateBootcampDto 
    extends PartialType(CreateBootcampDto) {
        readonly name?:string;
        readonly phone?:number;
        readonly address?:string;
        readonly averageRating?:number;
        readonly createAt?: Date;
    }
