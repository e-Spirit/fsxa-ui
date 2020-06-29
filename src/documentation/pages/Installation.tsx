import FSXABaseComponent from "@/components/FSXABaseComponent";
import Component from "vue-class-component";
import Code from "@/components/internal/Documentation/Code";

export const title = "Installation";
export const subtitle =
  "Install FSXA-UI, to start developing your UI faster than light";

@Component({
  name: "Installation",
})
class Installation extends FSXABaseComponent {
  render() {
    return (
      <div>
        <h3 class="text-lg font-bold mb-5">NPM / YARN</h3>
        FSXA-UI is available as an{" "}
        <a
          href="https://www.npmjs.com/package/fsxa-ui"
          target="_blank"
          class="text-espirit"
        >
          npm Package
        </a>
        .
        <Code
          class="mt-2 mb-5"
          code={`// with npm
npm install fsxa-ui --save

// with yarn
yarn add fsxa-ui`}
        />
        <p class="inline-flex items-center mt-5 leading-8">
          It is necessary to embed the css provided by this library by yourself.{" "}
          You can find it here:
          <span class="bg-gray-900 text-white px-1 rounded-lg leading-6">
            fsxa-ui/dist/fsxa-ui.css
          </span>
        </p>
      </div>
    );
  }
}
export default Installation;
