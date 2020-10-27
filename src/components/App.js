import React, {useEffect} from 'react';
import { selectSong } from '../actions';
import SongList from './SongList';
import SongDetail from './SongDetail';
const App = () => {

    /*useEffect(() => {
        const interval = setInterval(() => {
          console.log('This will run every second!');
        }, 1000);
        return () => clearInterval(interval);
      }, []); */
      
    return <div className="ui container grid"> 
    <div className="ui row">
      
    <div className="column eight wide">
    <br/>

      <SongList/>
      </div>
      <div className="column eight wide">
      <br/>

        <SongDetail/>
        </div>
      </div>
    </div>
};

export default App;