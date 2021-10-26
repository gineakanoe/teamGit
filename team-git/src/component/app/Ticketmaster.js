import React, {useState} from 'react';

const Ticketmaster = () => {
    const [events, setEvents] = useState('');

    const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json';
    const apiKey = 'FGYnq11NCzOT2Nsw8GyhfycPCAnJXEix';

    let position = async () => {
        await navigator.geolocation.getCurrentPosition(function(position) {
            // console.log('Latitude is: ', position.coords.latitude);
            // console.log('Longitude is: ', position.coords.longitude);
        }, )
    }
    

    const geoPoint = position();
    // const radius = 25;
    const limit = 10;
 
    let getEvents = async () => {
        const res = await fetch(`${baseURL}?&${geoPoint}&size=1&apikey=${apiKey}`);
        const data = await res.json();
        const newData = data.filter.slice(0, 10);
    
        setEvents(newData);
        console.log(newData);
    }
//    getEvents();

    
    
    return (
        <div>
            <h1>Ticketmaster Events</h1>
            <div>
                {events.length > 0 && events.length < 15 ? <Ticketmaster events={events} /> : null}
            </div>
        </div>
    );
    
};

export default Ticketmaster;