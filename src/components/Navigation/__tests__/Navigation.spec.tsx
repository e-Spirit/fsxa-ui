import { render, fireEvent } from "@testing-library/vue";
import Navigation from "../components/Navigation";

describe("components/Navigation", () => {
  it("calls handleClick callback on click", async () => {
    const { getByText, emitted } = render(Navigation, {
      slots: { default: "Content" },
      props: {
        activeItemKeys: [],
        items: [
          {
            key: "1",
            path: "/",
            label: "Link 1",
            children: [
              {
                key: "3",
                path: "/",
                label: "Link 1.1",
              },
            ],
          },
        ],
      },
    });
    const navigation = getByText("Link 1");
    await fireEvent(navigation!, new Event("click"));
    expect(emitted().itemClicked[0][0].key).toEqual("1");
  });
});
