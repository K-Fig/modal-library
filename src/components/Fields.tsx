import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'

export type FieldState = 'default' | 'focus' | 'filled' | 'error' | 'disabled'

interface FieldShellProps {
  children: React.ReactNode
  className?: string
  helperText?: string
  label?: string
  state?: FieldState
}

function FieldShell({ children, className = '', helperText, label, state = 'default' }: FieldShellProps) {
  return (
    <label className={`mg-field mg-field--${state} ${className}`}>
      <strong>{label}</strong>
      {children}
      {helperText && <small>{helperText}</small>}
    </label>
  )
}

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  helperText?: string
  label?: string
  state?: FieldState
}

export function InputField({ className, helperText = 'Use a name your team will recognize.', label = 'Workspace name', state = 'default', ...props }: InputFieldProps) {
  return <FieldShell className={className} helperText={helperText} label={label} state={state}><input disabled={state === 'disabled'} {...props} /></FieldShell>
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  helperText?: string
  label?: string
  state?: Exclude<FieldState, 'focus' | 'disabled'>
}

export function Textarea({ className, helperText = 'Give your team a little context.', label = 'Description', state = 'default', ...props }: TextareaProps) {
  return <FieldShell className={className} helperText={helperText} label={label} state={state}><textarea {...props} /></FieldShell>
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  helperText?: string
  label?: string
  state?: 'default' | 'filled' | 'disabled'
}

export function Select({ children, className, helperText = 'Choose how this member can participate.', label = 'Workspace role', state = 'default', ...props }: SelectProps) {
  return <FieldShell className={className} helperText={helperText} label={label} state={state}><select disabled={state === 'disabled'} {...props}>{children}</select></FieldShell>
}

export interface SearchFieldProps extends InputFieldProps {}

export function SearchField({ placeholder = 'Search components…', ...props }: SearchFieldProps) {
  return <InputField label="Search library" placeholder={placeholder} type="search" {...props} />
}
