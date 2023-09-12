import { Spinner } from "react-bootstrap"
export const Loader = () => {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center position-absolute w-100 start-0 top-0" >
      <Spinner />
    </div>

  )
}