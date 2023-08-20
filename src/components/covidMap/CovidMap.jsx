import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import './covidMap.scss'

const CovidMap = () => {
    const [countriesData, setCountriesData] = useState([]);

    useEffect(() => {
        axios
            .get('https://disease.sh/v3/covid-19/countries')
            .then((response) => {
                setCountriesData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const icon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    return (
        <MapContainer center={[20, 0]} zoom={2} className="mapContainer">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {countriesData.map((country) => (
                <Marker
                    key={country.countryInfo.iso3}
                    position={[country.countryInfo.lat, country.countryInfo.long]}
                    icon={icon}
                >
                    <Popup>
                        <div className="popupContent">
                            <h2>{country.country}</h2>
                            <p>Active Cases: {country.active}</p>
                            <p>Recovered: {country.recovered}</p>
                            <p>Deaths: {country.deaths}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default CovidMap;