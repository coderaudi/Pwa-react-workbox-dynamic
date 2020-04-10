/**
 * @ Author: Abhijeet Khire
 * @ Create Time: 2020-04-10 01:21:59
 * @ Modified by: Abhijeet Khire
 * @ Modified time: 2020-04-10 16:42:28
 * @ Description:
 */



import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


class MapView extends Component {

    constructor(params) {

        super(params);
        this.state = {
            loading: false,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
    }



    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }

        console.log("Map click", props);
    };

    render() {

        const style = {
            width: "90%",
            marginLeft: "5%",
            height: "90%",
            marginTop: "10%"
        }
        return (
            <div>
                <h1 className="text-center">Map</h1>

                <div >
                    <Map
                        style={style}
                        google={window.google}
                        zoom={14}
                        initialCenter={{
                            lat: -1.2884,
                            lng: 36.8233
                        }}
                        centerAroundCurrentLocation={true}
                    >

                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map>
                </div>


            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyCcXjlA3bLlSEkAeMg-jdB6zIm-4gE4lQs"),
    libraries: ['places']
})(MapView);


