import { Sequelize } from 'sequelize';
import { IDb, IModelFn } from '../interfaces/Server';

export class Database implements IDb {
    sequelize: Sequelize;
    process: NodeJS.Process;
    models: {
        [key: string]: IModelFn;
    };

    constructor(
        models: {
            [key: string]: IModelFn;
        },
        process: NodeJS.Process,
    ) {
        this.models = models;
        this.process = process;

        const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

        this.sequelize = new Sequelize(
            `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
            {
                logging: false,
            },
        );
    }

    private initModels = () => {
        for (const modelKey in this.models) {
            this.models[modelKey](this.sequelize);
        }

        console.log('Models initialized successfully.');
    };

    public async sync() {
        try {
            await this.sequelize.sync();
            console.log('Models synced successfully.');
        } catch (error) {
            console.error('Unable to sync models:', error);
            throw error;
        }
    }

    public async connect() {
        try {
            await this.sequelize.authenticate();
            console.log(
                'Connection with database has been established successfully.',
            );

            this.initModels();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            throw error;
        }
    }
}
