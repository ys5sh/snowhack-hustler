/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/schema/user-schema';
import { CreateUserInput, LoginUserInput } from './dto/create-user.input';
import { LoginResponse } from './entities/user.entity';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { JwtGqlGuard } from './jwt-gql.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => String)
  signUp(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.signupUser(createUserInput);
  }

  @Query(() => [User])
  findAll() {
    return this.usersService.findAll();
  }

  @Mutation(() => LoginResponse)
  login(
    @Args('loginInput') loginInput: LoginUserInput,
    @Context() context: any,
  ) {
    return this.usersService.loginUser(loginInput, context);
  }

  @Query(() => String)
  @UseGuards(JwtGqlGuard)
  me(@Context() context: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return context.req.user.email;
  }
}
