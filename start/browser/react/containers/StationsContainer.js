import {connect} from 'react-redux';
import React from 'react';
import Stations from '../components/Stations';

const mapStateToProps = (state) => {
    //console.log("state in stations", state);
    let songsByStations = sortSongsToStations(state.songs);
    return {stations: songsByStations};
};

const sortSongsToStations = (songs) =>{
    let songSortByGenre = {};

    for(let i=0;i<songs.length;i++){
        let genre = songs[i].genre;
        songSortByGenre[genre] ? songSortByGenre[genre].push(songs[i]) : songSortByGenre[genre] = [songs[i]];


    }
    console.log("songs after sorting", songSortByGenre);
    return songSortByGenre;

}
const mapDispatchToProps = (dispatch)=>{
    return {};
};

const StationsContainer = connect(mapStateToProps,mapDispatchToProps)(Stations);
export default StationsContainer;