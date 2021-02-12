import { Component, Prop, Watch } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import {
  GoogleMapsSectionProps,
  MapsLocation,
  GoogleMapsSectionSlots,
} from "@/types/sections";
import { LineSeparator } from "@/components";

// eslint-disable-next-line
const DEFAULT_ICON = require("../../../assets/Marker.png");

interface MarkerWithInfoWindow {
  marker: google.maps.Marker;
  infoWindow: google.maps.InfoWindow;
}
declare global {
  interface Window {
    googleMapsAPILoaded: any;
    google: any | undefined;
  }
}

const DEFAULT_STYLES: google.maps.MapTypeStyle[] = [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{ color: "#ffffff" }, { lightness: 17 }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }, { lightness: 18 }],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }, { lightness: 16 }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#dedede" }, { lightness: 21 }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
  },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [{ color: "#fefefe" }, { lightness: 20 }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
  },
] as google.maps.MapTypeStyle[];

@Component({
  name: "GoogleMapsSection",
})
class GoogleMapsSection extends BaseComponent<
  GoogleMapsSectionProps,
  {},
  GoogleMapsSectionSlots
> {
  map: google.maps.Map | null = null;
  selectedIndex: number | null = null;
  markers: MarkerWithInfoWindow[] | null = null;

  @Prop({ required: true }) apikey!: GoogleMapsSectionProps["apikey"];
  @Prop({ required: true })
  startLocation!: GoogleMapsSectionProps["startLocation"];

  @Prop({ default: navigator.language })
  language: GoogleMapsSectionProps["language"];
  @Prop()
  buttonLabel: GoogleMapsSectionProps["buttonLabel"];
  @Prop()
  handleButtonClick: GoogleMapsSectionProps["handleButtonClick"];

  @Prop()
  alwaysUseStartLocation: GoogleMapsSectionProps["alwaysUseStartLocation"];
  @Prop() title: GoogleMapsSectionProps["title"];
  @Prop({ default: 15 }) zoom: GoogleMapsSectionProps["zoom"];
  @Prop() locations: GoogleMapsSectionProps["locations"];
  @Prop() mapStyles: GoogleMapsSectionProps["mapStyles"];
  @Prop() renderInfoWindow: GoogleMapsSectionProps["renderInfoWindow"];
  @Prop() markerIcon: GoogleMapsSectionProps["markerIcon"];

  @Watch("selectedIndex")
  handleSelectionChange(index: number, oldIndex: number) {
    if (
      this.map &&
      this.selectedIndex !== null &&
      this.locations &&
      this.markers
    ) {
      const marker = this.markers[index];
      const oldMarker = this.markers[oldIndex];
      marker.infoWindow.open(this.map, marker.marker);
      this.map.panTo(this.locations[index].position);
      oldMarker && oldMarker.infoWindow.close();
    }
  }

  renderDescriptionBox(location: MapsLocation): Node {
    const headline = location.name
      ? `<h2 class="ui-font-bold ui-text-highlight ui-text-lg">${location.name}</h2>`
      : "";
    const description = location.description
      ? `<p>${location.description}</p>`
      : "";
    const street = location.street
      ? `<p class="ui-mt-2">${location.street}</p>`
      : "";
    const city = location.city ? `<p>${location.city}</p>` : "";
    const template = `${headline}
          <div class="ui-mt-2">
            ${description}
            ${street}
            ${city}
          </div>`;

    const div = document.createElement("div");
    div.classList.add("ui-w-64", "ui-text-sm");
    div.innerHTML = template;

    if (this.buttonLabel) {
      const button = `<button class='ui-bg-black ui-text-white hover:ui-bg-gray-300 hover:ui-text-black focus:ui-outline-none ui-p-2 ui-my-4 ui-w-auto ui-overflow-hidden ui-cursor-pointer ui-font-light ui-text-sm'>
      ${this.buttonLabel}
      </button>`;
      div.querySelector("button")?.addEventListener("click", event => {
        // since we validated this prop in the mounted hook we can safely assume that handleButtonClick is available here
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.handleButtonClick!(event, location);
      });
      div.innerHTML += button;
    }

    return div;
  }

  placeMarkers(
    map: google.maps.Map,
    locations: MapsLocation[],
  ): MarkerWithInfoWindow[] {
    return locations.map((location: MapsLocation, index) => {
      const marker = new google.maps.Marker({
        position: location.position,
        icon: this.markerIcon || DEFAULT_ICON,
        map,
      });
      const getContent = this.renderInfoWindow || this.renderDescriptionBox;
      const infoWindow = new google.maps.InfoWindow({
        content: getContent(location),
      });

      google.maps.event.addListener(marker, "click", () => {
        this.selectedIndex = index;
      });
      google.maps.event.addListener(infoWindow, "closeclick", () => {
        console.log("infowindow closed");
        this.selectedIndex = null;
      });
      return {
        marker,
        infoWindow,
      };
    });
  }

  getPromisedGeolocation(options?: PositionOptions): Promise<Position> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  getStyles(): google.maps.MapTypeStyle[] {
    let styles = DEFAULT_STYLES;
    if (this.mapStyles) {
      if (typeof this.mapStyles === "string") {
        try {
          styles = JSON.parse(this.mapStyles) as google.maps.MapTypeStyle[];
        } catch (error) {
          throw new Error(
            "Error parsing mapStyles string. Expecting valid json.",
          );
        }
      } else {
        styles = this.mapStyles;
      }
    }
    return styles;
  }
  removeApi(): void {
    document
      .querySelectorAll('script[src^="https://maps.googleapis.com"]')
      .forEach(script => {
        script.remove();
      });
    if (typeof google !== undefined) {
      window.google = undefined;
    }
  }

  loadApi(apikey: string, language: string): Promise<any> {
    const scriptTag = document.createElement("script");
    //should the need to load libraries ever arise, just append the parameter libaries as a comma separated string
    scriptTag.src = `https://maps.googleapis.com/maps/api/js?key=${apikey}&language=${language}&version=weekly&callback=googleMapsAPILoaded`;

    window.googleMapsAPILoaded = () => {
      const event = new CustomEvent("googleMapsAPILoaded");
      window.dispatchEvent(event);
    };

    const api = new Promise(resolve => {
      window.addEventListener("googleMapsAPILoaded", () => {
        resolve();
      });
    });

    document.head.appendChild(scriptTag);

    return api;
  }

  async initMap(styles: google.maps.MapTypeStyle[]): Promise<google.maps.Map> {
    const center = this.startLocation;

    if (!this.alwaysUseStartLocation) {
      let userPosition: Position;
      try {
        userPosition = await this.getPromisedGeolocation();
        center.lat = userPosition.coords.latitude;
        center.lng = userPosition.coords.longitude;
      } catch (error) {
        console.warn("Unable to get the users geolocation.");
      }
    }

    this.removeApi();
    //Since we have a default language we can easily assume there's a language set
    //eslint-disable-next-line
    await this.loadApi(this.apikey, this.language!);

    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center,
        zoom: this.zoom,
        styles,
      },
    );
    return map;
  }
  mounted() {
    if (this.buttonLabel) {
      if (!this.handleButtonClick) {
        throw new Error(
          "Button label was set but handler is missing. Please also set a handleButtonClick prop.",
        );
      }
    }
    if (this.handleButtonClick) {
      if (!this.buttonLabel) {
        throw new Error(
          "Button handler was set but label is missing. Please also set a buttonLabel prop.",
        );
      }
    }
    const styles = this.getStyles();
    this.initMap(styles)
      .then(map => {
        if (this.locations) {
          this.markers = this.placeMarkers(map, this.locations);
        }
        this.map = map;
      })
      .catch((err: Error) => {
        throw new Error(`Error initializing map: ${err.message}`);
      });
  }
  selectLocation(index: number) {
    this.selectedIndex = index;
  }
  renderDefaultTitle() {
    return (
      <div>
        <h2 class="ui-font-bold ui-text-xl">{this.title}</h2>
        <LineSeparator height="1"></LineSeparator>
      </div>
    );
  }
  renderSideBar() {
    if (this.locations && this.locations.length > 0) {
      return (
        <div
          class="ui-col-span-1 lg:ui-col-span-1 ui-bg-gray-100 ui-overflow-scroll ui-border-2 ui-border-gray-400"
          data-testId="sidebar"
        >
          {this.locations?.map((location, index) =>
            this.$scopedSlots.locationItem ? (
              this.$scopedSlots.locationItem({
                location,
                selected: index === this.selectedIndex,
                handleItemClick: this.selectLocation.bind(this, index),
              })
            ) : (
              <div
                class={`ui-w-full ui-py-1 ui-px-2 ui-border-b-2 ui-border-gray-400 ui-cursor-pointer ui-overflow-hidden ${
                  index === this.selectedIndex ? "ui-bg-white" : ""
                }`}
                on-click={this.selectLocation.bind(this, index)}
                data-testId="rendered-location"
              >
                <h3 class="ui-text-lg ui-font-bold ui-text-highlight ui-break-words">
                  {location.name}
                </h3>

                <div class="ui-mt-2 ui-text-sm">
                  {location.description && <p>{location.description}</p>}
                  <p class="ui-mt-2">{location.street}</p>
                  <p>{location.city}</p>
                </div>
              </div>
            ),
          )}
        </div>
      );
    }
    return null;
  }
  render() {
    const mapColSpan =
      this.locations && this.locations.length > 0
        ? "lg:ui-col-span-3"
        : "lg:ui-col-span-4";
    const containerRows =
      this.locations && this.locations.length > 0
        ? "ui-grid-rows-2"
        : "ui-grid-rows-1";
    return (
      <div class="ui-w-full ui-h-full ui-p-8">
        {this.$scopedSlots.title && this.title
          ? this.$scopedSlots.title(this.title)
          : this.title
          ? this.renderDefaultTitle()
          : null}
        <div
          class={`ui-grid ui-grid-cols-1 ${containerRows} lg:ui-grid-cols-4 lg:ui-grid-rows-1 ui-h-full`}
        >
          <div
            class={`ui-col-span-1 ${mapColSpan} ui-border-2 ui-border-gray-400`}
            id="map"
          ></div>
          {this.renderSideBar()}
        </div>
      </div>
    );
  }
}
export default GoogleMapsSection;
