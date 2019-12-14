import React from "react";
import UserDisplay from "./UserDisplay";
import {Button} from "./Button";
import '../index.css';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <UserDisplay/>
                <Button/>
            </div>
        );
    }
};