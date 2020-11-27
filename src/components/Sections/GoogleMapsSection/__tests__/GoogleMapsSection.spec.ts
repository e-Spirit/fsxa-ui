import { render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import GoogleMapsSection from "..";
import { GoogleMapsSectionProps } from "../../../../types/sections";

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
// eslint-disable-next-line
const handleButtonClick = () => {}
const requiredProps = {
  apikey,
  buttonLabel: "label",
  language: "en",
  handleButtonClick,
} as GoogleMapsSectionProps;

describe("components/sections/google-maps-section", () => {
  describe("given a title prop", () => {
    const props = requiredProps;
    props.title = "This is a title";
    it("should render a title", () => {
      const { getByText } = render(GoogleMapsSection, {
        props,
      });
      expect(getByText("This is a title")).toBeInTheDocument();
    });
  });
  describe("given a language prop", () => {
    it("should throw an error if the length of language string is not exactly 2", () => {
      const longProps = requiredProps;
      longProps.language = "eng";
      const shortProps = requiredProps;
      shortProps.language = "e";
      expect(() =>
        render(GoogleMapsSection, { props: longProps }),
      ).toThrowError();
      expect(() =>
        render(GoogleMapsSection, { props: shortProps }),
      ).toThrowError();
    });
  });
});
