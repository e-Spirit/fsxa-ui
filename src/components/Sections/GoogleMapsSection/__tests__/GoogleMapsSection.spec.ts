import { render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import GoogleMapsSection from "..";
import {
  GoogleMapsSectionProps,
  MapsLocation,
} from "../../../../types/sections";
import { shallowMount } from "@vue/test-utils";

const apikey = process.env.VUE_APP_MAPS_APIKEY;

// eslint-disable-next-line
const handleButtonClick = () => {};
let requiredProps: GoogleMapsSectionProps;
const defaultTitle = "This is a title";

/**
 * Running the tests will print warnings to the console. This is to be expected as the tests do not run in a browser.
 * The googlemaps section relies on the browser to access the users geolocation to center the map on the users position.
 * If it can't get a geolocation it will print a warning and continue.
 */
describe("components/sections/google-maps-section", () => {
  beforeEach(() => {
    requiredProps = {
      apikey,
      language: "en",
      startLocation: {
        lat: 10,
        lng: 10,
      },
    };
  });

  describe("given a title prop", () => {
    it("should render a title", () => {
      const propsWithTitle = requiredProps;
      propsWithTitle.title = defaultTitle;
      const { getByText } = render(GoogleMapsSection, {
        props: propsWithTitle,
      });
      const title = getByText(defaultTitle);
      expect(title).toBeInTheDocument();
      expect(title.tagName).toBe("H2");
    });
    describe("given a title scoped slot", () => {
      it("should render the title from the scoped slot instead of the default title", () => {
        const propsWithTitle = requiredProps;
        propsWithTitle.title = defaultTitle;
        const { getByTestId } = render(GoogleMapsSection, {
          props: propsWithTitle,
          scopedSlots: {
            title: `<h1 data-testid="rendered-title">{{props}}</h1>`,
          },
        });
        const scopedSlotTitle = getByTestId("rendered-title");
        expect(scopedSlotTitle).toBeInTheDocument;
        expect(scopedSlotTitle.tagName).toBe("H1");
        expect(scopedSlotTitle.innerHTML).toBe(defaultTitle);
      });
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

  describe("render description box", () => {
    const completeLocation = {
      name: "Link's house",
      city: "Hateno Village",
      street: "Behind the bridge",
      description: "Link lives here",
      position: {
        lat: 15.8,
        lng: 27.3,
      },
    };
    it("should return a node containing all the properties of the passed location", () => {
      const wrapper = shallowMount(GoogleMapsSection, {
        props: requiredProps,
      } as any);
      const descriptionBox = wrapper.vm.renderDescriptionBox(
        completeLocation,
      ) as HTMLDivElement;
      expect(descriptionBox.innerHTML).toContain(completeLocation.name);
      expect(descriptionBox.innerHTML).toContain(completeLocation.city);
      expect(descriptionBox.innerHTML).toContain(completeLocation.street);
      expect(descriptionBox.innerHTML).toContain(completeLocation.description);
    });
  });
  describe("given a locations prop", () => {
    const name = "Test Location";
    const locations: MapsLocation[] = [
      {
        name,
        city: "Bochum",
        street: "Kortumstraße",
        position: {
          lat: 40.1234,
          lng: 15.1234,
        },
      },
      {
        name,
        city: "Dortmund",
        street: "Hoher Wall",
        position: {
          lat: 40.1234,
          lng: 15.1234,
        },
      },
    ];
    it("should render the locations in the sidebar", () => {
      const locationProps = requiredProps;
      locationProps.locations = locations;
      const { getAllByTestId } = render(GoogleMapsSection, {
        props: locationProps,
      });
      const renderedLocations = getAllByTestId("rendered-location");
      expect(renderedLocations.length).toBe(locations.length);
      renderedLocations.forEach((renderedLocation, index) => {
        expect(renderedLocation).toBeInTheDocument();
        expect(renderedLocation.textContent).toContain(locations[index].city);
        expect(renderedLocation.textContent).toContain(locations[index].street);
      });
    });
    describe("given a locationItem scoped slot", () => {
      it("should render the locations using the item scoped slot template", () => {
        const locationProps = requiredProps;
        locationProps.locations = locations;
        const { getAllByTestId } = render(GoogleMapsSection, {
          props: locationProps,
          scopedSlots: {
            locationItem: `<div data-testId="scoped-slot-rendered-location">{{props.location.name}}</div>`,
          },
        });
        expect(() => getAllByTestId("rendered-locations")).toThrow();
        const renderedLocations = getAllByTestId(
          "scoped-slot-rendered-location",
        );
        expect(renderedLocations.length).toBe(locations.length);
        renderedLocations.forEach((renderedLocation) => {
          expect(renderedLocation).toBeInTheDocument();
          expect(renderedLocation.innerHTML).toContain(name);
        });
      });
    });
    it("should render a sidebar", () => {
      const locationProps = requiredProps;
      locationProps.locations = locations;
      const { getByTestId } = render(GoogleMapsSection, {
        props: locationProps,
      });
      const sidebar = getByTestId("sidebar") as HTMLElement;
      expect(sidebar.tagName).toBe("DIV");
    });
    it("should not render a sidebar if the locations prop is an empty array", () => {
      const locationProps = requiredProps;
      locationProps.locations = [];
      const { getByTestId } = render(GoogleMapsSection, {
        props: locationProps,
      });
      expect(() => getByTestId("sidebar")).toThrow();
    });
  });
});
