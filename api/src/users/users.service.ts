import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserInput, LoginUserInput } from './dto/create-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schema/user-schema';
import { Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}
  async signupUser(createUserInput: CreateUserInput) {
    const { email, name, password } = createUserInput;

    if (!email || !name || !password) {
      throw new HttpException('All fields are required', 400);
    }

    const existingUser = await this.userModel.findOne({
      where: { email },
    });

    if (existingUser) {
      throw new HttpException('User already exists', 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await this.userModel.create({
      email,
      name: name,
      password: hashedPassword,
    });

    return 'User registered successfully, Please Login now.';
  }

  async findAll() {
    const allUser = await this.userModel.find();
    return allUser;
  }

  async loginUser(
    loginInput: LoginUserInput,
    context: { req: Request; res: Response },
  ) {
    const { email, password } = loginInput;

    // 1️⃣ Validate input
    if (!email || !password) {
      throw new HttpException('Email and password are required', 400);
    }

    // 2️⃣ Find user by email
    const user = await this.userModel.findOne({ email: email });

    // 3️⃣ User not found
    if (!user) {
      throw new HttpException('Invalid credentials', 401);
    }

    // 4️⃣ Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new HttpException('Invalid credentials', 401);
    }

    // 5️⃣ Sign JWT
    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });
    context.res.cookie('user-token', token);

    return {
      message: 'Login successful',
      accessToken: token,
    };
  }
}
