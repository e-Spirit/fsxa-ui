import {
  render,
  waitFor,
  getByTestId,
  getAllByTestId,
  fireEvent,
} from "@testing-library/vue";
import Slider from "..";
import BaseComponent from "@/components/BaseComponent";
import { Component } from "vue-property-decorator";

describe("components/slider", () => {
  @Component
  class TestSlide extends BaseComponent<{}> {
    render() {
      return <h1>Render me</h1>;
    }
  }
  it("should call the given render function", () => {
    let rendered = false;
    render(Slider, {
      props: {
        slides: [
          {
            render: () => (rendered = true),
          },
        ],
      },
    });
    expect(rendered).toBe(true);
  });
  it("should call the given animateIn and animateOut functions", () => {
    let animateInCalled = false;
    let animateOutCalled = false;
    render(Slider, {
      props: {
        slides: [
          {
            animateIn: () => (animateInCalled = true),
            animateOut: () => (animateOutCalled = true),
            render: () => render(TestSlide),
          },
        ],
      },
    });
    waitFor(() => {
      expect(animateInCalled).toBe(true);
    });
    waitFor(() => {
      expect(animateOutCalled).toBe(true);
    });
  });
  it("should render the html in the render function", () => {
    const { getByText } = render(Slider, {
      props: {
        slides: [
          {
            render: () => render(TestSlide),
          },
        ],
      },
    });
    expect(() => getByText("Render me")).not.toThrow();
  });
  it("should change the width-class of the slide-wrapper according to the number of visible elements", () => {
    [2, 3, 4, 5].forEach(numOfVisibleElements => {
      const { getAllByTestId, unmount } = render(Slider, {
        props: {
          initialSlideIndex: 1,
          slides: [
            {
              render: () => render(TestSlide),
            },
            {
              render: () => render(TestSlide),
            },
            {
              render: () => render(TestSlide),
            },
            {
              render: () => render(TestSlide),
            },
            {
              render: () => render(TestSlide),
            },
          ],
          visibleElements: numOfVisibleElements,
        },
      });
      const slideWrappers = getAllByTestId("slide-wrapper");
      slideWrappers.forEach(slideWrapper => {
        expect(slideWrapper.classList).toContain(`w-1/${numOfVisibleElements}`);
      });
      unmount();
    });
  });
  it("should calculate a different percentage for translation based on the number of visible elements", () => {
    const { getByTestId } = render(Slider, {
      props: {
        initialSlideIndex: 1,
        slides: [
          {
            render: () => render(TestSlide),
          },
          {
            render: () => render(TestSlide),
          },
        ],
        visibleElements: 2,
      },
    });
    const transformWrapper = getByTestId("transform-wrapper");
    expect(transformWrapper.style.transform).toBe("translateX(-50%)");
  });
  it("should automatically slide to the next slide when animate is set to true", () => {
    const { getByTestId } = render(Slider, {
      props: {
        initialSlideIndex: 0,
        slides: [
          {
            render: () => render(TestSlide),
          },
          {
            render: () => render(TestSlide),
          },
        ],
        animate: true,
        animationDelay: 100,
      },
    });
    const transformWrapper = getByTestId("transform-wrapper");
    expect(transformWrapper.style.transform).toBe("translateX(-0%)");
    waitFor(() => {
      expect(transformWrapper.style.transform).toBe("translateX(-50%");
    });
  });
  describe("controls scoped slot", () => {
    const slides = [
      {
        render: () => render(TestSlide),
      },
      {
        render: () => render(TestSlide),
      },
      {
        render: () => render(TestSlide),
      },
    ];
    interface ControlProps {
      currentSlideIndex: number;
      prevSlideIndex: number;
      nextSlideIndex: number;
      showSlide: Function;
    }
    const controlFunction = (props: ControlProps, expectCb: Function) => {
      expectCb(props);
    };
    it("should pass in the correct indices", () => {
      const expectCb = (props: ControlProps) => {
        expect(props.currentSlideIndex).toBe(0);
        expect(props.nextSlideIndex).toBe(1);
        expect(props.prevSlideIndex).toBeNull;
      };
      render(Slider, {
        props: {
          slides,
        },
        scopedSlots: {
          controls: (props: any) => controlFunction(props, expectCb),
        },
      });
    });
    it("should pass a prevSlideIndex if infinite is set to true", () => {
      const expectCb = (props: ControlProps) => {
        expect(props.currentSlideIndex).toBe(0);
        expect(props.nextSlideIndex).toBe(1);
        expect(props.prevSlideIndex).not.toBeNull;
      };
      render(Slider, {
        props: {
          slides,
          infinite: true,
        },
        scopedSlots: {
          controls: (props: any) => controlFunction(props, expectCb),
        },
      });
    });
    it("should change the slide when the showSlide function is called", async () => {
      const { getByTestId } = render(Slider, {
        props: {
          slides,
        },
        scopedSlots: {
          controls: `
          <div>
            <span data-testid="current-slide-index">{{props.currentSlideIndex}}</span>
            <button :onclick="props.showSlide(1)" data-testid="slide-button"></button>
          </div>
          `,
        },
      });
      const button = getByTestId("slide-button");
      await fireEvent(button, new Event("click"));
      const slideIndex1 = getByTestId("current-slide-index");
      expect(slideIndex1.innerHTML).toBe("1");
    });
  });
});
