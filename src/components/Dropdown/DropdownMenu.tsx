import { FC } from 'react';
import cn from 'classnames';

interface Option {
  key: string;
  label: string;
}

interface IProps {
  onChange: (key: string) => void;
  options: Option[];
  selectedKey?: string;
}

const DropdownMenu: FC<IProps> = ({ onChange, options, selectedKey }) => (
  <ul
    className="absolute bg-white w-full min-w-[12rem] max-h-60 overflow-y-auto py-3 shadow-md leading-10 z-10"
    role="listbox"
  >
    {options?.map((item) => (
      <li
        aria-selected={selectedKey === item?.key}
        key={item?.key}
        onClick={() => onChange(item?.key)}
        role="option"
        className={cn('flex items-center cursor-pointer hover:bg-gray-200 px-3 text-sm', {
          'bg-gray-200': selectedKey === item?.key,
        })}
      >
        {item?.label}
      </li>
    ))}
  </ul>
);

export default DropdownMenu;
