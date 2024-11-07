import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Bootcamp } from './entities/bootcamp.entity';
import { BootcampsModule } from './bootcamps.module';
import { Model } from 'mongoose';

@Injectable()
export class BootcampsService {

  constructor(@InjectModel(Bootcamp.name) private BootcampModel: Model<Bootcamp>){}

  async create(createBootcampDto: CreateBootcampDto) {
    const newBootcamp
        = new this.BootcampModel(createBootcampDto);
    return await newBootcamp.save();
  }
 
  async findAll() {
    return await this.BootcampModel.find().exec();
  }

  findOne(id: string) {
    return this.BootcampModel.find({_id: id}).exec();
  }

  update(id: number, updateBootcampDto: UpdateBootcampDto) {
    return this.BootcampModel.findByIdAndUpdate(id, {$set: UpdateBootcampDto})
  } 

  remove(id: number) {
    return `This action removes a #${id} bootcamp`;
  }
}
