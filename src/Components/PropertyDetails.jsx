
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import Header from './Header'
import Footer from './Footer'
const containerStyle = {
  width: '100%',
  height: '400px'
};

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [error, setError] = useState('');
  const [mapCenter, setMapCenter] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY' 
  });


  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/properties/${id}`);
        if (!response.ok) {
          throw new Error('Property not found');
        }
        const data = await response.json();
        setProperty(data);
        setMapCenter({ lat: data.latitude, lng: data.longitude });
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  if (loadError) return <p>Error loading Google Maps</p>;
  if (!isLoaded) return <p>Loading Google Maps...</p>;

  if (error) {
    return <p>{error}</p>;
  }

  if (!property) {
    return <p>Loading property details...</p>;
  }

  return (
    <>
      <Header/>
    
    <div className="property-details">
      <img src={property.image} alt={property.name} />
      <h2>{property.name}</h2>
      <p>{property.location}</p>
      <p>{property.price}</p>
      <p>{property.description}</p>
      {mapCenter && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={15}
        >
          <Marker position={mapCenter} />
        </GoogleMap>
      )}
      </div>
      <Footer/>
    
    </>
  );
};
export default PropertyDetails
