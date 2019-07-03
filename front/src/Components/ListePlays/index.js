import React from 'react';
import WebcamCapture from '../webcam/index'
import './index.css';
import playlist from '../../playlist.json';
import io from 'socket.io-client';
import { NavLink } from 'react-router-dom';
const socket = io(`http://localhost:8000`);





class ListePlays extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: playlist.relationships.tracks.items,
      leftPanel: false,
      rightPanel: false,
      playlist: playlist.relationships.tracks.items,
      currentSongMp3: "",
      currentSongName: "",
    }


  }

  componentDidMount(prevState) {
    socket.on("connect", () => {
      console.log("connecté")
    })
  }
  listChange = (name) => {
    this.setState({
      [name]: !this.state[name]
    })
  }
  componentDidUpdate(prevProps,prevState){
        if(prevState.currentSongName !== this.state.currentSongName){
          console.log(this.state.currentSongName)

    const url = "http://localhost:4000/post-playlist";

  const config = {

    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: JSON.stringify({name:this.state.currentSongName,
                          id : "1"
    }),
  };
  fetch(url, config)
  .then(res => res.json())
  .then(data =>(
    console.log("data")
  ))


  }
}

  handleClick = (event) => {
    this.setState({
      currentSongName: event.target.dataset.name,
      currentSongMp3: event.target.dataset.url

    })

}
  render() {
    const listMusique = this.state.playlists.map(elem => (

      <li onClick={this.handleClick} className="list-item" data-url={elem.data.file} data-name={elem.data.name} >{elem.data.name}</li>
    ))

    const Player = () => {
      if (this.state.currentSongMp3) {
        return (
          <audio className="plays" controls autoPlay>
            <source src={this.state.currentSongMp3} type="audio/mp3" />
          </audio>
        )
      }
      return <audio className="plays" controls>
        <source src="" type="audio/mp3" autoPlay />
      </audio>
    }

    return (
      <div>
        <div className={"playlist " + (this.state.leftPanel ? "active" : "")}>
          <button onClick={() => this.listChange('leftPanel')} className="open-button">open</button>
          <ul className="list">
            {listMusique}
          </ul>
        </div>
        <div className="">

          <Player />
        </div>

        <div className={"playlist-left " + (this.state.rightPanel ? "active" : "")}>
          <button onClick={() => this.listChange('rightPanel')} className="open-button-left">open</button>
          <ul className="list_left">
          <li className="list-item-left">
            <NavLink>
              <WebcamCapture/>
              </NavLink>
              </li>

          </ul>
        </div>

      </div>
    )
  }
}

export default ListePlays;