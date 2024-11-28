import { Request, Response } from 'express';

import { UserService } from '../services/userService';

export class UserController {
  static async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
  
      const newUser = await UserService.registerUser(name, email, password);
  
      const { password: _, ...userWithoutPassword } = newUser; 
  
      res.status(201).json(userWithoutPassword); 
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'An unknown error occurred' });
      }
    }
  }

  static async getAllUsers(_: Request, res: Response) {
    try {
      const users = await UserService.getUsers();
  
      const usersWithoutPassword = users.map(({ password, ...userWithoutPassword }) => userWithoutPassword);
  
      res.status(200).json(usersWithoutPassword);
    } catch (error) {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
}