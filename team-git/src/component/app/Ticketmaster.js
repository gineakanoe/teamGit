import React, {useState} from 'react';

const Ticketmaster = () => {
    const [events, setEvents] = useState('');

    const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json';
    const apiKey = 'FGYnq11NCzOT2Nsw8GyhfycPCAnJXEix';

    position = async () => {
        await navigator.geolocation.getCurrentPosition(
            position => this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }, newState => console.log(newState)),
            err => console.log(err)
        );
        console.log(this.state.latitude);
    };
    
 
    getEvents = async () => {
        const res = await fetch(`${baseURL}?size=1&apikey=${apiKey}`);
        const data = await res.json();
    
        setEvents(data);
        console.log(data);
    }
   

    index.search('', {
        aroundLatLng: 'position',
        aroundRadius: 1000000 // 1000 km
      }).then(({ hits }) => {
        console.log(hits);
      });

    
     
    return (
        <div>
            <h1>Ticketmaster Events</h1>
            <div>
                {events.length > 0 ? <Ticketmaster events={events} /> : null}
            </div>
        </div>
    );
    
};

export default Ticketmaster;