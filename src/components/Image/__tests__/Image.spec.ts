import { render, fireEvent, getByText, getAllByTestId } from "@testing-library/vue";
import Image from "./../";

const testImage = "https://vlado-do.de/about/browser_freedom_now.gif";

describe("components/Image", () => {

    it("should have no border class and no 'veil' div when border and opacity properties are not set", () => {
        const { getByTestId } = render(Image, {
          props: {
              src: testImage
          }
        });
        const image = getByTestId("imageDiv");
        expect(image.getAttribute("class")).not.toContain("border");
        //expect(getAllByTestId(image, "veil").length).toEqual(0);
        expect(image.innerHTML).toContain("<img"); // make sure we actually have an <img> tag inside our image div 
        expect(image.innerHTML).not.toContain("absolute"); // veil divs have class absolute
    });

    it("should be followed by 'veil' div with class 'opacity-75', if initialized with the respective property", () => {
        const { getByTestId } = render(Image, {
            props: {
                src: testImage,
                opacity: 75
            }
          });
        //   const veilDiv = getByTestId("imageDiv").getElementsByClassName("absolute").item(1);
        const veilDiv = getByTestId("veil");
        expect(veilDiv.getAttribute("class")).toContain("opacity-75");
    });
    // const image = getByTestId("imageDiv");
    // expect(image.getAttribute("class")).not.toContain("border");

    it("should have the border class when the border property is set", () => {
      const { getByTestId } = render(Image, {
        props: {
          src: testImage,
          border: true,
        },
      const image = getByTestId("imageDiv");
      expect(image.getAttribute("class")).toContain("border");
    });

  });

