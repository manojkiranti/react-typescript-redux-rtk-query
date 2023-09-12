import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { CheckInput, Input } from '@/components/Form';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '@/components/Elements';
import { useLoginMutation } from '@/store';

type LoginFormProps = {
  onLoginSuccess: () => void
}

const schema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
})
export type LoginData = yup.InferType<typeof schema>
export const LoginForm = ({ onLoginSuccess }: LoginFormProps) => {
  const [login, { isLoading }] = useLoginMutation()

  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (loginData: LoginData) => {

    login(loginData).unwrap()
      .then((res) => {
        console.log(res)
        onLoginSuccess()
      }).catch((err) => {
        console.log(err)
      }).finally(() => {

      })
  }
  return (
    <>
      <div>
        <Logo />
      </div>

      <h4 className="font-size-18 mt-4">Welcome Back !</h4>
      <p className="text-muted">Sign in to continue to React Admin.</p>

      <Alert variant="danger" className="mb-4" dismissible>
        Username or password are invalid. Please enter correct username and password
      </Alert>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={'Username'}
          type="text"
          name="username"
          placeholder="Enter your username"
          containerClass={'mb-3'}
          register={register}
          errors={errors}
          startIcon={<FontAwesomeIcon icon={faCircleUser} />}
          variant='outlined'
        />
        <Input
          label={'Password'}
          type="password"
          name="password"
          placeholder="Enter your password"
          containerClass={'mb-3'}
          register={register}
          errors={errors}
          startIcon={<FontAwesomeIcon icon={faLock} />}
          variant='outlined'
        />
        <CheckInput name="rememberMe" label="Remember me" containerClass={'mb-3'} />
        <div className="mt-4">
          <Button className='w-100' type='submit' disabled={isLoading}>Log In</Button>
        </div>
        <div className="mt-4">
          <Link to="/forgot-password" className="text-muted">
            <FontAwesomeIcon icon={faLock} className="me-1" /> Forgot your password?
          </Link>
        </div>
        <div className="mt-5 text-center">
          <p>Don't have an account ? <Link to="/auth/register" className="font-weight-medium text-primary"> Register </Link> </p>
          <p>© {new Date().getFullYear()} React Admin. Developed by <a href="https://manoj-rai.vercel.app/" target='_blank'> Manoj Rai</a></p>
        </div>
      </form>
    </>
  )
}