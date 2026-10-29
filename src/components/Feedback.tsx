import type { HTMLAttributes, ReactNode } from 'react'
import { Button } from './Button'

export type FeedbackTone = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  actionLabel?: ReactNode
  description?: ReactNode
  title?: ReactNode
  tone?: FeedbackTone
}

export function Alert({ actionLabel = 'View details', className = '', description = 'Review the workspace settings before you continue.', title = 'A quick heads-up', tone = 'info', ...props }: AlertProps) {
  return <div className={`mg-alert mg-alert--${tone} ${className}`} role="alert" {...props}><strong>{title}</strong><p>{description}</p><button type="button">{actionLabel}</button></div>
}

export interface ToastProps extends AlertProps {
  tone?: 'success' | 'error'
}

export function Toast(props: ToastProps) {
  return <Alert {...props} className={`mg-toast ${props.className ?? ''}`} />
}

export interface DialogProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  description?: ReactNode
  purpose?: 'confirmation' | 'destructive'
  secondaryActionLabel?: ReactNode
  title?: ReactNode
}

export function Dialog({ className = '', description = 'Your new preferences will apply to this workspace.', purpose = 'confirmation', secondaryActionLabel = 'Cancel', title = 'Save workspace changes?', ...props }: DialogProps) {
  return <div aria-modal="true" className={`mg-dialog mg-dialog--${purpose} ${className}`} role="dialog" {...props}><h2>{title}</h2><p>{description}</p><footer><button type="button">{secondaryActionLabel}</button><Button color={purpose === 'destructive' ? 'pink' : 'blue'}>{purpose === 'destructive' ? 'Delete project' : 'Save changes'}</Button></footer></div>
}
