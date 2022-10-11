import { useState } from "react";
import Response from "./response";

//todo: test array in response
export default function Form({action, method='POST', children, className}){
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const responseCleanup = resSetter => {
    return _ => {
      resSetter(null)
    }
  }
  
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
    })
    .then(res => res.json())
    .then(res => {
      if(res.error){
        throw new Error(res.error)
      }

      const data = Object.entries(res).map(obj => {
        return `${obj[0]}: ${obj[1]}`
      }).join('; ')

      setSuccess(data)
    }).catch(err => {
      setError(err.message)
    })
  }

  return <form
    className={className}
    onSubmit={submit}
  >
    {children}
    {
      error && <Response success={false} cleanup={responseCleanup(setError)}>
        {error}
      </Response>
    }
    {
      success && <Response cleanup={responseCleanup(setSuccess)}>
        {success}
      </Response>
    }
  </form>
}