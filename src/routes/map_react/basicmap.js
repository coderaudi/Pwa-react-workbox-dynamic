/**
 * @ Author: Abhijeet Khire
 * @ Create Time: 2020-04-15 22:50:47
 * @ Modified by: Abhijeet Khire
 * @ Modified time: 2020-04-16 00:55:15
 * @ Description: Map clustring and drawing
 */


// eslint-disable no-undef comment is required to avoid google err 


/* eslint-disable no-undef */
import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GOOGLE_MAP_KEY = "AIzaSyCcXjlA3bLlSEkAeMg-jdB6zIm-4gE4lQs";

const coords = [
    [
        { lat: 51.509674, lng: -0.193036 },
        { lat: 51.50947, lng: -0.194151 },
        { lat: 51.509116, lng: -0.194034 },
        { lat: 51.509043, lng: -0.19451 },
        { lat: 51.508987, lng: -0.194893 },
        { lat: 51.508931, lng: -0.195204 },
        { lat: 51.508837, lng: -0.195909 },
        { lat: 51.508898, lng: -0.195922 },
        { lat: 51.508636, lng: -0.19703 },
        { lat: 51.508572, lng: -0.197381 },
        { lat: 51.508483, lng: -0.197726 },
        { lat: 51.508389, lng: -0.198136 },
        { lat: 51.508559, lng: -0.198215 },
        { lat: 51.508449, lng: -0.198656 },
        { lat: 51.508334, lng: -0.19927 },
        { lat: 51.508355, lng: -0.19937 },
        { lat: 51.508404, lng: -0.199497 },
        { lat: 51.508372, lng: -0.200011 },
        { lat: 51.508308, lng: -0.200201 },
        { lat: 51.50819, lng: -0.20015 },
        { lat: 51.508158, lng: -0.200309 },
        { lat: 51.507973, lng: -0.200178 },
        { lat: 51.508009, lng: -0.199983 },
        { lat: 51.507734, lng: -0.199859 },
        { lat: 51.507595, lng: -0.200528 },
        { lat: 51.507496, lng: -0.20047 },
        { lat: 51.5074, lng: -0.200796 },
        { lat: 51.507916, lng: -0.201185 },
        { lat: 51.507734, lng: -0.20186 },
        { lat: 51.507004, lng: -0.201298 },
        { lat: 51.50681, lng: -0.202022 },
        { lat: 51.507523, lng: -0.202634 },
        { lat: 51.507358, lng: -0.203272 },
        { lat: 51.507264, lng: -0.203558 },
        { lat: 51.506737, lng: -0.203296 },
        { lat: 51.505841, lng: -0.202894 },
        { lat: 51.50503, lng: -0.202407 },
        { lat: 51.504359, lng: -0.202 },
        { lat: 51.503979, lng: -0.203986 },
        { lat: 51.505132, lng: -0.204652 },
        { lat: 51.504314, lng: -0.207929 },
        { lat: 51.50485, lng: -0.208263 },
        { lat: 51.504698, lng: -0.208794 },
        { lat: 51.50548, lng: -0.209299 },
        { lat: 51.505231, lng: -0.210223 },
        { lat: 51.505093, lng: -0.21072 },
        { lat: 51.505384, lng: -0.211053 },
        { lat: 51.505344, lng: -0.211453 },
        { lat: 51.505514, lng: -0.211823 },
        { lat: 51.505348, lng: -0.211854 },
        { lat: 51.505309, lng: -0.211988 },
        { lat: 51.505195, lng: -0.212567 },
        { lat: 51.504979, lng: -0.213457 },
        { lat: 51.504719, lng: -0.213341 },
        { lat: 51.50446, lng: -0.21386 },
        { lat: 51.50409, lng: -0.214612 },
        { lat: 51.503675, lng: -0.21538 },
        { lat: 51.503819, lng: -0.215575 },
        { lat: 51.503955, lng: -0.215803 },
        { lat: 51.504157, lng: -0.216115 },
        { lat: 51.504697, lng: -0.216664 },
        { lat: 51.505006, lng: -0.216933 },
        { lat: 51.505154, lng: -0.217028 },
        { lat: 51.506635, lng: -0.218002 },
        { lat: 51.507697, lng: -0.218438 },
        { lat: 51.509346, lng: -0.219019 },
        { lat: 51.510592, lng: -0.219563 },
        { lat: 51.510783, lng: -0.218558 },
        { lat: 51.510973, lng: -0.218644 },
        { lat: 51.51139, lng: -0.217159 },
        { lat: 51.511867, lng: -0.217508 },
        { lat: 51.512312, lng: -0.217786 },
        { lat: 51.513191, lng: -0.217742 },
        { lat: 51.513566, lng: -0.217693 },
        { lat: 51.513786, lng: -0.217376 },
        { lat: 51.514472, lng: -0.216459 },
        { lat: 51.514837, lng: -0.215982 },
        { lat: 51.514681, lng: -0.214373 },
        { lat: 51.514809, lng: -0.214046 },
        { lat: 51.51498, lng: -0.214358 },
        { lat: 51.515125, lng: -0.21464 },
        { lat: 51.515283, lng: -0.214953 },
        { lat: 51.515408, lng: -0.215209 },
        { lat: 51.51574, lng: -0.214768 },
        { lat: 51.51602, lng: -0.214328 },
        { lat: 51.51621, lng: -0.214002 },
        { lat: 51.516432, lng: -0.213602 },
        { lat: 51.516688, lng: -0.21307 },
        { lat: 51.516888, lng: -0.212534 },
        { lat: 51.516994, lng: -0.212201 },
        { lat: 51.517134, lng: -0.211736 },
        { lat: 51.517035, lng: -0.211667 },
        { lat: 51.517105, lng: -0.211376 },
        { lat: 51.516988, lng: -0.211305 },
        { lat: 51.517082, lng: -0.210853 },
        { lat: 51.517141, lng: -0.210545 },
        { lat: 51.516732, lng: -0.210296 },
        { lat: 51.516876, lng: -0.209659 },
        { lat: 51.517014, lng: -0.209062 },
        { lat: 51.517877, lng: -0.209587 },
        { lat: 51.518054, lng: -0.208841 },
        { lat: 51.518286, lng: -0.208129 },
        { lat: 51.518492, lng: -0.20758 },
        { lat: 51.518784, lng: -0.207045 },
        { lat: 51.519139, lng: -0.206478 },
        { lat: 51.519616, lng: -0.205846 },
        { lat: 51.520117, lng: -0.205226 },
        { lat: 51.520539, lng: -0.204596 },
        { lat: 51.520834, lng: -0.204102 },
        { lat: 51.521147, lng: -0.203341 },
        { lat: 51.521347, lng: -0.202625 },
        { lat: 51.521484, lng: -0.202017 },
        { lat: 51.521577, lng: -0.201501 },
        { lat: 51.521621, lng: -0.201069 },
        { lat: 51.521142, lng: -0.200714 },
        { lat: 51.520706, lng: -0.200381 },
        { lat: 51.520257, lng: -0.200017 },
        { lat: 51.519936, lng: -0.199719 },
        { lat: 51.519321, lng: -0.19918 },
        { lat: 51.518564, lng: -0.198376 },
        { lat: 51.518482, lng: -0.198646 },
        { lat: 51.5182, lng: -0.198452 },
        { lat: 51.517723, lng: -0.198155 },
        { lat: 51.517866, lng: -0.198674 },
        { lat: 51.517713, lng: -0.199232 },
        { lat: 51.517543, lng: -0.199123 },
        { lat: 51.517442, lng: -0.199467 },
        { lat: 51.517221, lng: -0.199317 },
        { lat: 51.517042, lng: -0.200034 },
        { lat: 51.516869, lng: -0.199919 },
        { lat: 51.51666, lng: -0.199702 },
        { lat: 51.516671, lng: -0.19937 },
        { lat: 51.515998, lng: -0.199152 },
        { lat: 51.515835, lng: -0.199152 },
        { lat: 51.515473, lng: -0.19917 },
        { lat: 51.515328, lng: -0.199102 },
        { lat: 51.515319, lng: -0.198636 },
        { lat: 51.515311, lng: -0.198433 },
        { lat: 51.515027, lng: -0.198351 },
        { lat: 51.515126, lng: -0.197644 },
        { lat: 51.515567, lng: -0.197507 },
        { lat: 51.515579, lng: -0.197053 },
        { lat: 51.515289, lng: -0.196986 },
        { lat: 51.515302, lng: -0.196312 },
        { lat: 51.515353, lng: -0.195184 },
        { lat: 51.515069, lng: -0.195067 },
        { lat: 51.514918, lng: -0.195032 },
        { lat: 51.514796, lng: -0.195232 },
        { lat: 51.514608, lng: -0.195556 },
        { lat: 51.514356, lng: -0.195169 },
        { lat: 51.514108, lng: -0.195138 },
        { lat: 51.514091, lng: -0.195507 },
        { lat: 51.514209, lng: -0.195559 },
        { lat: 51.514158, lng: -0.196059 },
        { lat: 51.513977, lng: -0.195994 },
        { lat: 51.513696, lng: -0.196288 },
        { lat: 51.513425, lng: -0.196522 },
        { lat: 51.513344, lng: -0.196312 },
        { lat: 51.512859, lng: -0.196239 },
        { lat: 51.512816, lng: -0.196908 },
        { lat: 51.512375, lng: -0.197152 },
        { lat: 51.51223, lng: -0.197723 },
        { lat: 51.512025, lng: -0.197748 },
        { lat: 51.511752, lng: -0.197725 },
        { lat: 51.511592, lng: -0.197712 },
        { lat: 51.511545, lng: -0.197337 },
        { lat: 51.511096, lng: -0.197239 },
        { lat: 51.510389, lng: -0.197132 },
        { lat: 51.510039, lng: -0.197037 },
        { lat: 51.50966, lng: -0.196927 },
        { lat: 51.509219, lng: -0.19679 },
        { lat: 51.509273, lng: -0.196552 },
        { lat: 51.509351, lng: -0.196023 },
        { lat: 51.509481, lng: -0.196054 },
        { lat: 51.50954, lng: -0.19565 },
        { lat: 51.509627, lng: -0.19568 },
        { lat: 51.509741, lng: -0.194873 },
        { lat: 51.509626, lng: -0.194822 },
        { lat: 51.509774, lng: -0.193945 },
        { lat: 51.509903, lng: -0.193127 },
        { lat: 51.509771, lng: -0.193075 },
        { lat: 51.509674, lng: -0.193036 }
    ]
];

const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");


const DrawingManagerWrapper = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        defaultZoom={12}
        defaultCenter={new google.maps.LatLng(18.521609, 73.854105)}
    >
        <DrawingManager
            setMap={GoogleMap}
            overlaycomplete={props.onComplete}
            defaultOptions={{
                drawingControl: true,
                // drawingMode: google.maps.drawing.OverlayType.POLYGON,
                drawingControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.TOP_CENTER,
                    drawingModes: [google.maps.drawing.OverlayType.POLYGON]
                },
                polygonOptions: {
                    fillColor: "#199ee0",
                    fillOpacity: 0.2,
                    strokeWeight: 2,
                    strokeColor: "#113460",
                    clickable: true,
                    editable: true,
                    geodesic: false,
                    visible: true,
                    zIndex: 1,
                    paths: coords
                }
            }}
        />


        <MarkerClusterer
            //  onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >

            <Marker
                key={11}
                position={{
                    lat: 18.519259,
                    lng: 73.855363
                }}

            />

            <Marker
                key={12}
                position={{
                    lat: 18.524172,
                    lng: 73.859704
                }}

            />
            <Marker
                key={13}
                position={{
                    lat: 18.517458,
                    lng: 73.858138
                }}

            />

        </MarkerClusterer>

    </GoogleMap>
));

export default DrawingManagerWrapper;