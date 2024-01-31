import { Database } from './server/Database';
import { OAuthAccessTokens } from './models/oauth2/OAuthAccessTokens';
import { OAuthAuthorizationCodes } from './models/oauth2/OAuthAuthorizationCodes';
import { OAuthClients } from './models/oauth2/OAuthClients';
import { OAuthRefreshTokens } from './models/oauth2/OAuthRefreshTokens';
import { Server } from './server/Server';
import dotenv from 'dotenv';

dotenv.config();

const db = new Database(
    {
        OAuthClients,
        OAuthAuthorizationCodes,
        OAuthAccessTokens,
        OAuthRefreshTokens,
    },
    process,
);

const app = new Server(process, db);

app.start();
app.dbConnect();
