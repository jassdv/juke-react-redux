import React from 'react';
import {Link} from 'react-router';
import Station from './Station';

export default function Stations (props) {
    console.log('in station', props);


    return(
        //const genres = Object.keys(props.stations);
        <div>
            <h3>Stations</h3>
            <div className="list-group">
                {
                    Object.keys(props.stations).map(station => {
                        return (
                            <div className="list-group-item" key={station}>
                                <Link to={`/stations/${station}`}>{station}</Link>
                            </div>
                        );
                    })
                }
            </div>
        </div>

    );
}