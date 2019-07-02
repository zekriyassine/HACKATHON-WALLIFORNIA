import React from 'react';
import './index.css'; 

class VideoScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = '';
    }
    render(){
    const {numUser} = this.state;

    return (

        <div className={`container-${numUser}`}></div>
    )
    }
}

export default VideoScreen;
