'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { TbChevronDown } from 'react-icons/tb';
import cn from 'classnames';
import { useClickOutside } from '@/lib/hooks';
import DropdownMenu from './DropdownMenu';

interface Option {
  key: string;
  label: string;
}

interface IProps {
  buttonClassName?: string;
  className?: string;
  id: string;
  onSelect?: (id: string) => void;
  options: Option[];
  placeholder?: string;
  selectedKey?: string;
}

const Dropdown: FC<IProps> = ({
  buttonClassName,
  className,
  id,
  onSelect,
  options,
  placeholder,
  selectedKey,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(selectedKey || '');

  const dropdownRef = useRef(null);

  const handleChange = (itemKey: string) => {
    setSelectedValue(itemKey);
    setIsOpen(false);
    if (onSelect) onSelect(itemKey);
  };

  useEffect(() => {
    if (selectedKey) {
      setSelectedValue(selectedKey);
    }
  }, [selectedKey]);

  useClickOutside({
    elementRef: dropdownRef,
    callback: () => setIsOpen(false),
    isOpen,
  });

  const buttonLabel = options?.find((option) => option.key === selectedValue)?.label;

  return (
    <div
      ref={dropdownRef}
      className={cn('relative', className)}
    >
      <button
        aria-controls="listbox"
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          'flex justify-between items-center gap-2 w-full h-[3rem] py-2 px-4 bg-white border-[1px] border-solid border-border',
          buttonClassName,
        )}
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        role="combobox"
        type="button"
      >
        <span>{buttonLabel || placeholder}</span>
        <TbChevronDown
          size={18}
          className={cn('transform duration-500 ease-in-out', {
            'rotate-180': isOpen,
          })}
        />
      </button>
      {isOpen && (
        <DropdownMenu
          options={options}
          selectedKey={selectedKey}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default Dropdown;
