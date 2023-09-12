import { ReactNode } from 'react'
import { AUTH_BG } from '@/constant'

interface AuthLayoutProps {
  children: ReactNode
}
export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="auth-layout">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-md-4">
            <div className="auth-page-content p-4 d-flex align-items-center min-vh-100">
              <div className="auth-content ">
                {children}
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="auth-bg" style={{ backgroundImage: `url(${AUTH_BG})` }}>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}