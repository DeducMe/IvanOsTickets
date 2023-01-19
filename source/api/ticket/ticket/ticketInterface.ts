import { Document } from 'mongoose';

export default interface Ticket extends Document {
    seat: number;
    cost: number;
    purchaseDate: Date;
    fullName: string;
    passport: string;
    isPriceReduced: boolean;
}
