import { render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import GoogleMapsSection from "..";

const apikey = process.env.VUE_APP_MAPS_APIKEY;

const locations = [
  {
    position: {
      lat: 48.214039,
      lng: 16.346442,
    },
    name: "Skoda",
    city: "Wien",
    street: "Skodagasse 13",
  },
];

describe("components/sections/google-maps-section", () => {
  describe("given a title prop", () => {
    const props = {
      apikey,
      title: "This is a title",
      locations,
      // eslint-disable-next-line
      handleButtonClick: () => {},
    };
    it("should render a title", () => {
      const { getByText } = render(GoogleMapsSection, {
        props,
      });
      expect(getByText("This is a title")).toBeInTheDocument();
    });
  });
});
