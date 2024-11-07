import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto 
    extends PartialType(CreateCourseDto) {
        readonly title?:string;
        readonly description?:number;
        readonly weeks?:string;
        readonly tuition?:number;
        readonly minimun_skill?: Date;
        readonly createAt?: Date;
    }
