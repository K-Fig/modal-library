import type { HTMLAttributes, ReactNode } from 'react'

export function Avatar({ appearance = 'initials', initials = 'AL', ...props }: HTMLAttributes<HTMLSpanElement> & { appearance?: 'initials' | 'neutral'; initials?: string }) {
  return <span className={`mg-avatar mg-avatar--${appearance}`} {...props}>{appearance === 'initials' ? initials : '♙'}</span>
}

export function Progress({ complete = false, label = 'Workspace setup', value = '64%', ...props }: HTMLAttributes<HTMLDivElement> & { complete?: boolean; label?: ReactNode; value?: string }) {
  return <div className={`mg-progress ${complete ? 'is-complete' : ''}`} {...props}><span>{label}</span><strong>{value}</strong><i style={{ width: value }} /></div>
}

export function Divider({ label, ...props }: HTMLAttributes<HTMLDivElement> & { label?: ReactNode }) {
  return <div className="mg-divider" {...props}><span>{label}</span></div>
}

export function ListItem({ description = 'Guidelines, working files and useful links', label = 'Project resources', state = 'default', ...props }: HTMLAttributes<HTMLDivElement> & { description?: ReactNode; label?: ReactNode; state?: 'default' | 'selected' | 'disabled' }) {
  return <div className={`mg-list-item mg-state--${state}`} {...props}><span>□</span><div><strong>{label}</strong><small>{description}</small></div><b>{state === 'selected' ? '✓' : '›'}</b></div>
}

export function DropdownMenuItem({ label = 'Duplicate project', shortcut = '⌘ D', state = 'default', ...props }: HTMLAttributes<HTMLDivElement> & { label?: ReactNode; shortcut?: ReactNode; state?: 'default' | 'selected' | 'disabled' }) {
  return <div className={`mg-menu-item mg-state--${state}`} role="menuitem" {...props}><span>▣</span><strong>{label}</strong><kbd>{shortcut}</kbd></div>
}

export interface TableRowProps extends HTMLAttributes<HTMLDivElement> {
  actionLabel?: ReactNode
  name?: ReactNode
  state?: 'header' | 'default' | 'selected'
  status?: ReactNode
  type?: ReactNode
  updated?: ReactNode
}

export function TableRow({ actionLabel = 'More', name = 'Workspace guidelines', state = 'default', status = 'Ready to review', type = 'Document', updated = 'Today, 10:30', ...props }: TableRowProps) {
  return <div className={`mg-table-row mg-table-row--${state}`} role="row" {...props}><span>□</span><strong>{name}</strong><span>{type}</span><span>{status}</span><span>{updated}</span><button>{actionLabel}</button></div>
}
