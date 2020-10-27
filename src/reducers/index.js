import  { combineReducers } from 'redux';


export const songsReducer = ()  => {
    return [
        { title: 'No Scrubs', duration : '4:05'  },
        { title: 'No good in goodbye', duration : '4:35'  },
        { title: 'Never seen anything', duration : '4:33'  },
        { title: 'Anh thanh niên', duration : '4:11'  }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
    return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
   