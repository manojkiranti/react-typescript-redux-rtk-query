import { FormInputProps } from '@/types';
import Form from 'react-bootstrap/Form';

export const CheckInput = ({
  label,
  type,
  name,
  register,
  errors,
  className,
  containerClass,
  refCallback,
  ...otherProps
}: FormInputProps) => {
  return (
    <Form.Group className={containerClass}>
      <Form.Check
        type={type}
        label={label}
        name={name}
        id={name}
        ref={(r: HTMLInputElement) => {
          if (refCallback) refCallback(r);
        }}
        className={className}
        isInvalid={errors && errors[name] ? true : false}
        {...(register ? register(name) : {})}
        {...otherProps}
      />

      {errors && errors?.[name] ? (
        <Form.Control.Feedback type="invalid">{errors?.[name]?.['message'] as string}</Form.Control.Feedback>
      ) : null}
    </Form.Group>
  )
}
