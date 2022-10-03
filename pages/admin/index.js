import getServerSidePropsAuthentication from "../../middleware/getServerSidePropsAuthentication";

export async function getServerSideProps(ctx){
  return getServerSidePropsAuthentication(ctx.req.cookies['connect.sid']);
}

export default function Admin({authenticated}){
  return authenticated && <div>
    this is the admin page
  </div>
}