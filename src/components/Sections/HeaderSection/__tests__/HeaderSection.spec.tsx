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
});
