import BaseComponent from "@/components/BaseComponent";
import { render } from "@testing-library/vue";
import { Component } from "vue-property-decorator";
import Page from "./../";

describe("components/Page", () => {
  @Component
  class Footer extends BaseComponent<{}> {
    render() {
      return <div data-testId="pageFooter">content for pageFoot</div>;
    }
  }

  @Component
  class Navigation extends BaseComponent<{}> {
    render() {
      return <div data-testId="pageNavigation">content for pageNavigation</div>;
    }
  }

  const renderFooter = () => render(Footer);
  const renderNavigation = () => render(Navigation);
  it("checks if the page is rendered correctly.", async () => {
    const logoSrc = "ContentforTest";
    const { container } = render(Page, {
      props: {
        renderFooter,
        renderNavigation,
        logo: { src: logoSrc },
      },
    });
    const pagefooter = container.querySelector("[data-testId=pageFooter]");
    const pageNavigation = container.querySelector(
      "[data-testId=pageNavigation]",
    );
    const logo = container.querySelector(`img[src='${logoSrc}']`);
    expect(pagefooter).toBeTruthy;
    expect(pageNavigation).toBeTruthy;
    expect(logo).toBeTruthy;
  });
});
