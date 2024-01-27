import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const middlewares = [cors(), helmet(), express.json(), express.urlencoded({ extended: true })];

export class Server {
    private port: number;
    private app: express.Application;

    constructor() {
        const PORT = Number(process?.env?.PORT || 4000);

        if (!process.env.PORT) {
            console.log('PORT not defined, selecting 4000 as default');
        }

        this.port = PORT;
        this.app = express();
    }

    public middlewares(...middlewares: Array<express.RequestHandler>) {
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    }

    public start() {
        this.middlewares(...middlewares);

        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}
