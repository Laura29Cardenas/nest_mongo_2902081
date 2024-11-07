import { Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import { Document, Double, Timestamp } from "mongodb";

@Schema ()
export class Course {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    weeks: number;

    @Prop()
    tuition: number;

    @Prop()
    minimun_skill: minimun_skill;

    @Prop()
    createAt: Timestamp;
}

enum  minimun_skill {
     "BEGINNER",  
     "INTERMEDIATE",
     "ADVANCED"
}


export const CourseSchema = SchemaFactory.createForClass(Course)
