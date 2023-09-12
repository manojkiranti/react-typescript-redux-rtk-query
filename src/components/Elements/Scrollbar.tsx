import SimpleBar, { Props } from 'simplebar-react';

interface ScrollbarProps extends Props {
  className?: string;
  style?: any;
  children?: any;
}

export const Scrollbar = ({ className, style, children, ...otherProps }: ScrollbarProps) => {
  return (
    <SimpleBar className={className} style={style} {...otherProps}>
      {children}
    </SimpleBar>
  );
};

