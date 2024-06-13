import { Icon } from '@mui/material'
import { Home } from 'pages/home'
import { ReactNode } from 'react'
import { Route } from 'react-router-dom'

type AppRoute = {
  type: 'collapse'
  name: string
  key: string
  icon: ReactNode
  route: '/dashboard'
  component: ReactNode
  collapse?: AppRoute[]
}

export const routes: AppRoute[] = [
  {
    type: 'collapse',
    name: 'Menu Principal',
    key: 'dashboard',
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: '/dashboard',
    component: <Home />
  }
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getRoutes(currentRoutes: AppRoute[]): any[] {
  return currentRoutes.map((route: AppRoute) => {
    if (route.collapse) {
      return getRoutes(route.collapse)
    }

    if (route.route) {
      return (
        <Route path={route.route} element={route.component} key={route.key} />
      )
    }

    return null
  })
}
