import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampsModule } from './bootcamps/bootcamps.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.
                forRoot('mongodb://localhost:27017/nest_mongo_2902081'),
            BootcampsModule, 
            ReviewsModule, 
            CoursesModule, 
            UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
