import { Component } from "vue-property-decorator";
import Vue from "vue";
import { Sections } from "fsxa-ui";
import { MapsLocation, MapsPosition } from "../../../types/sections";

const apikey = process.env.VUE_APP_MAPS_APIKEY;

@Component
export default class App extends Vue {
  render() {
    const locations = [
      {
        position: {
          lat: 48.213967,
          lng: 16.346388,
        },
        //name: "Skoda",
        //city: "1080 Vienna",
        street: "Skodagasse 13",
        description:
          "If you click this marker the corresponding item in the sidebar will be selected.",
      },
      {
        position: {
          lat: 48.210967,
          lng: 16.246388,
        },
        name: "A headline for testing the rendering of the headline",
        city: "1140 Vienna",
        street: "Some alley 12",
        description:
          "If you click this in the sidebar the map will center on the location of the marker.",
      },
      {
        position: {
          lat: 48.203967,
          lng: 16.236388,
        },
        name: "Another item",
        city: "1140 Vienna",
        street: "Some other alley 23",
        description:
          "This item is here to test how switching between 3 items behaves.",
      },
    ];
    const startLocation = {
      lat: 48.213967,
      lng: 16.346388,
    } as MapsPosition;
    return (
      <div class="ui-container ui-mx-auto" style="height: 640px;">
        <Sections.GoogleMapsSection
          apikey={apikey}
          title="Google Maps Section"
          startLocation={startLocation}
          language="en"
          buttonLabel="Contact us"
          locations={locations}
          handleButtonClick={(e: MouseEvent, location: MapsLocation) => {
            console.log("Button pressed");
            console.log("mouse event", e);
            console.log("Data is", location);
          }}
        />
      </div>
    );
  }
}
