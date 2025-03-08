import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import mongoose from 'mongoose';
import * as AdminJSMongoose from '@adminjs/mongoose';
import Contact from '../models/contact.model.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

AdminJS.registerAdapter(AdminJSMongoose);

const adminJs = new AdminJS({
  resources: [Contact],
  rootPath: '/admin',
});

const ADMIN_ID = process.env.ADMIN_ID || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

const authenticate = async (email, password) => {
  if (email === ADMIN_ID && password === ADMIN_PASSWORD) {
    return { email };
  }
  return null;
};

const setupAdmin = (app) => {
  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    {
      authenticate,
      cookiePassword: 'session-secret',
    }
  );
  app.use(adminJs.options.rootPath, adminRouter);
};

export default setupAdmin;
