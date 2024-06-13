import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { getRoutes, routes } from 'routes'

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    // <TemplateProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    // </TemplateProvider>
  )
}

export default App
