import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import {
  GoogleMapsSectionProps,
  MapsPosition,
  MapsLocation,
} from "@/types/sections";
import { LineSeparator } from "@/components";
import { Loader } from "@googlemaps/js-api-loader";
import "./style.css";
// eslint-disable-next-line
const markerIcon = require("../../../assets/Marker.png");

@Component({
  name: "GoogleMapsSection",
})
class GoogleMapsSection extends BaseComponent<GoogleMapsSectionProps> {
  DEFAULT_STYLE: google.maps.MapTypeStyle[] = [
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
  map: google.maps.Map | null = null;

  @Prop() title: GoogleMapsSectionProps["title"];
  @Prop({ required: false }) apikey!: GoogleMapsSectionProps["apikey"];
  @Prop({ required: false })
  startLocation!: GoogleMapsSectionProps["startLocation"];
  @Prop({ required: false, default: 15 }) zoom!: GoogleMapsSectionProps["zoom"];
  @Prop({ required: false, default: "en" })
  language!: GoogleMapsSectionProps["language"];
  @Prop({ required: false }) locations!: GoogleMapsSectionProps["locations"];
  @Prop({ required: false, default: "Contact Us" })
  buttonLabel!: GoogleMapsSectionProps["buttonLabel"];
  @Prop({ required: true })
  handleButtonClick!: GoogleMapsSectionProps["handleButtonClick"];

  placeMarkers(
    map: google.maps.Map,
    ...locations: MapsLocation[]
  ): google.maps.Marker[] {
    const renderDescriptionBox = (location: MapsLocation): Node => {
      const template = `<h2 class="font-bold">${location.name}</h2>
        <p>${location.street}</p>
        ${location.description ? "<p>" + location.description + "</p>" : ""}
        <p>${location.city}</p>
        <button class="google-maps-description-button">
        ${this.buttonLabel}
        </button>`;
      const div = document.createElement("div");
      div.classList.add("google-maps-description");
      div.innerHTML = template;
      div.querySelector("button")?.addEventListener("click", event => {
        this.handleButtonClick(event, location);
      });
      return div;
    };

    return locations.map((location: MapsLocation) => {
      const marker = new google.maps.Marker({
        position: location.position,
        icon: markerIcon,
        map,
      });
      const infoWindow = new google.maps.InfoWindow({
        content: renderDescriptionBox(location),
      });

      marker.addListener("click", () => {
        infoWindow?.open(map, marker);
      });
      return marker;
    });
  }

  getStartingLocation(callback: Function): void {
    if (this.startLocation) {
      callback(this.startLocation);
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(returnedLocation => {
        const location: MapsPosition = {} as MapsPosition;
        location.lat = returnedLocation.coords.latitude;
        location.lng = returnedLocation.coords.longitude;
        callback(location);
      });
    }
  }

  initMap(center: MapsPosition, cb: Function): void {
    const loader = new Loader({
      apiKey: this.apikey,
      version: "weekly",
      language: this.language,
    });
    let map: google.maps.Map;
    loader
      .load()
      .then(() => {
        map = new google.maps.Map(
          document.getElementById("map") as HTMLElement,
          {
            center,
            zoom: this.zoom,
            styles: this.DEFAULT_STYLE,
          },
        );
        cb(map);
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  mounted() {
    if (this.language?.length !== 2) {
      throw new Error("Language string must contain exactly 2 characters.");
    }

    this.getStartingLocation((center: MapsPosition) =>
      this.initMap(center, (map: google.maps.Map) => {
        this.map = map;
        if (this.locations) {
          this.placeMarkers(map, ...this.locations);
        }
      }),
    );
  }
  render() {
    return (
      <div class="w-full h-full p-8">
        {this.title && <h3 class="font-bold text-xl">{this.title}</h3>}
        {this.title && <LineSeparator height="1"></LineSeparator>}
        {<div class="h-full" id="map"></div>}
      </div>
    );
  }
}
export default GoogleMapsSection;
