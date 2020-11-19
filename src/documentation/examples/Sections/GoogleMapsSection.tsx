import { Component } from "vue-property-decorator";
import Vue from "vue";
import { Sections } from "fsxa-ui";
import { MapsLocation } from "../../../types/sections";

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
        city: "Wien",
        street: "Skodagasse 13",
      },
    ];

    return (
      <div class="container mx-auto h-64">
        <Sections.GoogleMapsSection
          apikey={apikey}
          title="Google Maps Section"
          locations={locations}
          buttonHandle={(e: MouseEvent, location: MapsLocation) => {
            console.log("Button pressed");
            console.log("mouse event", event);
            console.log("Data is", location);
          }}
        />
      </div>
    );
  }
}
