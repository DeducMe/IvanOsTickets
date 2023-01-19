import { Document, Schema } from 'mongoose';

export default interface Transportation extends Document {
    number: string;
    route: Schema.Types.ObjectId;
    ticket: Schema.Types.ObjectId;
    dispatcher: Schema.Types.ObjectId;
    bus: Schema.Types.ObjectId;
    driver: Schema.Types.ObjectId;
}
