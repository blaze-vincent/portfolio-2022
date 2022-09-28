import { Schema, model, models } from 'mongoose';

const SessionSchema = new Schema({
  _id: String,
  expires: Date,
  session: String,
})

module.exports = models.Session || model('Session', SessionSchema)