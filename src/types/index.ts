import { InputHTMLAttributes } from "react";
import { FieldErrors, Control } from "react-hook-form";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "outlined" | "default";
  startIcon?: any;
  label?: string;
  type?: string;
  name: string;
  comp?: string;
  placeholder?: string;
  register?: any;
  errors?: FieldErrors;
  control?: Control<any>;
  className?: string;
  labelClassName?: string;
  containerClass?: string;
  textClassName?: string;
  refCallback?: any;
  action?: any;
  rows?: string | number;
  defaultValue?: string | number;
  options?: { text: string; value: string | number }[];
}
