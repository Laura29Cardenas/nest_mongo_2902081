import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private UserModel: Model<User>){}

  async create(createUserDto: CreateUserDto) {
    const newUser
        = new this.UserModel(createUserDto);
    return await newUser.save();
  }

  async findAll() {
    return await this.UserModel.find().exec();
  }

  findOne(id: string) {
    return this.UserModel.find({_id: id}).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
