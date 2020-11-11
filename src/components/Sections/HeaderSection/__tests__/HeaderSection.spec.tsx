import { render, fireEvent } from "@testing-library/vue";
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
    const { container } = render(HeaderSection, {
      props: {
        title: content,
        backgroundImage: { src: imageSource },
        breadcrumbs: breadItems,
      },
    });
    expect(
      container
        .querySelector(".HeaderSection--BackgroundImage")
        ?.querySelector("img")
        ?.getAttribute("src"),
    ).toEqual(imageSource);
  });
});
