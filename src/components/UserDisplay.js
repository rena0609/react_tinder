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
            <div>
                <img alt="img" src={this.state.img}/>
                <div>{this.state.name}</div>
                <div>{this.state.age}</div>
                <button onClick={this.handleClick}>Like</button>
                <button onClick={this.handleClick}>Nope</button>
            </div>
        )
    }
}
