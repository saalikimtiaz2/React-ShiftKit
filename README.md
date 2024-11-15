# 🚀 React ShiftKit

React ShiftKit is a **dynamic UI component library** for **React** and **Next.js**, offering a sleek collection of adaptive and customizable components. It’s lightweight, responsive, and designed for seamless integration, empowering you to build polished, modern UIs effortlessly.

## ✨ Features

- **Adaptive & Customizable**: Easily tailor components to match your design.
- **Lightweight & Fast**: Optimized for performance with minimal overhead.
- **Responsive Design**: Built to look great on all devices and screen sizes.
- **Modern UI Elements**: Includes buttons, drawers, dialogs, inputs, tabs, cards, and more.
- **Seamless Integration**: Compatible with React and Next.js projects.

## 📦 Installation

To get started, install ShiftKit via npm or yarn:

```bash
npm install react-shiftkit
# or
yarn add react-shiftkit
```

```bash
import { Button, Drawer } from "react-shiftkit"

import "react-shiftkit/lib/styles/global.css";
```

## 💻 Usage

### 🔲 Button

Import the Button component into your project and use it as follows:

```Bash
import Button from "./Button";

<Button
  variant="primary"
  size="md"
  roundness="lg"
  onClick={() => alert("Button Clicked!")}
>
  Click Me
</Button>

```

| Prop Name   | Type                                                      | Default     | Description                                                                                                         |
|-------------|-----------------------------------------------------------|-------------|---------------------------------------------------------------------------------------------------------------------|
| `children`  | `React.ReactNode`                                         | **Required**| The content to be displayed inside the button (text, icon, etc.).                                                   |
| `name`      | `string`                                                  | `undefined` | Optional name for the button, can be a string or React element.                                                     |
| `block`     | `boolean`                                                 | `false`     | If true, the button will take full width of its container.                                                          |
| `disabled`  | `boolean`                                                 | `false`     | If true, the button will be disabled and unclickable.                                                               |
| `className` | `string`                                                  | `""`        | Additional custom class names for styling.                                                                          |
| `onClick`   | `() => void`                                              | `undefined` | Callback function to handle click events.                                                                           |
| `icon`      | `React.ReactNode`                                         | `undefined` | Icon element to be displayed inside the button.                                                                     |
| `size`      | `"sm" \| "md" \| "lg" \| "xl"`                            | `"md"`      | Size of the button.                                                                                                 |
| `roundness` | `"none" \| "sm" \| "md" \| "lg" \| "xl" \| "full"`        | `"none"`    | Controls the border-radius of the button for different roundness levels.                                            |
| `type`      | `"button" \| "submit" \| "reset"`                         | `"button"`  | Specifies the button type (default is "button").                                                                    |
| `variant`   | `"primary" \| "secondary" \| "primary-outline" \| "secondary-outline" \| "danger" \| "success" \| "warning"` | `"primary"`  | Defines the visual style of the button. Customize these variants in your own CSS.                                   |
| `isLoading` | `boolean`                                                 | `false`     | If true, the button will display a loading state.                                                                   |
| `ariaLabel` | `string`                                                  | `undefined` | ARIA label for accessibility.                                                                                       |

The Button component uses the following CSS classes for styling. Define these classes in your own CSS file:

```Bash
.btn-varient-primary {}

.btn-varient-primary-outline {}

.btn-varient-secondary {}

.btn-varient-secondary-outline {}

.btn-varient-success {}

.btn-varient-warning {}

.btn-varient-danger {}

```

## ✏️ Author

[Salik Imtiaz](https://www.npmjs.com/~salikimtiaz)

## 👥 Collaborators

[Armughan Shahid](https://www.npmjs.com/~armughanshahid)

## 🔗 Links

[Portfolio](https://salikdev.pro/)

[Linkedin](https://www.linkedin.com/in/salikimtiaz/)

[Github](https://github.com/saalikimtiaz2)

## ☕ Buy me a Coffee

[Buy me a Coffee](https://www.buymeacoffee.com/salikimtiazX)
