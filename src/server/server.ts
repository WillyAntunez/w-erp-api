import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { IDb } from '../types/Server';
import routes from '../routes/routes';

const middlewares = [
    cors(),
    helmet(),
    express.json(),
    express.urlencoded({ extended: true }),
];

export class Server {
    private port: number;
    private app: express.Application;
    private db: IDb;

    constructor(process: NodeJS.Process, db: IDb) {
        const PORT = Number(process?.env?.PORT || 4000);

        if (!process.env.PORT) {
            console.log('PORT not defined, selecting 4000 as default');
        }

        this.port = PORT;
        this.app = express();

        this.db = db;
    }

    public middlewares(...middlewares: Array<express.RequestHandler>) {
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    }

    public routes() {
        this.app.use('/api/v1', routes);
    }

    public start() {
        this.middlewares(...middlewares);
        this.routes();

        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }

    public dbConnect() {
        this.db.connect();
    }
}
