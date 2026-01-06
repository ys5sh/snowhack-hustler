import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

/**
 * Shape of JWT payload
 */
export interface JwtPayload {
  sub: string;
  email: string;
  iat?: number;
  exp?: number;
}

@Injectable()
export class JwtGqlGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const gqlCtx = GqlExecutionContext.create(context);
    const req = gqlCtx.getContext<{ req: Request; res: Response }>().req;

    const authHeader: string | undefined = req.headers?.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    if (!authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Invalid authorization format');
    }

    const token: string = authHeader.split(' ')[1];

    try {
      const payload = jwt.verify(
        token,
        process.env.JWT_SECRET as string,
      ) as JwtPayload;

      // attach user to request
      (req as unknown as { user: JwtPayload }).user = payload;

      return true;
    } catch {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
