import { render, waitFor, fireEvent } from "@testing-library/vue";
import Slider from "..";
import BaseComponent from "@/components/BaseComponent";
import { Component } from "vue-property-decorator";

describe("components/slider", () => {
  @Component
  class TestSlide extends BaseComponent<unknown> {
    render() {
      return <h1>Render me</h1>;
    }
  }
  it("should call the given onSlideAnimation callback with animateIn and animateOut", () => {
    let animateInCalled = false;
    let animateOutCalled = false;
    render(Slider, {
      props: {
        onSlideAnimation: (type: string) => {
          if (type === "animateIn") animateInCalled = true;
          if (type === "animateOut") animateOutCalled = true;
        },
        slideCount: 3,
      },
      scopedSlots: {
        slide: () => render(TestSlide),
      },
    });
    waitFor(() => {
      expect(animateInCalled).toBe(true);
    });
    waitFor(() => {
      expect(animateOutCalled).toBe(true);
    });
  });
  it("should render the html in the slide scopedSlot", () => {
    const { getByText } = render(Slider, {
      props: {
        slideCount: 1,
      },
      scopedSlots: {
        slide: () => render(TestSlide),
      },
    });
    expect(() => getByText("Render me")).not.toThrow();
  });
  it("should change the width-class of the slide-wrapper according to the number of visible elements", () => {
    [2, 3, 4, 5].forEach((numOfVisibleElements) => {
      const { getAllByTestId, unmount } = render(Slider, {
        props: {
          initialSlideIndex: 1,
          slideCount: 5,
          visibleElements: numOfVisibleElements,
        },
        scopedSlots: {
          slide: () => render(TestSlide),
        },
      });
      const slideWrappers = getAllByTestId("slide-wrapper");
      slideWrappers.forEach((slideWrapper) => {
        expect(slideWrapper.classList).toContain(
          `ui-w-1/${numOfVisibleElements}`,
        );
      });
      unmount();
    });
  });
  it("should calculate a different percentage for translation based on the number of visible elements", () => {
    const { getByTestId } = render(Slider, {
      props: {
        initialSlideIndex: 1,
        slideCount: 2,
        visibleElements: 2,
      },
      scopedSlots: {
        slide: () => render(TestSlide),
      },
    });
    const transformWrapper = getByTestId("transform-wrapper");
    expect(transformWrapper.style.transform).toBe("translateX(-50%)");
  });
  it("should automatically slide to the next slide when animate is set to true", () => {
    const { getByTestId } = render(Slider, {
      props: {
        initialSlideIndex: 0,
        slideCount: 2,
        animate: true,
        animationDelay: 100,
      },
      scopedSlots: {
        slide: () => render(TestSlide),
      },
    });
    const transformWrapper = getByTestId("transform-wrapper");
    expect(transformWrapper.style.transform).toBe("translateX(-0%)");
    waitFor(() => {
      expect(transformWrapper.style.transform).toBe("translateX(-50%");
    });
  });
  describe("controls scoped slot", () => {
    interface ControlProps {
      currentSlideIndex: number;
      prevSlideIndex: number;
      nextSlideIndex: number;
      showSlide: () => void;
    }
    const controlFunction = (
      props: ControlProps,
      expectCb: (props: ControlProps) => void,
    ) => {
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
          slideCount: 3,
        },
        scopedSlots: {
          slide: () => render(TestSlide),
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
          slideCount: 3,
          infinite: true,
        },
        scopedSlots: {
          slide: () => render(TestSlide),
          controls: (props: any) => controlFunction(props, expectCb),
        },
      });
    });

    it("should change the slide when the showSlide function is called", async () => {
      const { getByTestId } = render(Slider, {
        props: {
          slideCount: 3,
        },
        scopedSlots: {
          slide: () => render(TestSlide),
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
