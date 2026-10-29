import type { InputHTMLAttributes } from 'react'

type ControlState = 'unchecked' | 'checked' | 'indeterminate' | 'disabled'

export interface ChoiceControlProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  helperText?: string
  label?: string
  state?: ControlState
}

function ChoiceControl({
  className = '',
  helperText = 'Receive occasional product news',
  label = 'Email updates',
  state = 'unchecked',
  type,
  ...props
}: ChoiceControlProps & { type: 'checkbox' | 'radio' }) {
  const disabled = state === 'disabled'
  return (
    <label className={`mg-choice ${disabled ? 'is-disabled' : ''} ${className}`}>
      <input
        checked={state === 'checked'}
        disabled={disabled}
        ref={(node) => {
          if (node) node.indeterminate = state === 'indeterminate'
        }}
        type={type}
        {...props}
        readOnly={props.onChange === undefined}
      />
      <span><strong>{label}</strong><small>{helperText}</small></span>
    </label>
  )
}

export function Checkbox(props: ChoiceControlProps) {
  return <ChoiceControl type="checkbox" {...props} />
}

export function RadioButton(props: ChoiceControlProps) {
  return <ChoiceControl type="radio" {...props} />
}

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  helperText?: string
  label?: string
  state?: 'off' | 'on' | 'disabled'
}

export function Switch({
  className = '',
  helperText = 'Keep up with workspace changes',
  label = 'Activity notifications',
  state = 'off',
  ...props
}: SwitchProps) {
  const disabled = state === 'disabled'
  return (
    <label className={`mg-choice mg-switch ${disabled ? 'is-disabled' : ''} ${className}`}>
      <input checked={state === 'on'} disabled={disabled} type="checkbox" {...props} readOnly={props.onChange === undefined} />
      <span className="mg-switch__track" />
      <span><strong>{label}</strong><small>{helperText}</small></span>
    </label>
  )
}
