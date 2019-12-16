import React from "react";
import {UserDisplay} from "./UserDisplay";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className="ui center aligned header">Tinder</h1>
                <UserDisplay/>
            </div>
        );
    }
};