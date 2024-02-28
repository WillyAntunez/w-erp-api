import { Model, ModelCtor, Sequelize } from 'sequelize'; // Add import statement for 'Sequelize'

// Server interface
export interface IServer {
    port: number;
    app: express.Application;
    db: Sequelize;
    middlewares(...middlewares: Array<express.RequestHandler>): void;
    start(): void;
    dbConnect(): void;
}

// Modify IDBModel interface to extend Model interface
export interface IDBModel extends ModelCtor<Model> {
    associate?: (models: { [key: string]: ModelCtor<Model> }) => void;
}

// Model function interface
export type IModelFn = (sequelize: Sequelize) => IDBModel;

// Database interface
export interface IDb {
    connection: Sequelize;
    connect(): void;
    models: {
        [key: string]: IDBModel;
    };
    modelsFns: {
        [key: string]: IModelFn;
    };
}
