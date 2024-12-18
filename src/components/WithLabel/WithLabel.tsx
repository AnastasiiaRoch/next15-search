import React, { useId } from 'react';
import cn from 'classnames';
import { ICommonForm } from '@/lib/types';
import { renderChildren } from './renderChildren';

interface IProps extends ICommonForm {
  children: React.ReactNode;
}

const WithLabel = ({
  buttonClick,
  children,
  className,
  describedBy,
  error,
  icon,
  id,
  isLabelHidden,
  label,
  required,
}: IProps) => {
  const uniqueID = useId();
  const fieldID = id || uniqueID;
  const errorID = `${fieldID}-error`;

  const formElement = renderChildren(children, {
    'aria-describedby': error ? errorID : describedBy || undefined,
    'aria-required': required || undefined,
    id: fieldID,
  });

  return (
    <div className={cn('mb-4 onlyChild:mb-0', className)}>
      <label
        className={cn('block mb-1', { 'sr-only': isLabelHidden })}
        htmlFor={fieldID}
      >
        {label}
        {required && <span className="text-red">*</span>}
      </label>
      {icon ? (
        <div className="relative">
          {formElement}
          <button
            className="absolute right-[0.5rem] top-1/2 -translate-y-2/4 z-10 text-gray-600 hover:text-main w-[1.5rem]"
            onClick={buttonClick}
            type="button"
          >
            {icon}
          </button>
        </div>
      ) : (
        formElement
      )}
      {error && (
        <div
          className="text-xs text-rose-500 font-semibold mt-1 ml-4"
          id={errorID}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default WithLabel;
