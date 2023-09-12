import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Logo } from "@/components/Elements"
import { Input } from '@/components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Button, Alert } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const schema = yup.object({
  email: yup.string().email().required('Email is required'),
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
})

export type RegisterData = yup.InferType<typeof schema>
export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (registerData: RegisterData) => {
    console.log(registerData)
  }
  return (
    <>
      <div>
        <Logo />
      </div>
      <h4 className="font-size-18 mt-4">Register account</h4>
      <p className="text-muted">Get your free account today.</p>


      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={'Email'}
          type="text"
          name="email"
          placeholder="Enter your email"
          containerClass={'mb-3'}
          register={register}
          errors={errors}
          startIcon={<FontAwesomeIcon icon={faEnvelope} />}
          variant='outlined'
        />
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
        <div className="mt-4">
          <Button className='w-100' type='submit'>Register</Button>
        </div>
        <div className="mt-5 text-center">
          <p>Already have an account ? <Link to="/auth/login" className="font-weight-medium text-primary"> Login </Link> </p>
          <p>© {new Date().getFullYear()} React Admin. Developed by <a href="https://manoj-rai.vercel.app/" target='_blank'> Manoj Rai</a></p>
        </div>
      </form>
    </>
  )
}