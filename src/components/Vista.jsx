import { Link, Outlet } from "react-router-dom"

export const Vista = () => {
  return (
    <div>
        Vista padre
        <Link to='/vista'>dar click</Link>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}
