import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const ensureAuthTokenMiddleware = async (req: Request,res: Response,next: NextFunction) => {
  let token = req.body.token.slice(10,-2)
  
  if (!token){
    throw new Error('There are not a token');
  }
  
  jwt.verify(token,process.env.JWT_SECRET as string,(error: any, decoded: any) => {
    if (error) {
      throw new Error('Invalid token');
    }

    req.users = {
        userId: decoded.sub
    };

    next();
    }
  );
};

export default ensureAuthTokenMiddleware;