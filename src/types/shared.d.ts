import { Model } from 'sequelize';

/* marital status */
interface IMaritalStatus {
    id: number;
    name: string;
    description: string;
}

export interface IMaritalStatusModel
    extends Model<IMaritalStatus, Optional<IMaritalStatus, 'id'>> {}
