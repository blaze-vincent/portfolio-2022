import cookieIsValid from "../utils/cookieIsValid";
import sessionIsAuthenticated from "../utils/sessionIsAuthenticated";

export async function getServerSideProps(ctx){
  const unauthorized = {
    redirect: {
      destination: '/',
      permanent: false
    }
  }

  const cookie = ctx.req.cookies['connect.sid'];

  if(!cookie){
    return unauthorized
  }
  
  const cookieRegex = /s%.*\./i;
  if(!cookieRegex.test(cookie)){
    return unauthorized
  }

  const cookieComponents = cookie.split(':')[1].split('.');
  const sid = cookieComponents[0];
  const signature = cookieComponents[1];

  if(!cookieIsValid(sid, signature)){
    //cookie signature is invalid - hijacking likely
    return unauthorized
  }

  if(sessionIsAuthenticated(sid)){
    return {
      props: {
        authenticated: true
      }
    }
  }

  return unauthorized

}

export default function Admin({authenticated}){
  return authenticated && <div>
    this is the admin page
  </div>
}