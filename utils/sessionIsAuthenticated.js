import dbConnect from '../db/connect'
import Session from '../db/models/session'

export default async function sessionIsAuthenticated(sid){
  await dbConnect();

  const dbSession = await Session.findOne({_id: sid});

  if(dbSession){
    const sessionJson = await JSON.parse(dbSession.session);

    return sessionJson.authenticated;
  }

  return false
}