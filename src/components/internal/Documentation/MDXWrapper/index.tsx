import BaseComponent from "@/components/BaseComponent";
import Component from "vue-class-component";
import { MDXProvider } from "@mdx-js/vue";
import Code from "../Code";
import "./style.css";
import Headline from "@/components/Headline";

const mdxComponents: any = {
  pre: () => ({
    render() {
      return (this as any).$slots.default;
    },
  }),
  h1: () => ({
    render() {
      return (
        <Headline as="h1" size="xl" uppercase={false}>
          {(this as any).$slots.default}
        </Headline>
      );
    },
  }),
  h2: () => ({
    render() {
      return (
        <Headline as="h2" size="lg" uppercase={false}>
          {(this as any).$slots.default}
        </Headline>
      );
    },
  }),
  h3: () => ({
    render() {
      return (
        <Headline as="h3" size="md" uppercase={false}>
          {(this as any).$slots.default}
        </Headline>
      );
    },
  }),
  code: (props: any) => ({
    render() {
      const language = props.className
        ? props.className.split("-")[1]
        : undefined;
      return (
        <Code language={language} code={(this as any).$slots.default[0].text} />
      );
    },
  }),
  inlineCode: () => ({
    render() {
      return (
        <span class="code bg-gray-300 px-2 rounded-lg text-sm">
          {(this as any).$slots.default[0].text}
        </span>
      );
    },
  }),
};

@Component({
  name: "MDXWrapper",
})
class MDXWrapper extends BaseComponent {
  render() {
    return (
      <div class="MDXWrapper">
        <MDXProvider components={mdxComponents}>
          {this.$slots.default}
        </MDXProvider>
      </div>
    );
  }
}
export default MDXWrapper;
