import React from 'react';
import cn from 'classnames';
import { twMerge } from 'tailwind-merge';
import { ICommonForm, InputElementType, TextareaElementType } from '@/lib/types';
import WithLabel from '../WithLabel';

interface CommonProps extends ICommonForm {
  containerClassName?: string;
  ref?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
  variant: 'input' | 'textarea';
}

type InputFieldType =
  | (InputElementType & { variant: 'input' })
  | (TextareaElementType & { variant: 'textarea' });

type IProps = CommonProps & InputFieldType;

const InputField = ({
  buttonClick,
  className,
  containerClassName,
  describedBy,
  error,
  icon,
  id,
  isLabelHidden,
  label,
  required,
  variant,
  ref,
  ...props
}: IProps) => (
  <WithLabel
    buttonClick={buttonClick}
    className={containerClassName}
    describedBy={describedBy}
    error={error}
    icon={icon}
    id={id}
    isLabelHidden={isLabelHidden}
    label={label}
    required={required}
  >
    {variant === 'input' && (
      <input
        className={twMerge(
          cn('px-4 h-[3rem] w-full bg-white border-[1px] border-solid border-border', className),
        )}
        ref={ref as React.Ref<HTMLInputElement>}
        {...(props as InputElementType)}
      />
    )}
    {variant === 'textarea' && (
      <textarea
        className={twMerge(
          cn(
            'px-4 min-h-[3.5rem] w-full bg-white border-[1px] border-solid border-border',
            className,
          ),
        )}
        ref={ref as React.Ref<HTMLTextAreaElement>}
        {...(props as TextareaElementType)}
      />
    )}
  </WithLabel>
);

export default InputField;
