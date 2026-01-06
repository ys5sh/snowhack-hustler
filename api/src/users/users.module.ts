import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { models } from 'src/schema/index-schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature(models),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'supersecret', // secret for signing
      signOptions: { expiresIn: '7d' }, // token expiry
    }),
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
