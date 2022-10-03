export default function AdminLogin(){
  return <div>
    <form
      method='POST'
      onSubmit={e => {
        e.preventDefault();
        const responses = Array.from(e.target.elements)
          .filter(el => el.value)
          .map(el => {
            return {name: el.name, value: el.value}
          });
        
        const body = new FormData();
        responses.forEach(obj => {
          body.append(obj.name, obj.value)
        })  

        fetch('/api/auth', {
          credentials: "same-origin",
          body,
          method: 'POST'
        }).then(res => {
          return res.json()
        }).then(async res => {
          console.log(await res)
        })
      }}
    >
      <label htmlFor='username'>
        Username:
      </label>
      <input name="username" id='username' type='text'/>

      <label htmlFor="password">
        Password:
      </label>
      <input id='password' name='password' type='password' />

      <button type='submit'>Submit</button>
    </form>
  </div>
}