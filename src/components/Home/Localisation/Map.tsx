import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyCMGF5I9AffQ9MMnZU8EizxfC3rQzh2pm8",
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker");

      const position = { lat: 48.91125877299963, lng: 2.610091226644483 }; // Coordonnées de l'auto-école

      const map = new Map(mapRef.current!, {
        center: position,
        zoom: 15,
      });

      new Marker({
        position: position,
        map: map,
        title: "Auto-école - 13/15 Rue Louis Osteng, 77181 Courtry, France",
      });
    };

    initMap();
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};
