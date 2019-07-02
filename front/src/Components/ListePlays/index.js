import React from 'react';
import './index.css';

class ListePlays extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leftPanel: false,
            rightPanel: false,
        }


    }

    listChange = (name) => {
        this.setState({
            [name]: !this.state[name]
        })
    }
    render() {
        return (
            <div>
                <div className={"playlist " + (this.state.leftPanel ? "active" : "")}>
                    <button onClick={() => this.listChange('leftPanel')} className="open-button">open</button>
                    <ul className="list">

                    </ul>
                </div>
                <div className="">
                    <audio className="plays" controls>
                        <source src="horse.ogg" type="audio/ogg" />
                        <source src="horse.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <div className={"playlist-left " + (this.state.rightPanel ? "active" : "")}>
                    <button onClick={() => this.listChange('rightPanel')} className="open-button-left">open</button>
                    <ul className="list_left">
                        <li className="list-item-left">song 1</li>
                        <li className="list-item-left">song 2</li>
                        <li className="list-item-left">song 3</li>
                        <li className="list-item-left">song 4</li>
                        <li className="list-item-left">song 5</li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default ListePlays;