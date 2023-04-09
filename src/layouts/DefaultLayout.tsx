import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="w-1/2 h-screen m-auto border border-red-500 flex items-center ">
      <div className="bg-red-500 h-3/4 w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
