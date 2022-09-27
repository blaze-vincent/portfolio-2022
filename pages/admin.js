import cookieIsValid from "../utils/cookieIsValid";
import getSession from "../utils/getSession";

export async function getServerSideProps(ctx){
  const cookie = ctx.req.cookies['connect.sid'];

  if(!cookie){
    //handle no cookie
  }

  const cookieComponents = cookie.split(':')[1].split('.');
  const sid = cookieComponents[0];
  const signature = cookieComponents[1];

  if(!cookieIsValid(sid, signature)){
    //cookie signature is invalid - hijacking likely
  }

  //check store for session matching sid
  getSession(sid);

  return {
    props: {

    }
  }
}

export default function Admin({}){
  return <div>
    this is the admin page
  </div>
}