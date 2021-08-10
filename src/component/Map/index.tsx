import React, { useEffect, useState } from "react";

import {
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";

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
  const [directions, setDirections] = useState<google.maps.DirectionsResult>();

  useEffect(() => {
    let wayPoints = places.map((way) => ({
      location: new google.maps.LatLng(way.location),
      stopover: true,
    }));
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: wayPoints[0].location,
        destination: wayPoints[wayPoints.length - 1].location,
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: wayPoints,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          console.log(result);
          setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }, []);

  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 48.450001, lng: 34.983334 }}
        
      >
        <DirectionsRenderer directions={directions} />
      </GoogleMap>
    </div>
  );
};

export default Map;
