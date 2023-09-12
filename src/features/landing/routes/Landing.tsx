import { useEffect, useState } from 'react'
import { clsx } from 'clsx';
import { Head } from "@/components/Head"

import { WELCOME_IMAGE, WELCOME_IMAGE_2 } from '@/constant';
export const Landing = () => {
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsActive(true)
    }, 3000)
  }, [])
  return (
    <>
      <Head description="Welcome to react boilerplate" />
      <div className="landing-page py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className={clsx('d-inline-block position-relative welcome-image', isActive ? 'active' : '')}>
                <img className='init-welcome-image' src={WELCOME_IMAGE} alt="" />
                <img className='secondary-welcome-image' src={WELCOME_IMAGE_2} alt="" />
              </div>
            </div>
            <div className='col-12 text-center'>
              <h3 className='mt-5'>Welcome to React Boilerplate</h3>
              <p className='text-muted'>Exemplifying Optimal Approaches to
                <br />
                Develop React Applications</p>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}