export type InputElementType = React.InputHTMLAttributes<HTMLInputElement>;
export type TextareaElementType = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export type ButtonElementType = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type InputChangeType = React.ChangeEvent<HTMLInputElement>;

export interface ICommonForm {
  buttonClick?: VoidFunction;
  className?: string;
  describedBy?: string;
  error?: string;
  icon?: React.ReactElement | null;
  id?: string;
  isLabelHidden?: boolean;
  label: string;
  required?: boolean;
}
