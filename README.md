# Modal Gallery React

React implementations and Figma Code Connect templates for all 25 published
component families in the Modal Gallery library:

- Actions: `Button`, `Badge`, `AccordionItem`
- Selection: `Checkbox`, `RadioButton`, `Switch`
- Fields: `InputField`, `Textarea`, `Select`, `SearchField`
- Surfaces: `Card`, `Section`
- Feedback: `Alert`, `Toast`, `Dialog`
- Navigation: `Tabs`, `Breadcrumb`, `Pagination`, `Tooltip`
- Data display: `Avatar`, `Progress`, `Divider`, `ListItem`,
  `DropdownMenuItem`, `TableRow`

## Usage

```tsx
import {
  AccordionItem,
  Badge,
  Button,
} from '@modal-gallery/react'
import '@modal-gallery/react/styles.css'

export function Example() {
  return (
    <>
      <Button color="pink">Open gallery</Button>
      <Badge color="green">New</Badge>
      <AccordionItem
        question="What are the shipping options?"
        answer="We offer standard, express, and next-day delivery options."
      />
    </>
  )
}
```

The package bundles the Outfit and Bebas Neue font files used by the Figma
library. Override the `--modal-gallery-*` custom properties to integrate the
components with an application's theme.

The parserless Code Connect templates live beside their React components as
`.figma.ts` files and are discovered through `figma.config.json`.
