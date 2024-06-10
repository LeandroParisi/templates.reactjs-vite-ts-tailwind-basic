// Based on: https://tailwindcomponents.com/component/responsive-sidebar-tailwindcss
export function DashboardLayout() {
  return (
    <>
      <span
        className="absolute left-4 top-5 cursor-pointer text-4xl text-white"
        onClick="openSidebar()"
      >
        <i className="bi bi-filter-left rounded-md bg-gray-900 px-2"></i>
      </span>
      <div className="sidebar fixed inset-y-0 w-[300px] overflow-y-auto bg-gray-900 p-2 text-center lg:left-0">
        <div className="text-xl text-gray-100">
          <div className="mt-1 flex items-center p-2.5">
            <i className="bi bi-app-indicator rounded-md bg-blue-600 px-2 py-1"></i>
            <h1 className="ml-3 text-[15px] font-bold text-gray-200">
              TailwindCSS
            </h1>
            <i
              className="bi bi-x ml-28 cursor-pointer lg:hidden"
              onClick="openSidebar()"
            ></i>
          </div>
          <div className="my-2 h-px bg-gray-600"></div>
        </div>
        <div className="flex cursor-pointer items-center rounded-md bg-gray-700 p-2.5 px-4 text-white duration-300">
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search"
            className="ml-4 w-full bg-transparent text-[15px] focus:outline-none"
          />
        </div>
        <div className="mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300 hover:bg-blue-600">
          <i className="bi bi-house-door-fill"></i>
          <span className="ml-4 text-[15px] font-bold text-gray-200">Home</span>
        </div>
        <div className="mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300 hover:bg-blue-600">
          <i className="bi bi-bookmark-fill"></i>
          <span className="ml-4 text-[15px] font-bold text-gray-200">
            Bookmark
          </span>
        </div>
        <div className="my-4 h-px bg-gray-600"></div>
        <div
          className="mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300 hover:bg-blue-600"
          onClick="dropdown()"
        >
          <i className="bi bi-chat-left-text-fill"></i>
          <div className="flex w-full items-center justify-between">
            <span className="ml-4 text-[15px] font-bold text-gray-200">
              Chatbox
            </span>
            <span className="rotate-180 text-sm" id="arrow">
              <i className="bi bi-chevron-down"></i>
            </span>
          </div>
        </div>
        <div
          className="mx-auto mt-2 w-4/5 text-left text-sm font-bold text-gray-200"
          id="submenu"
        >
          <h1 className="mt-1 cursor-pointer rounded-md p-2 hover:bg-blue-600">
            Social
          </h1>
          <h1 className="mt-1 cursor-pointer rounded-md p-2 hover:bg-blue-600">
            Personal
          </h1>
          <h1 className="mt-1 cursor-pointer rounded-md p-2 hover:bg-blue-600">
            Friends
          </h1>
        </div>
        <div className="mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300 hover:bg-blue-600">
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="ml-4 text-[15px] font-bold text-gray-200">
            Logout
          </span>
        </div>
      </div>
    </>
  )
}
