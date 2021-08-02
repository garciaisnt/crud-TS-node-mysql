import express, { Application } from 'express';
import cors from 'cors';

import userRouter from '../routes/usuario';
import db from '../db/connection';


class Server{

  private app: Application;
  private port: String;
  private apiPaths = {
    usuarios: '/api/usuarios'
  }

  constructor(){
    this.app = express();
    this.port = process.env.PORT || '8000';
    
    //initial conf
    this.dbConnection();
    this.middleware();
    this.routes();    
  }

  async dbConnection() {

    try {

      await db.authenticate();
      console.log("database online");
      
    } catch (error:any) {
      throw new Error(error);
    }

  }

  middleware() {

    //CORS
    this.app.use( cors() );

    //body json parse
    this.app.use(express.json());

    //static folder 
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRouter);    
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running || port: "+ this.port)
    });
  }

}

export default Server;