import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const PropertyMap = ({ street, city, state }) => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const address = `${street}, ${city}, ${state}`;

    const fetchCoordinates = async () => {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const { lat, lon } = data[0]; // Extract coordinates
        setCoordinates({ lat, lng: lon });
      } else {
        alert('Address not found');
      }
    };

    fetchCoordinates();
  }, [street, city, state]);

  useEffect(() => {
    // Ensure map is not reinitialized
    let map;

    if (coordinates) {
      // Clean up the existing map instance before reinitializing
      if (map != null) {
        map.remove();
      }

      // Initialize map
      map = L.map('map').setView([coordinates.lat, coordinates.lng], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      // Create custom pin icon
      const customIcon = L.icon({
        iconUrl: '/images/pin.svg',
        iconSize: [40, 40], // Size of the icon
        iconAnchor: [20, 40], // Point where the icon is anchored (center bottom)
        popupAnchor: [0, -40], // Point where the popup opens relative to the iconAnchor
      });

      // Add marker with custom pin
      L.marker([coordinates.lat, coordinates.lng], { icon: customIcon }).addTo(map);
    }

    // Cleanup function to remove map on component unmount or re-render
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [coordinates]);

  return <div id="map" style={ { height: '500px', width: '100%' } }></div>;
};

export default PropertyMap;