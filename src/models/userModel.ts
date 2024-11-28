import prisma from '../prisma/prismaClient';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class UserModel {
  static async createUser(name: string, email: string, password: string) {
    return await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  }

  static async findUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  static async getAllUsers() {
    return await prisma.user.findMany();
  }
}