import { addDecorator } from "@storybook/vue";
import TailwindDecorator from "./../../src/utils/TailwindDecorator";
import { addParameters } from "@storybook/vue";

addParameters({
  viewport: {
    viewports: {
      responsive: {
        name: "Responsive",
        styles: {
          width: "100%",
          height: "100%"
        }
      },
      xl: {
        name: "xl",
        styles: {
          width: "1280px",
          height: "100%"
        }
      },
      lg: {
        name: "lg",
        styles: {
          width: "1024px",
          height: "100%"
        }
      },
      md: {
        name: "md",
        styles: {
          width: "768px",
          height: "100%"
        }
      },
      sm: {
        name: "sm",
        styles: {
          width: "640px",
          height: "100%"
        }
      },
      defaultViewPort: "responsive"
    }
  }
});

const tailwindDecorator = () => ({
  render() {
    return (
      <TailwindDecorator>
        <story />
      </TailwindDecorator>
    );
  }
});
addDecorator(tailwindDecorator);
