import cors from 'cors'
const ACCEPTED_ORIGINS = [
    'http://localhost',
    'http://localhost:5173',
    'http://localhost:4000',
    'http://195.35.42.146:85',
]
export const corsMiddlewares = ({ aceptedOrigin = ACCEPTED_ORIGINS } = {}) => cors({
    origin: (origin, callback) => {
        if (aceptedOrigin.includes(origin)) {
            return callback(null, true);
        }

        if (!origin) {
            return callback(null, true);
        }

        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true, // Permite el envío de cookies
});