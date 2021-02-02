import { render } from "@testing-library/vue";
import Layout from "../..";
import LayoutItem from "./../";

describe("components/LayoutItem", () => {
  it("renders the correct div with its responsive classes", () => {
    const { getByTestId } = render(Layout, {
      slots: {
        default: LayoutItem,
      },
    });
    const layoutItemTest = getByTestId("layoutItem-test");
    expect(layoutItemTest.classList.contains("sm"));
    expect(layoutItemTest.classList.contains("md"));
    expect(layoutItemTest.classList.contains("lg"));
    expect(layoutItemTest.classList.contains("xl"));
  });
  /* it("renders the correct default", () => {
    const text = "this is my default text";
    const {getByText} = render(Layout, {
        slots:{
            default: `<LayoutItem>${text}</LayoutItem>`,
             
        } ,
        components:{
            LayoutItem,
        }    

    });
    const layoutItem = getByText(text);
    expect(layoutItem).toBeTruthy();
  });
  */
  it("throws an exception on missing Layout", () => {
    expect(() => render(LayoutItem)).toThrowError();
  });
});
