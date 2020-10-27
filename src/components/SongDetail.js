import React from 'react';
import {connect} from  'react-redux';

const SongDetail = (props) => {

    if(!props.songoday) {
        return <div>Select a song please dude</div>;
    }

    return ( 
    <div>
        <h3> Detail for: </h3>
        <b>Title : {props.songoday.title}</b>
        <p>Duration : {props.songoday.duration}</p>
         </div>
        )
};

const mapStateToProps = state => {
    return {songoday : state.selectedSong};
}

export default connect(mapStateToProps) (SongDetail);