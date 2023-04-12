import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="w-1/2 h-screen m-auto flex items-center ">
      <div className="bg-gray800 h-3/4 w-full p-10 rounded-lg flex flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
