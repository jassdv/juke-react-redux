import {connect} from 'react-redux';
import React from 'react';
import Station from '../components/Station'
import { convertSong } from '../utils';
import {toggleSong} from '../action-creators/player';




const mapStateToProps = function (state, ownProps) {


    let genreName = ownProps.params.genreName;
    let songs = state.songs;
    let genreFilteredArr = songs.filter((song)=>{
        if(song.genre === genreName){
            return true;

        }
        else
            return false;

    }).map(convertSong);

    return {songs:genreFilteredArr,
            currentSong: state.player.currentSong,
            isPlaying: state.player.isplaying};


}

const mapDispatchToProps = function (dispatch, ownProps) {
    const toggleOne = function(song,list){
        dispatch(toggleSong(song, list));

    }
    return {toggleOne};
}

const StationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Station);

export default StationContainer;

