import { verify } from "jsonwebtoken";
import { NextFunction } from "express";
import authConfig from "../config/auth";
import { Request, Response } from "express";

interface ITokenPayload {
    iat: number;
    exp: number;
    sub: string;
    name: string;
    email: string;
}

export function ensureAuthenticated (request:Request, response: Response, next: NextFunction): void {

    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new Error("JWT is missing");
    }

    const [, token] = authHeader.split(" ");

    try {
        const decoded = verify(token, authConfig.jwt.secret);
        const {sub, name, email} = decoded as ITokenPayload;

        request.user = {
            id: sub,
            name,
            email,
        };

        return next();
    } catch (err) {
        throw new Error("Inválido");
    }
}