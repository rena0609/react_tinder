import React from "react";
import {usersConfig} from "../usersConfig"

const UserDisplay = () => {
    const random = usersConfig.people[Math.floor(Math.random() * usersConfig.people.length)];

    return (
        <div>
            <img alt={random.name} src={random.img}/>
            <div>{random.name}</div>
            <div>{random.age}</div>
        </div>
    )
};

export default UserDisplay;
