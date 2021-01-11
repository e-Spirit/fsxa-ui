import { Component, Prop, Watch } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import {
  GoogleMapsSectionProps,
  MapsPosition,
  MapsLocation,
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
class GoogleMapsSection extends BaseComponent<GoogleMapsSectionProps> {
  map: google.maps.Map | null = null;
  selectedIndex: number | null = null;
  markers: MarkerWithInfoWindow[] | null = null;

  @Prop({ required: true }) apikey!: GoogleMapsSectionProps["apikey"];
  @Prop({ required: true }) language!: GoogleMapsSectionProps["language"];

  @Prop()
  buttonLabel: GoogleMapsSectionProps["buttonLabel"];
  @Prop()
  handleButtonClick: GoogleMapsSectionProps["handleButtonClick"];

  @Prop() title: GoogleMapsSectionProps["title"];
  @Prop() startLocation: GoogleMapsSectionProps["startLocation"];
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

  private renderDescriptionBox(location: MapsLocation): Node {
    const template = `<h2 class="font-bold text-highlight text-lg">${
      location.name
    }</h2>
      <div class="mt-2">
        ${location.description ? "<p>" + location.description + "</p>" : ""}
        <p class="mt-2">${location.street}</p>
        <p>${location.city}</p>
      </div>`;
    const div = document.createElement("div");
    div.classList.add("w-64", "text-sm");
    div.innerHTML = template;

    if (this.buttonLabel) {
      const button = `<button class='bg-black text-white hover:bg-gray-300 hover:text-black focus:outline-none p-2 my-4 w-auto overflow-hidden cursor-pointer font-light text-sm'>
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

      marker.addListener("click", () => {
        this.selectedIndex = index;
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
    let center = {} as MapsPosition;
    if (!this.startLocation) {
      const userPosition = await this.getPromisedGeolocation();
      center.lat = userPosition.coords.latitude;
      center.lng = userPosition.coords.longitude;
    } else {
      center = this.startLocation;
    }

    this.removeApi();
    await this.loadApi(this.apikey, this.language);

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
    if (this.language?.length !== 2) {
      throw new Error("Language string must contain exactly 2 characters.");
    }
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
  render() {
    return (
      <div class="w-full h-full p-8">
        {this.title && <h3 class="font-bold text-xl">{this.title}</h3>}
        {this.title && <LineSeparator height="1"></LineSeparator>}
        <div class="grid grid-cols-1 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 h-full">
          <div
            class="col-span-1 lg:col-span-3 border-2 border-gray-400"
            id="map"
          ></div>
          <div class="col-span-1 lg:col-span-1 bg-gray-100 overflow-scroll border-2 border-gray-400">
            {this.locations &&
              this.locations?.map((location, index) => (
                <div
                  class={`w-full py-2 px-4 border-b-2 border-gray-400 cursor-pointer overflow-hidden ${
                    index === this.selectedIndex ? "bg-white" : ""
                  }`}
                  on-click={this.selectLocation.bind(this, index)}
                >
                  <h3 class="text-2xl font-bold text-highlight break-words">
                    {location.name}
                  </h3>

                  <div class="mt-2 text-sm">
                    {location.description && <p>{location.description}</p>}
                    <p class="mt-2">{location.street}</p>
                    <p>{location.city}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
export default GoogleMapsSection;
