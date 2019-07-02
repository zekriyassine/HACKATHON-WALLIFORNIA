import React from 'react';
import playlist from '../../playlist.json';

class Playlists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playlists: playlist.relationships.tracks.items
        }
    }


   
    render() {
        console.log(this.state.playlists)
        const listMusique = this.state.playlists.map(elem =>(
            
            <li className="list-item">{elem.data.name}</li>
        ))
        
        return (
            <div>
                {listMusique}
            </div>
        )
    }
}

export default Playlists