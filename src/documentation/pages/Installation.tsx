import BaseComponent from "@/components/BaseComponent";
import Component from "vue-class-component";
import Code from "@/components/internal/Documentation/Code";

export const title = "Installation";
export const subtitle =
  "Install FSXA-UI, to start developing your UI faster than light";

@Component({
  name: "Installation",
})
class Installation extends BaseComponent {
  render() {
    return (
      <div>
        <h3 class="ui-text-lg ui-font-bold ui-mb-5">NPM / YARN</h3>
        FSXA-UI is available as an{" "}
        <a
          href="https://www.npmjs.com/package/fsxa-ui"
          target="_blank"
          class="ui-text-espirit"
        >
          npm Package
        </a>
        .
        <Code
          class="ui-mt-2 ui-mb-5"
          code={`// with npm
npm install fsxa-ui --save

// with yarn
yarn add fsxa-ui`}
        />
        <p class="ui-inline-flex ui-items-center ui-mt-5 ui-leading-8">
          It is necessary to embed the css provided by this library by yourself.{" "}
          You can find it here:
          <span class="ui-bg-gray-900 ui-text-white ui-px-1 ui-rounded-lg ui-leading-6">
            fsxa-ui/dist/fsxa-ui.css
          </span>
        </p>
      </div>
    );
  }
}
export default Installation;
