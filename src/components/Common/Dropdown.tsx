'use client';

import { useState, useRef, useEffect } from 'react';
import {
  dropdownButtonSizes,
  DropdownButtonSizes,
  dropdownFontSizes,
  DropdownFontSizes,
  DropdownMenuSizes,
} from 'src/lib/constants';
import Icon from '../Icons/Icon';
import { cn } from 'src/lib/utils';

type DropdownType = 'select' | 'link';

type DropdownProps = {
  type?: DropdownType;
  buttonText?: string;
  menuItems: { label: string; onClick: () => void }[];
  fontSize?: DropdownFontSizes;
  buttonSize?: DropdownButtonSizes;
  menuSize?: DropdownMenuSizes;
  hideButtonBorder?: boolean;
  hideIcon?: boolean;
};

export default function Dropdown({
  type = 'select',
  buttonText,
  menuItems,
  fontSize = 'default',
  buttonSize = 'default',
  menuSize = 'default',
  hideButtonBorder = false,
  hideIcon = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(menuItems[0].label);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuWidthClass =
    menuSize === 'sm' ? 'w-24' : menuSize === 'lg' ? 'w-72' : 'w-32';

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={cn(
        'relative inline-block text-left text-text-sub',
        dropdownFontSizes[fontSize]
      )}
      ref={menuRef}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          'flex items-center justify-between rounded-10 bg-white px-3 py-2 hover:bg-gray-50',
          !hideButtonBorder && 'border',
          dropdownButtonSizes[buttonSize]
        )}
      >
        <p>
          {type === 'select'
            ? (isSelected === menuItems[0].label && buttonText) || isSelected
            : buttonText}
        </p>
        {!hideIcon && (
          <div className='pl-2'>
            <Icon
              name='ARROW_DOWN'
              size={14}
              className={cn(isOpen && 'rotate-180', 'duration-100')}
            />
          </div>
        )}
      </button>

      {isOpen && (
        <div
          className={cn(
            'absolute right-0 z-10 mt-3 rounded-10 border bg-white shadow-lg',
            menuWidthClass
          )}
        >
          <ul className={'py-1'}>
            {menuItems.map((item) => (
              <li
                key={item.label}
                onClick={() => {
                  if (type === 'select') {
                    setIsSelected(item.label);
                  }
                  setIsOpen(false);
                  item.onClick();
                }}
                className={cn(
                  'cursor-pointer bg-bg px-4 py-2 font-semibold text-text-sub hover:brightness-[0.98]',
                  type === 'select' &&
                    isSelected === item.label &&
                    'bg-primary-main100 text-primary'
                )}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
