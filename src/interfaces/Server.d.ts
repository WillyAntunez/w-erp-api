import { Model } from 'sequelize';

export interface IServer {
    port: number;
    app: express.Application;
    db: Sequelize;
    middlewares(...middlewares: Array<express.RequestHandler>): void;
    start(): void;
    dbConnect(): void;
}

export interface IDb {
    sequelize: Sequelize;
    connect(): void;
    models: {
        [key: string]: ModelStatic<Model>;
    };
}

export type IModelFn = (sequelize: Sequelize) => ModelCtor<Model<any, any>>;
