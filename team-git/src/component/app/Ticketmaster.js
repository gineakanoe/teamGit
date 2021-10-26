import React, {useState, useEffect} from 'react';

const Ticketmaster = () => {
    const [events, setEvents] = useState('');

    const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json';
    const apiKey = 'FGYnq11NCzOT2Nsw8GyhfycPCAnJXEix';
    
    useEffect(() => {
        getData();

        async function getData() {
            const res = await fetch(`${baseURL}?size=1&apikey=${apiKey}`);
            const data = await res.json();
    
            setEvents(data);
        }
    }, []);

    
     
    return (
        <div>
            <h1>Ticketmaster Events</h1>

            {events && (
                <div className='events'>

                    {events.map((event, index) => (
                        <div key={index}>
                            <h2>{event.name}</h2>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
    
};

export default Ticketmaster;