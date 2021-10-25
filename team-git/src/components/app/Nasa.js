import React from "react";


const url = 'https://api.nasa.gov/planetary/earth/assets'
const api_key = 'zaxtk9rKvXyBmxXTh0eSgBGL5QSYKVjbXQs66gJy'
const api_url = 'https://api.nasa.gov/planetary/earth/imagery?api_key=zaxtk9rKvXyBmxXTh0eSgBGL5QSYKVjbXQs66gJy' 


async function Nasa() {
    
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);

};



Nasa();


export default Nasa;
