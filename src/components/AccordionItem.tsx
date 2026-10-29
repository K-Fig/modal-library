import {
  useId,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react'

export interface AccordionItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  answer?: ReactNode
  defaultExpanded?: boolean
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  question?: ReactNode
}

export function AccordionItem({
  answer = 'We offer standard, express, and next-day delivery options.',
  className = '',
  defaultExpanded = false,
  expanded,
  onExpandedChange,
  question = 'What are the shipping options?',
  ...props
}: AccordionItemProps) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded)
  const answerId = useId()
  const isExpanded = expanded ?? internalExpanded

  const toggle = () => {
    const nextExpanded = !isExpanded
    if (expanded === undefined) {
      setInternalExpanded(nextExpanded)
    }
    onExpandedChange?.(nextExpanded)
  }

  const classes = [
    'modal-gallery-accordion',
    isExpanded && 'modal-gallery-accordion--expanded',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {isExpanded && <div className="modal-gallery-accordion__accent" />}
      <button
        aria-controls={answerId}
        aria-expanded={isExpanded}
        className="modal-gallery-accordion__header"
        onClick={toggle}
        type="button"
      >
        <span className="modal-gallery-accordion__question">{question}</span>
        <span aria-hidden="true" className="modal-gallery-accordion__chevron" />
      </button>
      {isExpanded && (
        <div className="modal-gallery-accordion__answer" id={answerId}>
          {answer}
        </div>
      )}
    </div>
  )
}
