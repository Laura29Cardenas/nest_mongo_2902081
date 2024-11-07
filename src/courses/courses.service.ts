import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './entities/course.entity';
import { Model } from 'mongoose';

@Injectable()
export class CoursesService {

  constructor(@InjectModel(Course.name) private courseModel: Model<Course>){}

  async create(createCourseDto: CreateCourseDto) {
    const newCourse
      = new this.courseModel(createCourseDto);
    return await newCourse.save();
  }

  async findAll() {
    return await this.courseModel.find().exec();
  }

  findOne(id: string) {
    return this.courseModel.find({_id: id}).exec();
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: string) {
    return `This action removes a #${id} course`;
  }
}
