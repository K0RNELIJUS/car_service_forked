import { StyledMapSection, StyledMapCont } from './MapSection.style';
import InfoWindowContent from './components/InfoWindowContent/InfoWindowContent';
import { useState, useMemo } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

const MapSection = ({ img }) => {
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // GoogleMap container style
  const containerStyle = useMemo(
    () => ({
      width: '100%',
      height: '100%',
      margin: '0 auto',
    }),
    []
  );

  // GoogleMap initial position and Marker position
  const center = useMemo(
    () => ({
      lat: 40.701,
      lng: -73.995,
    }),
    []
  );

  // GoogleMap options
  const options = useMemo(
    () => ({
      mapId: 'f97d71b8679d36db', // Map style id
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  return (
    <StyledMapSection img={img}>
      {isLoaded && (
        <StyledMapCont>
          <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={13}
            options={options}
            center={center}>
            <Marker
              position={center}
              onClick={() => setIsInfoWindowOpen(true)}
            />

            {isInfoWindowOpen && (
              <InfoWindow
                position={center}
                onCloseClick={() => setIsInfoWindowOpen(false)}>
                <InfoWindowContent />
              </InfoWindow>
            )}
          </GoogleMap>
        </StyledMapCont>
      )}
      <div></div>
      <img src={img} alt='' />
    </StyledMapSection>
  );
};

export default MapSection;
