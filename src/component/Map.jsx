import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import './Map.css';

export const Map = ({ center, zoom }) => {
    return <div className="map">
        <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyD6cYGr-T3DcSe-LlW_QZ-pDM5Y9EheXgc' }}
            defaultCenter={center}
            defaultZoom={zoom} >
            <Icon icon="carbon:location-filled" className="location-marker" lat={center.lat} lng={center.lng} />
        </GoogleMapReact>
    </div>
}

Map.defaultProps = {
    zoom: 6,
    center: {
        lat: 16.8409,
        lng: 96.1735
    }
}