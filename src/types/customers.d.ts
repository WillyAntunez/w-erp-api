import { Model } from 'sequelize';

// * customer
interface ICustomer {
    id: number;
    contactInfoId: number;
    firstName: string;
    lastName: string;
    type: string;
    status: string;
    birthdate: number;
    gender: string;
    maritalStatusId: string;
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

// * create customer
// Generated by https://quicktype.io

export interface ICustomerToCreate {
    firstName: string;
    lastName: string;
    type: null;
    status: null;
    age: null;
    gender: null;
    maritalStatusId: number;
    occupation: null;
    preferredLanguage: null;
    description: null;
    economicActivity: null;
    legalName: null;
    tradeName: null;
    createdAt: string;
    updatedAt: null;
    contactInfo: ContactInfo;
    contacts: Contact[];
    documents: Document[];
}

export interface ContactInfo {
    countryId: number;
    cityId: number;
    address: string;
    secondAddress: null;
    phone: string;
    secondPhone: null;
    email: string;
    secondEmail: null;
    comment: null;
    updatedAt: null;
    createdAt: string;
}

export interface Contact {
    name: string;
    relationship: string;
    comment: string;
    updatedAt: null;
    createdAt: string;
    contactInfo: ContactInfo;
}

export interface Document {
    number: string;
    url: string;
    issueDate: null;
    expirationDate: null;
    issuedBy: string;
    comment: string;
    documentTypeId: number;
    createdAt: string;
    updatedAt: null;
}
