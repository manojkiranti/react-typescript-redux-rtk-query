import './assets/scss/Theme.scss';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App
