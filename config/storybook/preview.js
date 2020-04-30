import { addDecorator } from "@storybook/vue";
import TailwindDecorator from "./../../src/utils/TailwindDecorator";

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
