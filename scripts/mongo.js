import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

export default async function connect() {
  const mongo = new MongoClient(process.env.MONGO);
  console.log('connected to server');

  const db = mongo.db('foci');
  console.log('connected to db');
  return db;
}
