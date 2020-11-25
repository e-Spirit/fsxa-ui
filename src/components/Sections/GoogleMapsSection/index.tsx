import { Component, Prop, Watch } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import {
  GoogleMapsSectionProps,
  MapsPosition,
  MapsLocation,
} from "@/types/sections";
import { LineSeparator } from "@/components";
import { Loader } from "@googlemaps/js-api-loader";
// eslint-disable-next-line
const markerIcon = require("../../../assets/Marker.png");

interface MarkerWithInfoWindow {
  marker: google.maps.Marker;
  infoWindow: google.maps.InfoWindow;
}

const DEFAULT_STYLE: google.maps.MapTypeStyle[] = [
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

  @Prop() title: GoogleMapsSectionProps["title"];
  @Prop({ required: true }) apikey!: GoogleMapsSectionProps["apikey"];
  @Prop() startLocation!: GoogleMapsSectionProps["startLocation"];
  @Prop({ default: 15 }) zoom!: GoogleMapsSectionProps["zoom"];
  @Prop({ default: "en" }) language!: GoogleMapsSectionProps["language"];
  @Prop() locations!: GoogleMapsSectionProps["locations"];
  @Prop({ default: "Contact Us" })
  buttonLabel!: GoogleMapsSectionProps["buttonLabel"];
  @Prop({ required: true })
  handleButtonClick!: GoogleMapsSectionProps["handleButtonClick"];

  @Watch("selectedIndex")
  handleSelectionChange(index: number) {
    this.markers?.forEach((marker, i) => {
      if (this.map && this.selectedIndex !== null && this.locations) {
        if (i === index) {
          marker.infoWindow.open(this.map, marker.marker);
          this.map.panTo(this.locations[index].position);
        } else {
          marker.infoWindow.close();
        }
      }
    });
  }

  private renderDescriptionBox(location: MapsLocation): Node {
    const template = `<h2 class="font-bold">${location.name}</h2>
      <p>${location.street}</p>
      ${location.description ? "<p>" + location.description + "</p>" : ""}
      <p>${location.city}</p>
      <button class="bg-black text-white hover:bg-gray-300 hover:text-black focus:outline-none p-2 my-4 w-auto overflow-hidden cursor-pointer font-light text-sm">
      ${this.buttonLabel}
      </button>`;
    const div = document.createElement("div");
    div.classList.add("w-32", "text-sm");
    div.innerHTML = template;
    div.querySelector("button")?.addEventListener("click", event => {
      this.handleButtonClick(event, location);
    });
    return div;
  }

  placeMarkers(
    map: google.maps.Map,
    locations: MapsLocation[],
  ): MarkerWithInfoWindow[] {
    return locations.map((location: MapsLocation, index) => {
      const marker = new google.maps.Marker({
        position: location.position,
        icon: markerIcon,
        map,
      });
      const infoWindow = new google.maps.InfoWindow({
        content: this.renderDescriptionBox(location),
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

  async initMap(): Promise<google.maps.Map> {
    const center = this.startLocation || ({} as MapsPosition);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(returnedLocation => {
        center.lat = returnedLocation.coords.latitude;
        center.lng = returnedLocation.coords.longitude;
      });
    }
    const loader = new Loader({
      apiKey: this.apikey,
      version: "weekly",
      language: this.language,
    });
    await loader.load();
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center,
        zoom: this.zoom,
        styles: DEFAULT_STYLE,
      },
    );
    return map;
  }
  mounted() {
    if (this.language?.length !== 2) {
      throw new Error("Language string must contain exactly 2 characters.");
    }

    this.initMap()
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
        <div class="grid grid-cols-1 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 h-full border-2 border-gray-400">
          <div class="col-span-1 lg:col-span-3" id="map"></div>
          <div class="col-span-1 lg:col-span-1 bg-gray-100 overflow-scroll border-l-4 border-gray-400">
            {this.locations &&
              this.locations?.map((location, index) => (
                <div
                  class={`w-full h-32 py-2 px-4 border-b-2 border-gray-400 cursor-pointer ${
                    index === this.selectedIndex ? "bg-white" : ""
                  }`}
                  on-click={this.selectLocation.bind(this, index)}
                >
                  <div class="w-full h-10 overflow-hidden">
                    <h3 class="text-2xl font-bold" style="color:#D5DD00;">
                      {location.name}
                    </h3>
                  </div>
                  <div class="text-sm">
                    <p>{location.description}</p>
                    <p>{location.street}</p>
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
