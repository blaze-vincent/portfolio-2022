import cookieIsValid from "../utils/cookieIsValid";
import sessionIsAuthenticated from "../utils/sessionIsAuthenticated";

export default function getServerSidePropsAuthentication(cookie){
  //abstract methods performed in getserverside props on /admin
  const cookieRegex = /s:.*\..*/i;
  if(cookieRegex.test(cookie)){
    const cookieComponents = cookie.split(':')[1].split('.');
    const sid = cookieComponents[0];
    const signature = cookieComponents[1];

    if(cookieIsValid(sid, signature)){
      if(sessionIsAuthenticated(sid)){
        return {
          props: {
            authenticated: true
          }
        }
      }
    }
  }

  return {
    redirect: {
      destination: '/',
      permanent: false
    }
  }
}