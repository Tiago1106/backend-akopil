import { AuthModel } from '../models/authModel';

export class AuthService {

  static async getUserByEmail(email: string) {
    return await AuthModel.findUserByEmail(email);
  }
}