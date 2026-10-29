import type { HTMLAttributes, ReactNode } from 'react'
import { Badge } from './Badge'
import { Button } from './Button'

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  appearance?: 'default' | 'bordered' | 'highlight'
  description?: ReactNode
  title?: ReactNode
}

export function Card({ appearance = 'default', className = '', description = 'Bring files, notes and decisions together in a shared project space.', title = 'Your next project', ...props }: CardProps) {
  return <article className={`mg-card mg-card--${appearance} ${className}`} {...props}><Badge>Resource</Badge><h3>{title}</h3><p>{description}</p><Button>Open project</Button></article>
}

export interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  actionLabel?: ReactNode
  appearance?: 'default' | 'with-action'
  bodyText?: ReactNode
  bodyTitle?: ReactNode
  description?: ReactNode
  title?: ReactNode
}

export function Section({ actionLabel = 'Explore resources →', appearance = 'default', bodyText = 'Add guidelines, working documents and useful links as your project develops.', bodyTitle = 'Everything in one place', className = '', description = 'A dedicated place for the materials your team needs.', title = 'Project resources', ...props }: SectionProps) {
  return <section className={`mg-section ${className}`} {...props}><header><div><h2>{title}</h2><p>{description}</p></div>{appearance === 'with-action' && <Button>Add resource</Button>}</header><div className="mg-section__body"><strong>{bodyTitle}</strong><p>{bodyText}</p></div><a href="#resources">{actionLabel}</a></section>
}
