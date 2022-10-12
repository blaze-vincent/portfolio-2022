import Form from "../../components/forms/form";

export default function AdminLogin(){
  return <div>
    <Form action='/api/auth'>
      <label htmlFor='username'>
        Username:
      </label>
      <input name="username" id='username' type='text'/>

      <label htmlFor="password">
        Password:
      </label>
      <input id='password' name='password' type='password' />
    </Form>
  </div>
}