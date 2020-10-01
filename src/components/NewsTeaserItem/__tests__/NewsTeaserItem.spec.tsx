import { render, fireEvent, getByTestId } from "@testing-library/vue";
import NewsTeaserItem from "./../";

describe("components/NewsTeaserItem", () => {
  it("calls handleClick callback on call", async () => {
    const title = "title test";
    const date = "02.02.2020";
    const description = "desc test";
    const spy = jest.fn();
    const { getByTestId } = render(NewsTeaserItem, {
      props: {
        title: title,
        date: date,
        description: description,
        handleClick: spy,
      },
    });
    const readMore = getByTestId("newsteaseritem-click");
    await fireEvent(readMore!, new Event("click"));
    expect(spy).toHaveBeenCalled();
  });
  it("checks if passed content renders", () => {
    const title = "title test";
    const date = "02.02.2020";
    const description = "desc test";
    const { getByTestId } = render(NewsTeaserItem, {
      props: {
        title: title,
        date: date,
        description: description,
      },
    });
    const titleTest = getByTestId("newsteaseritem-title");
    const dateTest = getByTestId("newsteaseritem-date");
    const descTest = getByTestId("newsteaseritem-description");
    expect(titleTest).toBeTruthy();
    expect(dateTest).toBeTruthy();
    expect(descTest).toBeTruthy();
  });
  it("checks if latest is working on true", () => {
    const title = "title test";
    const date = "02.02.2020";
    const description = "desc test";
    const { getByTestId } = render(NewsTeaserItem, {
      props: {
        title: title,
        date: date,
        description: description,
        latest: true,
      },
    });
    const latestTest = getByTestId("newsteaseritem-latest");
    expect(latestTest!.classList.contains("is-latest")).toBeTruthy();
  });
});
