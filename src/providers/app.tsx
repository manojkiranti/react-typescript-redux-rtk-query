import { ReactNode, Suspense } from "react"
import { BrowserRouter as Router } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";

import { Loader } from "@/components/Elements"
import { store } from "@/store";

import { QUESTION } from "@/constant";
import { Button } from "react-bootstrap";

interface AppProviderProps {
  children: ReactNode
}

const ErrorFallback = () => {
  return (
    <div className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <img src={QUESTION} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-xs-12 text-center">
          <h3 className="mt-3">Opps, something went wrong</h3>
          <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
            Refresh
          </Button>
        </div>
      </div>
    </div>
  )
}
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <Provider store={store}>
            <ToastContainer />
            <Router>
              {children}
            </Router>
          </Provider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  )
} 