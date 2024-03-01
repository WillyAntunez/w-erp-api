import { Model } from 'sequelize';

// * document
interface ICustomer {
    id: number;
    contactInfoId: number;
    firstName: string;
    lastName: string;
    type: string;
    status: string;
    age: number;
    gender: string;
    maritalStatus: string;
    occupation: string;
    preferredLanguage: string;
    description: string;
    economicActivity: string;
    legalName: string;
    tradeName: string;
    updatedAt: string;
    createdAt: string;
}

export interface ICustomerModel
    extends Model<ICustomer, Optional<ICustomer, 'id'>> {}
