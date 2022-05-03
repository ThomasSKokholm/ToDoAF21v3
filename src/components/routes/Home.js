import React from "react";
// const ip = require('ip');

const Home = () => {
    return (
        <div>
            <h1>Velkommen til ToDoAF21v3</h1>
            <p>
                Her kan du oprette, redigere og slette dine todo lister.
            </p>
            <div>{/* Din lokale ip: {ip.address()} */}</div>
        </div>
    );
}

export default Home;