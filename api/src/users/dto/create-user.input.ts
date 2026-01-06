import { Field, InputType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  name: string;
}

@InputType()
export class LoginUserInput {
  @Field(() => String)
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @Field(() => String)
  password: string;
}
