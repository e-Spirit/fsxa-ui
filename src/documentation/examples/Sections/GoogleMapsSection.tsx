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
        name: "Skoda",
        city: "1080 Wien",
        street: "Skodagasse 13",
      },
      {
        position: {
          lat: 48.210967,
          lng: 16.246388,
        },
        name: "Was anderes zum Testen",
        city: "1140 Wien",
        street: "Andere Gasse 12",
      },
      {
        position: {
          lat: 48.203967,
          lng: 16.236388,
        },
        name: "Noch was zum Testen",
        city: "1140 Wien",
        street: "Noch eine Gasse 23",
        description:
          "Hier steht noch ein langer Fließtext. Mit noch mehr Fließtext.",
      },
    ];
    const startLocation = {
      lat: 48.213967,
      lng: 16.346388,
    } as MapsPosition;
    return (
      <div class="container mx-auto" style="height: 640px;">
        <Sections.GoogleMapsSection
          apikey={apikey}
          title="Google Maps Section"
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
