import getServerSidePropsAuthentication from "../../middleware/getServerSidePropsAuthentication";

export async function getServerSideProps(ctx){
  return getServerSidePropsAuthentication({
    cookie: ctx.req.cookies['connect.sid'], 
    authFailRoute: '/admin/login'
  });
}

export default function Admin({authenticated}){
  return authenticated && <div>
    this is the admin page
  </div>
}