import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { getRoutes, routes } from 'routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
