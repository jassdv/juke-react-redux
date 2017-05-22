import React from 'react';
import Songs from './Songs'



export default function Station (props) {
    console.log("in station",props);
    const stationName = props.params.genreName;

    const DUMMY_STATION_NAME = "Jazz Station";
    const DUMMY_SONGS = [{
        id: 1,
        name: "A Love Supreme",
        genre: "Jazz",
        artists: [{ name: "John Coltrane" }]
    }];
    const DUMMY_CURRENT_SONG = {};
    const DUMMY_IS_PLAYING = false;
    const DUMMY_TOGGLE_ONE = function () {};

    return(

        <div>
            <h3>Station: {stationName}</h3>
            <Songs
                songs={props.songs}
                currentSong={props.currentSong}
                isPlaying={props.isPlaying}
                toggleOne={props.toggleOne}
            />


        </div>
    );



}