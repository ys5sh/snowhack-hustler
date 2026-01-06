import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
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
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const gqlCtx = GqlExecutionContext.create(context);
    const req = gqlCtx.getContext<{ req: Request & { user?: JwtPayload } }>()
      .req;

    const authHeader = req.headers?.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    if (!authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Invalid authorization format');
    }

    const token = authHeader.split(' ')[1];
    console.log('auth header', token);

    try {
      const payload = this.jwtService.verify(token) as JwtPayload;
      console.log('payload verify', payload);

      // attach user to request
      req.user = payload; // ✅ no assertion needed

      return true;
    } catch {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
