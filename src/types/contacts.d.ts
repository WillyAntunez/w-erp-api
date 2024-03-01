import { Model } from 'sequelize';

//  * contactInfo
interface IContactInfo {
    id: number;

    countryId: number;
    cityId: number;

    address: string;
    secondAddress: string;

    phone: string;
    secondPhone: string;

    email: string;
    secondEmail: string;

    comment: string;

    updatedAt: string;
    createdAt: string;
}

export interface IContactInfoModel
    extends Model<IContactInfo, Optional<IContactInfo, 'id'>> {}

//  * contact

interface IContact {
    id: number;
    name: string;
    customerId: number;
    contactInfoId: number;
    relationship: string;
    comment: string;
    updatedAt: string;
    createdAt: string;
}

export interface IContactModel
    extends Model<IContact, Optional<IContact, 'id'>> {}
