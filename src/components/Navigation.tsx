import type { HTMLAttributes, ReactNode } from 'react'

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  firstTab?: ReactNode
  secondTab?: ReactNode
  selected?: 'first' | 'second'
}

export function Tabs({ className = '', firstTab = 'Overview', secondTab = 'Activity', selected = 'first', ...props }: TabsProps) {
  return <div className={`mg-tabs ${className}`} role="tablist" {...props}><button aria-selected={selected === 'first'} role="tab">{firstTab}</button><button aria-selected={selected === 'second'} role="tab">{secondTab}</button></div>
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  currentLevel?: ReactNode
  firstLevel?: ReactNode
  secondLevel?: ReactNode
}

export function Breadcrumb({ currentLevel = 'Project resources', firstLevel = 'Workspace', secondLevel = 'Projects', ...props }: BreadcrumbProps) {
  return <nav aria-label="Breadcrumb" className="mg-breadcrumb" {...props}><a href="#workspace">{firstLevel}</a><span>›</span><a href="#projects">{secondLevel}</a><span>›</span><span>{currentLevel}</span></nav>
}

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  pages?: ReactNode[]
}

export function Pagination({ pages = ['1', '2', '3', '…', '8'], ...props }: PaginationProps) {
  return <nav aria-label="Pagination" className="mg-pagination" {...props}><button>‹</button>{pages.map((page, index) => <button aria-current={index === 0 ? 'page' : undefined} key={index}>{page}</button>)}<button>›</button></nav>
}

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  description?: ReactNode
}

export function Tooltip({ description = 'Only workspace editors can change this setting.', ...props }: TooltipProps) {
  return <div className="mg-tooltip" role="tooltip" {...props}>{description}</div>
}
