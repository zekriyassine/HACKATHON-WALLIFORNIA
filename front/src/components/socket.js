import React, { Component } from "react";
import io from 'socket.io-client'
const socket = io(`http://localhost:8000`);




class Socket extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:8000/",
      response : "",

    };
  }
  recive = (test) =>{
    console.log("test",test)
  }
  componentDidMount(){
    socket.on("connect",()=>{
      console.log("connecté")
    })
  }

  send = () => {
    const test = 'test'
    socket.emit( "test", test);
  }   

  render() {


    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => this.send()}>test</button>
      </div>
    )
  }
}
export default Socket;