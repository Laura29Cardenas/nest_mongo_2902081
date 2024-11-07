import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Review } from './entities/review.entity';
import { Model } from 'mongoose';

@Injectable()
export class ReviewsService {

  constructor(@InjectModel(Review.name) private ReviewModel: Model<Review>){}

  async create(createReviewDto: CreateReviewDto) {
    const newReview
      = new this.ReviewModel(createReviewDto);
    return await newReview.save();
  }

  async findAll() {
    return await this.ReviewModel.find().exec();
  }

  findOne(id: string) {
    return this.ReviewModel.find({_id: id}).exec();
  }

  update(id: string, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: string) {
    return `This action removes a #${id} review`;
  }
}
