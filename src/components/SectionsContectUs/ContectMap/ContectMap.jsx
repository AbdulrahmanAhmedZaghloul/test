import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

AnyReactComponent.propTypes = {
  text: PropTypes.string.isRequired, // تأكد من أن النص هو من نوع string
};
 import React from 'react'
 
 function ContectMap() {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627,
        },
        zoom: 11,
      };
   return (
    <React.Fragment>
   <div className='w-full'>
        <div style={{ height: '70vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }} // أضف مفتاح API الخاص بك هنا
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    </React.Fragment>
   )
 }
 
 export default ContectMap