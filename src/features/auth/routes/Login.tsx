import { AuthLayout } from '../components/AuthLayout';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
  const onLoginSuccess = () => { }
  return (
    <AuthLayout>
      <LoginForm onLoginSuccess={onLoginSuccess} />
    </AuthLayout>
  )
}