import prisma from '../prisma/prismaClient';


export class AuthModel {

  static async findUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }
}