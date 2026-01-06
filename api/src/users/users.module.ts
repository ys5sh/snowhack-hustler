import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { models } from 'src/schema/index-schema';

@Module({
  imports: [MongooseModule.forFeature(models)],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
