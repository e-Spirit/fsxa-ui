import { render } from "@testing-library/vue";
import HeaderSection from "./../";
import { Breadcrumb } from "@/types/sections";
const breadItems: Breadcrumb[] = [
  {
    referenceId: "1",
    referenceType: "test",
    path: "/",
    label: "Link 1",
  },
  {
    referenceId: "2",
    referenceType: "test",
    path: "/",
    label: "Link 2",
  },
  {
    referenceId: "3",
    referenceType: "test",
    path: "/",
    label: "Link 3",
  },
];
describe("components/HeaderSection", () => {
  it("renders passed content as headline content", () => {
    const content = "test";
    const { getByText } = render(HeaderSection, {
      props: {
        title: content,
        breadcrumbs: breadItems,
      },
    });
    expect(getByText(content)).toBeTruthy();
  });

  it("correctly consumes the specified background image", () => {
    const content = "My test headline";
    const imageSource = "image source url";
    const { getByTestId } = render(HeaderSection, {
      props: {
        title: content,
        backgroundImage: { src: imageSource },
        breadcrumbs: breadItems,
      },
    });
    expect(
      getByTestId("HeaderSection--BackgroundImage")
        ?.querySelector("img")
        ?.getAttribute("src"),
    ).toEqual(imageSource);
  });

  it("should replace the default rendering of breadcrumbs, and background image when the scopedSlots are being used", async () => {
    const content = "test header section content";
    const { getByTestId } = render(HeaderSection, {
      props: {
        title: content,
        breadcrumbs: breadItems,
        backgroundImage: "new image",
      },
      scopedSlots: {
        breadcrumbs: `<div data-testid="scoped-slot-breadcrumbs">{{props.breadcrumbs}}</div>`,
        backgroundImage: `<div data-testid="scoped-slot-backgroundImage">{{props.backgroundImage}}</div>`,
      },
    });
    const scopedBreadcrumbs = getByTestId("scoped-slot-breadcrumbs");
    const scopedBackgroundImage = getByTestId("scoped-slot-backgroundImage");

    expect(() => getByTestId("HeaderSection-Breadcrumbs")).toThrow();
    expect(() => getByTestId("HeaderSection-BackgroundImage")).toThrow();

    expect(scopedBreadcrumbs.nodeName).toBe("DIV");
    expect(scopedBackgroundImage.nodeName).toBe("DIV");
  });
});
