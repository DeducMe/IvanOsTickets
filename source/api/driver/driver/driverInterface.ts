import { Document } from 'mongoose';

export default interface Driver extends Document {
    fullName: string;
    dateOfBirth: Date;
    passport: string;
}
