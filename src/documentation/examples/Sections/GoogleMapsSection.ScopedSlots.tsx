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
        name: "This headline has a different colour",
        city: "1080 Vienna",
        street: "Skodagasse 13",
        description:
          "If you click this marker the corresponding item in the sidebar will be selected.",
      },
      {
        position: {
          lat: 48.210967,
          lng: 16.246388,
        },
        name: "And the description and address are missing",
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
        name: "Look! It's also a custom info window",
        city: "1140 Vienna",
        street: "Some other alley 23",
        description:
          "See how this description is missing in the box and in the info window.",
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
          title="Google Maps Section with scoped slots and custom info window"
          startLocation={startLocation}
          language="en"
          buttonLabel="Contact us"
          locations={locations}
          renderInfoWindow={(location: MapsLocation): Node => {
            const div = document.createElement("div");
            div.innerHTML = `<h1 class="ui-text-espirit ui-font-bold ui-text-xl">${location.name}</h1>`;
            return div;
          }}
          handleButtonClick={(e: MouseEvent, location: MapsLocation) => {
            console.log("Button pressed");
            console.log("mouse event", e);
            console.log("Data is", location);
          }}
          markerIcon="https://dummyimage.com/50x50/8f008f/fff"
          scopedSlots={{
            title: title => (
              <h2 class="ui-text-3xl ui-font-bold ui-text-espirit">{title}</h2>
            ),
            locationItem: props => (
              <div
                class={`${
                  props.selected ? "ui-text-gray-500" : ""
                } ui-bg-white ui-border-b-2 ui-cursor-pointer hover:ui-text-gray-500 ui-p-1`}
                onClick={() => props.handleItemClick()}
              >
                <h3 class="ui-text-lg ui-font-semibold ui-text-espirit">
                  {props.location.city}
                </h3>
                <h4 class="ui-font-semibold">{props.location.name}</h4>
              </div>
            ),
          }}
        />
      </div>
    );
  }
}
