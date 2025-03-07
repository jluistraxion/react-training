import { Routes, Route } from 'react-router'
import Simpsons from '@/pages/Simpsons'
import Home from '@/pages/Home'

export default function RoutesApp() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/characters"
        element={<Simpsons />}
      />
    </Routes>
  )
}
