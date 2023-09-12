import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
export const Logo = () => {
  return (
    <div id="logo" className="d-inline-flex align-items-center justify-content-center">
      <span className="text-danger d-inline-block me-1" >
        <FontAwesomeIcon icon={faReact} size="2x" />
      </span>

      <span className="logo-text d-inline-block text-dark text-uppercase fs-3 fw-bold">Admin</span>
    </div>
  )
}