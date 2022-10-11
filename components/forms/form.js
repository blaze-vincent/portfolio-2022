export default function Form({action, method='POST', children}){
  const submit = e => {
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

    fetch(action, {
      credentials: "same-origin",
      body,
      method
    }).then(res => {
      return res.json()
    }).then(async res => {
      console.log(await res)
    })
  }

  return <form
    onSubmit={submit}
  >
    {children}
  </form>
}