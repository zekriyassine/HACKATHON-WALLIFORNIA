import React from 'react';
import './index.css'; 


class VideoScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = '';
    }
    handleLogin = (values) => {
        const config = {
          method: 'POST',
        };
        const url = 'https://api.twilio.com/2019-07-02/Accounts/ACe5aac877aaa3cc025a16e565239fcc2c/SK6d5f1e2925c3250a78eff88ec43d41a5/SK6d5f1e2925c3250a78eff88ec43d41a5.json';
        fetch(url, config)
        
      }
    render(){
    const {numUser} = this.state;

    return (

        <div className={`container container-${numUser}`}>
        
            <div className="item"></div>
        </div>
    )
    }
}

export default VideoScreen;
