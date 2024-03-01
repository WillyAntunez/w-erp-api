import { Model } from 'sequelize';

interface ICountry {
    id: number;
    name: string;
    code: string;
}

interface ICountryModel extends Model<ICountry, Optional<ICountry, 'id'>> {}

interface ICity {
    id: number;
    name: string;
    countryCode: number;
}

interface ICityModel extends Model<ICity, Optional<ICity, 'id'>> {}
