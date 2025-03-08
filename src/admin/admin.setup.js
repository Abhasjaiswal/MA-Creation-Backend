import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import mongoose from 'mongoose';
import * as AdminJSMongoose from '@adminjs/mongoose';
import Contact from '../models/contact.model.js';

AdminJS.registerAdapter(AdminJSMongoose);

const adminJs = new AdminJS({
  resources: [Contact],
  rootPath: '/admin',
});

const setupAdmin = (app) => {
  const adminRouter = AdminJSExpress.buildRouter(adminJs);
  app.use(adminJs.options.rootPath, adminRouter);
};

export default setupAdmin;
