import { UserModel } from '../models/userModel';
import bcrypt from 'bcryptjs';

export class UserService {
  static async registerUser(name: string, email: string, password: string) {
    const existingUser = await UserModel.findUserByEmail(email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return await UserModel.createUser(name, email, hashedPassword);
  }

  static async getUsers() {
    return await UserModel.getAllUsers();
  }
}