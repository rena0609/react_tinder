import React from "react";
import {usersConfig} from "../usersConfig"

export class UserDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Linda',
            age: 25,
            img: "https://i.imgur.com/QZuGC10.jpg"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        const random = usersConfig.people[Math.floor(Math.random() * usersConfig.people.length)];
        this.setState(random);
    };

    render() {
        return (
            <div className="ui container">
                <div className="ui segments">
                    <div className="ui segment card">
                        <div className="image">
                            <img alt="img" src={this.state.img}/>
                        </div>
                        <div className="content">
                            <div className="header">{this.state.name}, {this.state.age}</div>
                        </div>
                    </div>
                </div>
                <div className="ui center aligned header">
                    <button className="ui button" onClick={this.handleClick}>Like</button>
                    <button className="ui button" onClick={this.handleClick}>Nope</button>
                </div>
            </div>
        )
    }
};
