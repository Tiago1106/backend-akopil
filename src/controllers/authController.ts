import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { AuthService } from '../services/authService';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const EXPIRE_IN = process.env.EXPIRE_IN || '1m'

export class AuthController {

  static async auth(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await AuthService.getUserByEmail(email);

      console.log(user);

      if (!user) {
        throw new Error('E-Mail not found');
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        throw new Error('Password mismatch');
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: EXPIRE_IN }
      );

      res.status(200).json({
        token,
        expiresIn: EXPIRE_IN,
        name: user.name,
        email: user.email
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}