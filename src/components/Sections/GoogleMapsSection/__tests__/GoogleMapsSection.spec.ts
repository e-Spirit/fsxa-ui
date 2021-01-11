import { render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import GoogleMapsSection from "..";
import { GoogleMapsSectionProps } from "../../../../types/sections";

const apikey = process.env.VUE_APP_MAPS_APIKEY;

// eslint-disable-next-line
const handleButtonClick = () => {};
const requiredProps = {
  apikey,
  language: "en",
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
      // Suppress console.error output, since we do not want to pollute the console with the expected error
      const errorSpy = jest
        .spyOn(console, "error")
        .mockImplementation(async () => []);
      expect(() =>
        render(GoogleMapsSection, { props: longProps }),
      ).toThrowError();
      expect(() =>
        render(GoogleMapsSection, { props: shortProps }),
      ).toThrowError();
      errorSpy.mockReset();
    });
  });
  describe("given a buttonLabel prop", () => {
    it("should throw an error if there is no handleButtonClick prop", () => {
      const illegalProps = requiredProps;
      illegalProps.buttonLabel = "Label";
      expect(() =>
        render(GoogleMapsSection, { props: illegalProps }),
      ).toThrowError();
    });
  });
  describe("given a handleButtonClick prop", () => {
    it("should throw an error if there is no buttonLabel prop", () => {
      const illegalProps = requiredProps;
      illegalProps.handleButtonClick = handleButtonClick;
      expect(() =>
        render(GoogleMapsSection, { props: illegalProps }),
      ).toThrowError();
    });
  });
  describe("given a styles prop", () => {
    it("should throw an error if the prop as string is not parsable", () => {
      const illegalProps = requiredProps;
      illegalProps.mapStyles = "omg these are not styles";
      expect(() =>
        render(GoogleMapsSection, { props: illegalProps }),
      ).toThrowError();
    });
  });
});
