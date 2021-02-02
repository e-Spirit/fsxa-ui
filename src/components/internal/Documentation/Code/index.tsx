import BaseComponent from "@/components/BaseComponent";
import ComponentIFrame from "@/components/internal/Documentation/ComponentIFrame";
import Toggle from "@/components/internal/Toggle";
import { CodeProps } from "@/types/components";
import copy from "copy-to-clipboard";
import "prismjs/themes/prism-okaidia.css";
import Prism from "vue-prismjs";
import { Component, Prop } from "vue-property-decorator";
import "./style.css";

@Component
class Code extends BaseComponent<CodeProps> {
  @Prop() code!: CodeProps["code"];
  @Prop() language: CodeProps["language"];
  @Prop() filename: CodeProps["filename"];

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
            {this.filename && (
              <ComponentIFrame
                filename={this.filename}
                dark={this.darkMode}
                class="ui-mx-auto"
              />
            )}

            <div class="Code--BackgroundToggle">
              <Toggle
                active={this.darkMode}
                labels={{
                  on: <i class="far fa-moon ui-text-gray-900" />,
                  off: <i class="far fa-sun ui-text-gray-900" />,
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
            <i class={`fas fa-${this.copied ? "check" : "copy"}`} />
          </a>
        </div>
      </div>
    );
  }
}
export default Code;
