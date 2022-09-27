import dbConnect from '../db/connect'
import Session from '../db/models/session'

export default async function getSession(sid){
  await dbConnect();

  //todo: fix sid being cast to ObjectID when express-session stores the id as a String
  console.log(await Session.findById(sid))
}