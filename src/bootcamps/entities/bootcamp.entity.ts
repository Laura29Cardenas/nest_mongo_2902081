import { Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import { Document, Double} from "mongodb";


@Schema ()
export class Bootcamp {

    @Prop()
    name: string;

    @Prop()
    phone: number;

    @Prop()
    address: string;

    @Prop()
    averageRating: number;

    @Prop()
    createAt: Date;
}

export const BootcampSchema = SchemaFactory.createForClass(Bootcamp)
 