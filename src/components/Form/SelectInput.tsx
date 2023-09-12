import { FormInputProps } from '@/types';
import { Form, InputGroup } from 'react-bootstrap';

const Select = ({
  type,
  label,
  name,
  placeholder,
  register,
  errors,
  comp,
  rows,
  className,
  refCallback,
  defaultValue,
  options,
  ...otherProps
}: FormInputProps) => {
  return (
    <>
      <Form.Select
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
      >
        <option className="d-none" value="">
          Select Option
        </option>
        {options?.map(option => <option key={option.value} value={option.value}>{option.text}</option>)}

      </Form.Select>
      {errors && errors[name] ? (
        <Form.Control.Feedback type="invalid"> {errors?.[name]?.message as string}</Form.Control.Feedback>
      ) : null}
    </>
  );
};

export const SelectInput = ({
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
  defaultValue,
  options,
  ...otherProps
}: FormInputProps) => {
  return (
    <>
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
            <Select
              type={type}
              name={name}
              placeholder={placeholder}
              refCallback={refCallback}
              errors={errors}
              register={register}
              className={className}
              rows={rows}
              defaultValue={defaultValue}
              options={options}
              {...otherProps}
            />
          </InputGroup>
        ) : (
          <Select
            type={type}
            name={name}
            placeholder={placeholder}
            refCallback={refCallback}
            errors={errors}
            register={register}
            className={className}
            rows={rows}
            defaultValue={defaultValue}
            options={options}
            {...otherProps}
          />
        )
        }
      </Form.Group>
    </>
  )
}