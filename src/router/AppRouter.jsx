import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'

// Lazy load pages for faster initial load
const Home = lazy(() => import('../pages/Home'))
const Bikes = lazy(() => import('../pages/Bikes'))
const BikeDetails = lazy(() => import('../pages/BikeDetails'))
const Login = lazy(() => import('../pages/Login'))
const Signup = lazy(() => import('../pages/Signup'))
const AddBike = lazy(() => import('../pages/AddBike'))
const EditBike = lazy(() => import('../pages/EditBike'))
const MyCollection = lazy(() => import('../pages/MyCollection'))

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
  </div>
)

function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/bikes/:id" element={<BikeDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-bike" element={
          <ProtectedRoute>
            <AddBike />
          </ProtectedRoute>
        } />
        <Route path="/edit-bike/:id" element={
          <ProtectedRoute>
            <EditBike />
          </ProtectedRoute>
        } />
        <Route path="/my-collection" element={
          <ProtectedRoute>
            <MyCollection />
          </ProtectedRoute>
        } />
      </Routes>
    </Suspense>
  )
}

export default AppRouter
