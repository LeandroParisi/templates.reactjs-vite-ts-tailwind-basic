import classNames from 'classnames'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routes } from 'routes'

const sideBarWidth = 300 // px

// Based on: https://tailwindcomponents.com/component/responsive-sidebar-tailwindcss
export function DashboardLayout({ children }) {
  const [showSideBar, setShowSideBar] = useState(false)
  const { pathname: currentRoute } = useLocation()

  // dropdown();

  function openSidebar() {
    setShowSideBar(!showSideBar)
  }

  return (
    <>
      <span
        className="absolute left-4 top-5 cursor-pointer text-4xl text-white"
        onClick={openSidebar}
      >
        <i className="bi bi-filter-left rounded-md bg-gray-900 px-2"></i>
      </span>
      <div
        className={classNames(
          `fixed inset-y-0 overflow-y-auto bg-gray-900 p-2 text-center lg:left-0 sm:w-[300px] w-full`,
          { hidden: !showSideBar }
        )}
      >
        <div className="text-xl text-gray-100">
          <div className="mt-1 flex items-center p-2.5">
            <i className="bi bi-app-indicator rounded-md bg-blue-600 px-2 py-1"></i>
            <h1 className="ml-3 text-[15px] font-bold text-gray-200">
              Project Name
            </h1>
            <i
              className="bi bi-x ml-28 cursor-pointer lg:hidden"
              onClick={openSidebar}
            ></i>
          </div>
          <div className="my-2 h-px bg-gray-600"></div>
        </div>

        {routes.map(({ component, icon, key, name, route, type }) => {
          const isCurrentPage = currentRoute.startsWith(route)
          // TODO: if is is current page make it disabled
          return (
            <Link to={route} key={key} className="text-white">
              {name}
            </Link>
          )
        })}

        <div className="my-4 h-px bg-gray-600"></div>

        <div className="mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300 hover:bg-blue-600">
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="ml-4 text-[15px] font-bold text-gray-200">
            Logout
          </span>
        </div>
      </div>
      <div
        style={{
          marginLeft: showSideBar ? `${sideBarWidth}px` : '20px'
        }}
        className="p-5"
      >
        {children}
      </div>
    </>
  )
}
