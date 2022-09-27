import { Schema, model, models } from 'mongoose';

const SessionSchema = new Schema({
  expires: Date,
  session: String
})

module.exports = models.Session || model('Session', SessionSchema)