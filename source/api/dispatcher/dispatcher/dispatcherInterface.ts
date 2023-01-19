import { Document } from 'mongoose';

export default interface Dispatcher extends Document {
    fullName: string;
    dateOfBirth: Date;
    address: string;
}
