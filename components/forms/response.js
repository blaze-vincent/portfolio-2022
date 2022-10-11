import { useEffect } from "react"

export default function Response({children, cleanup = _ => {}, success=true}){
  useEffect(_ => {
    const timeout = setTimeout(_ => {
      cleanup()
    }, 5000)
    return _ => {
      clearTimeout(timeout)
    }
  }, [])

  return <div
    className={`fixed bottom-0 w-full min-h-8 flex flex-row items-center justify-center px-4 py-2 ${success ? 'bg-lime-500' : 'bg-rose-500'}`}
  >
    <p
      className="text-white font-medium animate-pulse"
    >{children}</p>
  </div>  
}