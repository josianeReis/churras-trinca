import React, { useContext } from 'react'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'
import { AuthContext } from '../contexts/auth'

const Routes = () => {
  return useContext(AuthContext).signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
