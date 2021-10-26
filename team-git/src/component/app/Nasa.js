import React, {useState, useEffect} from "react";


const Nasa = (props) => {
    const [url, seturl] = useState("https://api.nasa.gov/planetary/earth/imagery");
    const [key, setkey] = useState("zaxtk9rKvXyBmxXTh0eSgBGL5QSYKVjbXQs66gJy")
    const [img, setImg] = useState("");


    if('geolocation' in navigator) {
        console.log("Location is available");
        navigator.geolocation.getCurrentPosition(function(position){
        console.log(position.coords.longitude);
        console.log(position.coords.latitude);
        });
        } else {
        console.log("Location is not available")
        }
        
    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
    }


    useEffect(() => {

            fetch(`${url}?api_key=${key}&lon=${"-86.06"}&lat=${"40.04"}`)
            .then(res => res.blob())
            .then((imgBlob) => 
                setImg(url.createObjectURL(imgBlob))
            )
            .catch(err => console.log(err))
        }, [])


    return(
        <div>
                <h1>Latitude: {}</h1>
                <h1>Longitude: {}</h1>
        </div>
    )
    }

export default Nasa;
