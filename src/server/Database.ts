import { Sequelize } from 'sequelize';
import { IDBModel, IDb, IModelFn } from '../types/server';

export class Database implements IDb {
    connection;
    process;
    models: {
        [key: string]: IDBModel;
    };
    modelsFns;

    constructor(
        modelsFns: {
            [key: string]: IModelFn;
        },
        process: NodeJS.Process,
    ) {
        this.modelsFns = modelsFns;
        this.process = process;

        const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

        this.connection = new Sequelize(
            `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
            {
                logging: false,
            },
        );

        this.modelsFns = { ...modelsFns };

        this.models = {};
        this.initModels();
    }

    private initModels = () => {
        for (const modelKey in this.modelsFns) {
            this.models[modelKey] = this.modelsFns[modelKey](this.connection);
        }

        for (const modelKey in this.modelsFns) {
            const associate = this.models[modelKey]?.associate;

            if (associate) {
                associate(this.models);
            }
        }

        console.log('Models initialized successfully.');
    };

    public async sync() {
        try {
            await this.connection.sync();
            console.log('Models synced successfully.');
        } catch (error) {
            console.error('Unable to sync models:', error);
            throw error;
        }
    }

    public async connect() {
        try {
            await this.connection.authenticate();
            console.log(
                'Connection with database has been established successfully.',
            );

            this.initModels();
        } catch (error) {
            console.error('Unable to connect to the database');
        }
    }
}
