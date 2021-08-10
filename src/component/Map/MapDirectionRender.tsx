import React, { useEffect, useState } from "react";

import {  DirectionsRenderer } from "react-google-maps";

const places = [
  { latitude: 48.45860034644261, longitude: 35.05754025013747 },
  { latitude: 48.4625948589013051, longitude: 35.04960962863169 },
  { latitude: 48.470998365338275, longitude: 35.04030212877429 },
  //...
];

interface IProps {

}
const MapDirectionsRenderer: React.FC<{}> = () => {
  const [directions, setDirections] = useState<google.maps.DirectionsResult>();
  const [error, setError] = useState<google.maps.DirectionsResult>();

  useEffect(() => {
    const waypoints = places.map((p) => ({
      location: { lat: p.latitude, lng: p.longitude },
      stopover: true,
    }));
    const origin = waypoints[0].location;
    const destination = waypoints[waypoints.length-1].location;

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.WALKING,
        waypoints: waypoints as unknown as google.maps.DirectionsWaypoint[],
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          setError(result);
        }
      }
    );
  }, []);

  return <DirectionsRenderer directions={directions} />;
};
export default MapDirectionsRenderer;
