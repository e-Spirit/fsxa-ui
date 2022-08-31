# FSXA-UI

### About the FSXA

The FirstSpirit Experience Accelerator (FSXA) is the hybrid solution of a digital
experience platform, combining a headless approach with enterprise capabilities.
If you are interested in the FSXA check this
[Overview](https://docs.e-spirit.com/module/fsxa/overview/benefits-hybrid/index.html). You can order
a demo [online](https://www.e-spirit.com/us/specialpages/forms/on-demand-demo/).

## Project setup

FSXA-UI is really easy to get started with. Make sure to follow the guide below to get a better understanding about some of the decisions behind FSXA-UI and how to use it to kick-off your next project.

You can install FSXA-UI via Yarn or NPM.

```bash
# with npm
npm install fsxa-ui --save

# with yarn
yarn add fsxa-ui
```

<br />

Please make sure that the **main CSS file**  is imported from the FSXA UI package.

```typescript
// directly importing the css into your main component
import "fsxa-ui/dist/fsxa-ui.css";
```

```css
/* using node-style package resolution in a CSS file */
@import "fsxa-ui/dist/fsxa-ui.css";
```

```html
<!-- using plain html -->
<link
  href="path/to/node_modules/fsxa-ui/dist/fsxa-ui.css"
  rel="preload"
  as="style"
/>
```


## Usage

Now you can use the components in your project.
In the navigation you will find all available components with a detailed description of all properties and usage examples.

Here you can see how easy the `Button` component can be used.

```typescript
import { Button } from "fsxa-ui";

<Button variant="animated" handleClick={handleClick}>
  This is my Button
</Button>
```

Please make sure that your component is registered correctly.
<br />

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Existing CSS-Variables:

- --fsxa-text-highlight-color

## Legal Notices

FSXA-UI is a product of [Crownpeak Technology GmbH](http://www.e-spirit.com), Dortmund, Germany.
The FSXA-UI is subject to the Apache-2.0 license.

## Disclaimer

This document is provided for information purposes only.
Crownpeak Technology may change the contents hereof without notice.
This document is not warranted to be error-free, nor subject to any
other warranties or conditions, whether expressed orally or
implied in law, including implied warranties and conditions of
merchantability or fitness for a particular purpose. Crownpeak Technology
specifically disclaims any liability with respect to this document
and no contractual obligations are formed either directly or
indirectly by this document. The technologies, functionality, services,
and processes described herein are subject to change without notice.
