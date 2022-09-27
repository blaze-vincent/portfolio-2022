import cookiesig from 'cookie-signature'

export default function cookieIsValid(sid, signature){
  const expectedSignature = cookiesig.sign(sid, process.env.SESSION_SECRET).split('.')[1];
  
  return signature === expectedSignature;
}