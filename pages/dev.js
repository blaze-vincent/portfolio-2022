function createAdminAccount(){
  const body = new FormData()
  body.append('username', 'admin');
  body.append('password', 'admin1')

  fetch('/api/signup', {
    method: 'POST',
    body
  })
}
function logInAdminAccount(){
  const body = new FormData()
  body.append('username', 'admin');
  body.append('password', 'admin1')

  fetch('/api/auth', {
    method: 'POST',
    body
  })
}

export default function Dev(){
  return <div className="flex flex-col gap-4 p-8 w-max items-start">
    <button onClick={createAdminAccount}>create admin account</button>
    <button onClick={logInAdminAccount}>log in admin account</button>
  </div>
}