import { Injectable, OnModuleInit } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User, CreateUserDto } from './user.entity';

@Injectable()
export class UsersService implements OnModuleInit {
  // In-memory storage for users (replace with database in production)
  private users: User[] = [];

  async onModuleInit() {
    // Seed the default admin user
    const hashedPassword = await bcrypt.hash('Abcd1234', 10);
    this.users.push({
      id: 1,
      email: 'admin@abc.com',
      password: hashedPassword,
      name: 'Admin User',
      createdAt: new Date(),
    });
    console.log('✅ Default user seeded: admin@abc.com');
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const newUser: User = {
      id: this.users.length + 1,
      email: createUserDto.email,
      password: hashedPassword,
      name: createUserDto.name,
      createdAt: new Date(),
    };

    this.users.push(newUser);
    return newUser;
  }

  async validatePassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  getAllUsers(): Omit<User, 'password'>[] {
    return this.users.map(({ password, ...user }) => user);
  }
}
