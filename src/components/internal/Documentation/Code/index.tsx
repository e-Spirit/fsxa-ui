import FSXABaseComponent from "@/components/FSXABaseComponent";
import { Prop, Component } from "vue-property-decorator";
import Prism from "vue-prismjs";
import copy from "copy-to-clipboard";

import "prismjs/themes/prism-okaidia.css";
import "./style.css";
import Toggle from "@/components/internal/Toggle";

export interface CodeProps {
  code: string;
  language?: string;
  exampleContent?: JSX.Element;
}
@Component
class Code extends FSXABaseComponent<CodeProps> {
  @Prop() code!: CodeProps["code"];
  @Prop() language: CodeProps["language"];

  darkMode = false;
  copied = false;
  animationTimeout: number | null = null;

  copyToClipboard(event: MouseEvent) {
    event.preventDefault();
    // will copy content to clipboard
    copy(this.code, {
      message: "Press #{key} to copy",
      format: "text/plain",
    });
    this.copied = true;
    this.animationTimeout = window.setTimeout(this.resetCopied, 2000);
  }

  beforeDestroy() {
    if (this.animationTimeout) window.clearTimeout(this.animationTimeout);
    this.animationTimeout = null;
  }

  resetCopied() {
    this.copied = false;
  }

  render() {
    return (
      <div class={`Code ${this.darkMode ? "dark" : ""}`}>
        {this.$slots.default ? (
          <div class="Code--Example">
            {this.$slots.default}
            <div class="Code--BackgroundToggle">
              <Toggle
                active={this.darkMode}
                labels={{
                  on: <i class="fa fa-moon-o text-gray-900" />,
                  off: <i class="fa fa-sun-o text-gray-900" />,
                }}
                handleToggle={() => (this.darkMode = !this.darkMode)}
              />
            </div>
          </div>
        ) : null}
        <div class="Code--Container">
          <Prism
            class="Code--Wrapper"
            code={this.code}
            language={this.language}
          />
          <a
            href="#"
            onClick={this.copyToClipboard}
            class="Code--CopyToClipboard"
          >
            <i class={`fa fa-${this.copied ? "check" : "copy"}`} />
          </a>
        </div>
      </div>
    );
  }
}
export default Code;
