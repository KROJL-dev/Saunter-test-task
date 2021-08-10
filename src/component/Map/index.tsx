import React, { useEffect, useState } from "react";

import {
  GoogleMap,
  DirectionsRenderer,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";

import MapDirectionRender from "./MapDirectionRender";

interface ILocation {
  location: location;
}

type location = {
  lat: number;
  lng: number;
};

const places: ILocation[] = [
  { location: { lat: 48.45860034644261, lng: 35.05754025013747 } },
  { location: { lat: 48.4625948589013051, lng: 35.04960962863169 } },
  { location: { lat: 48.470998365338275, lng: 35.04030212877429 } },
];
 

const Map: React.FC<{}> = () => {
  return (
    <GoogleMap
      defaultCenter={new google.maps.LatLng(places[0].location)}
      defaultZoom={10}
    >
      <MapDirectionRender />
    </GoogleMap>
  );
};


const MapWrapper = withScriptjs(withGoogleMap(Map));

export default MapWrapper;
