import React, { Component } from 'react';
import { Map, Marker, Polygon, LayersControl } from 'react-leaflet';
import { GoogleLayer }  from 'react-leaflet-google';

class CustomMap extends Component {
  state = {
    center: {
      lat: 28.0448222,
      lng: 69.6712804
    },
    zoom: 14,
    markers: [],
    polygon: [],
    map_key: 'AIzaSyDEG4lyorD61vnJoAHG0FkQERZ-McElZyg',
    satellite: 'SATELLITE'
  }

  handleClick = e => {
    const { lat, lng } = e.latlng;
    this.setState({
      markers: [
        ...this.state.markers, [lat, lng]
      ]
    })
    this.setState({
      polygon: [
        ...this.state.polygon, [lat, lng]
      ]
    })
  }

  handleDrag = (e) => {
    const { lat, lng } = e.target._latlng;
    const prevlat = e.target.options.position[0]
    const prevlng = e.target.options.position[1]
    this.updatePolygon(lat, lng, prevlat, prevlng);
  }

  updatePolygon = (lat, lng, prevlat, prevlng) => {
    const { polygon } = this.state;
    const meow = polygon.filter((arr) => arr[0] !== prevlat && arr[1] !== prevlng);
    meow.push([lat, lng]);
    this.setState({ polygon: meow })
  }


  render() {
    const { center, zoom, markers, polygon, map_key, satellite } = this.state;
    const { BaseLayer} = LayersControl;
    return (
        <Map center={center} zoom={zoom} className="map" onClick={this.handleClick}>
          <LayersControl>
             <BaseLayer checked name='Google Maps Satellite'>
              <GoogleLayer googlekey={map_key}  maptype={satellite} />
            </BaseLayer>
          </LayersControl>
          {
            markers.map((m, i) => (
              <Marker draggable={true} position={m} key={i} onDragend={this.handleDrag} />
            ))
          }
          {
            polygon.length > 2 &&
            <Polygon
              positions={polygon}
            />
          }
        </Map>
    )
  }
}

CustomMap.propTypes = {};

export default CustomMap;
