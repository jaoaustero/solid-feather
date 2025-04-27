## Features
- Render as SVG to allow customization
- Small size without any external libraries
- Supports typescript

<br />

## Installation
The plugin are available in node and yarn package managers.

```bash
# Node
npm install solid-feather-icon

# Yarn
yard add solid-feather-icon
```

<br />

## Quickstart
Import the `solid-feather` in your file, and simply add the component and it's properties.

> Note: Component icon will not render when `type` is missing.

```jsx
import SolidFeatherIcon from 'solid-feather-icon';

function App() {
    return (
        <SolidFeatherIcon
            type="activity"/>
    );
}
```

<br />

## Props
Here are the properties supported

| Name               | Description                             | Default        |
|--------------------|-----------------------------------------|----------------|
| `type`             | Icon type base on feather icons library | `undefined`    | 
| `height`           | Icon height                             | `24`           |
| `width`            | Icon width                              | `24`           |
| `fill`             | Defines the color                       | `none`         |
| `stroke`           | Sets the color of the line around       | `currentColor` |
| `stroke-line-cap`  | Sets the shape of the end-lines         | `round`        |
| `stroke-line-join` | Sets the shape of the corners           | `round`        |
| `stroke-width`     | Sets the width of the line around       | `2`            |

<br />

## Styling and Customization
Component will allow you to add custom class attribute or custom inline style to customize
the style of the icon.

<br />

## License
Code released under [MIT](https://github.com/jaoaustero/solid-feather-icon/blob/main/LICENSE) license.