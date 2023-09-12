import { FormInputProps } from '@/types';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const OutlinedInput = ({
  type,
  name,
  placeholder,
  register,
  errors,
  comp,
  rows,
  className,
  refCallback,
  containerClass,
  startIcon,
  label,
  labelClassName,
  ...otherProps
}: FormInputProps) => {
  return (
    <>
      <div className={`outlined-form-group ${containerClass} ${startIcon && 'with-icon'}`}>
        {startIcon && <span className="input-icon">{startIcon}</span>}
        {label ? (
          <>
            <Form.Label className={labelClassName}>{label}</Form.Label>
          </>
        ) : null}
        <Form.Control
          type={type}
          placeholder={placeholder}
          name={name}
          as={comp}
          id={name}
          ref={(r: HTMLInputElement) => {
            if (refCallback) refCallback(r);
          }}
          className={className}
          isInvalid={errors && errors[name] ? true : false}
          {...(register ? register(name) : {})}
          rows={rows}
          {...otherProps}></Form.Control>
        {errors && errors?.[name] ? (
          <Form.Control.Feedback type="invalid" className="d-block">
            {errors?.[name]?.message as string}
          </Form.Control.Feedback>
        ) : null}
      </div>
    </>
  );
};

const TextInput = ({
  type,
  name,
  placeholder,
  register,
  errors,
  comp,
  rows,
  className,
  refCallback,
  ...otherProps
}: FormInputProps) => {
  return (
    <>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        as={comp}
        id={name}
        ref={(r: HTMLInputElement) => {
          if (refCallback) refCallback(r);
        }}
        className={className}
        isInvalid={errors && errors[name] ? true : false}
        {...(register ? register(name) : {})}
        rows={rows}
        {...otherProps}></Form.Control>

      {errors && errors?.[name] ? (
        <Form.Control.Feedback type="invalid" className="d-block">
          {errors?.[name]?.message as string}
        </Form.Control.Feedback>
      ) : null}
    </>
  )
}

export const Input = ({
  startIcon,
  label,
  type,
  name,
  placeholder,
  register,
  errors,
  control,
  className,
  labelClassName,
  containerClass,
  textClassName,
  refCallback,
  action,
  rows,
  variant = 'default',
  ...otherProps
}: FormInputProps) => {
  // handle input type
  const comp = type === 'textarea' ? 'textarea' : type === 'select' ? 'select' : 'input';
  return (
    variant === 'outlined' ? (
      <OutlinedInput
        label={label}
        labelClassName={labelClassName}
        type={type}
        name={name}
        placeholder={placeholder}
        refCallback={refCallback}
        comp={comp}
        errors={errors}
        register={register}
        className={className}
        rows={rows}
        containerClass={containerClass}
        startIcon={startIcon}
        {...otherProps}
      />)
      : (
        <Form.Group className={containerClass}>
          {label ? (
            <>
              <Form.Label className={labelClassName}>{label}</Form.Label>
              {action && action}
            </>
          ) : null}
          {startIcon ? (
            <InputGroup>
              <InputGroup.Text className={textClassName}>{startIcon}</InputGroup.Text>
              <TextInput
                type={type}
                name={name}
                placeholder={placeholder}
                refCallback={refCallback}
                comp={comp}
                errors={errors}
                register={register}
                className={className}
                rows={rows}
                {...otherProps}
              />
            </InputGroup>
          ) : (<TextInput
            type={type}
            name={name}
            placeholder={placeholder}
            refCallback={refCallback}
            comp={comp}
            errors={errors}
            register={register}
            className={className}
            rows={rows}
            {...otherProps}
          />)
          }
        </Form.Group>
      )
  )
} 