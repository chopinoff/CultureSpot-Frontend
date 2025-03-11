export const dropdownButtonSizes = {
  default: 'w-32',
  sm: 'w-24',
  lg: 'w-72',
  fit: 'w-fit',
} as const;

export const dropdownMenuSizes = {
  default: 'w-32',
  sm: 'w-24',
  lg: 'w-72',
  fit: 'w-fit',
} as const;

export const dropdownFontSizes = {
  default: 'text-body1',
  sm: 'text-body2',
};

export type DropdownButtonSizes = keyof typeof dropdownButtonSizes;
export type DropdownMenuSizes = keyof typeof dropdownMenuSizes;
export type DropdownFontSizes = keyof typeof dropdownFontSizes;
