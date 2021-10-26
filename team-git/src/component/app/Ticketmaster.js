import React, {useState} from 'react';
import TicketmasterResults from './TicketmasterChild/TicketmasterChild';

const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const key = 'FGYnq11NCzOT2Nsw8GyhfycPCAnJXEix';

const Ticketmaster = () => {
    // const [events, setEvents] = useState('');

    let position = async () => {
        await navigator.geolocation.getCurrentPosition(function(position) {
            console.log('Latitude is: ', position.coords.latitude);
            console.log('Longitude is: ', position.coords.longitude);
        }, )
    }
    

    // const geoPoint = position();
    // // const radius = 25;
    // const limit = 10;
 
    // let getEvents = async () => {
    //     const res = await fetch(`${baseURL}?&${geoPoint}&size=1&apikey=${apiKey}`);
    //     const data = await res.json();
    //     const newData = data.filter.slice(0, 10);
    
    //     setEvents(newData);
    //     console.log(newData);
    // }
//    getEvents();

    
    //! Trying another other method

    // const [search, setSearch] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [latlong={position}, setlatlong] = useState('')
    const [startDateTime, setStartDateTime] = useState('')
    const [endDateTime, setEndDateTime] = useState('')
    const [pageNumber, setPageNumber] = useState(0)
    const [results, setResults] = useState([])

    const fetchResults = async () => {
        let url = `${baseURL}?apikey=${key}&page=${pageNumber}`;
        url = postalCode ? url + `&postalCode=${postalCode}` : url;
        url = latlong ? url + `&latlong=${latlong}&locale=*` : url;
        url = startDateTime ? url + `&beging_date=${startDateTime}` : url;
        url = endDateTime ? url + `&end_date=${endDateTime}` : url;
        
        const res = await fetch(url);
        const data = res.json();

        setResults(data);
        console.log(data)

    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchResults();
        setPageNumber(0);
    };
    
    const changePageNumber = (e, direction) => {
        e.preventDefault()
        if (direction === 'down') {
            if (pageNumber > 0) {
                setPageNumber(pageNumber - 1)
                fetchResults();
            }
        }
        if (direction === 'up') {
            setPageNumber(pageNumber + 1)
            fetchResults();
        }
    }

    return (
        <div>
            {/* <h1>Ticketmaster Events</h1> */}
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    {/* <span>Enter a single search term (required) : </span>
                    <input type='text' name='search' onChange={(e) => setSearch(e.target.value)} required />
                    <br />  */}
                    <span>Enter postal code (required) : </span>
                    <input type='number' name='postalCode' onChange={(e) => setPostalCode(e.target.value)} required />
                    <br />
                    <span>Enter a start date: </span>
                    <input type="date" name="startDateTime" pattern="[0-9]{8}" onChange={(e) => setStartDateTime(e.target.value)} />
                    <br />
                    <span>Enter an end date: </span>
                    <input type="date" name="endDateTime" pattern="[0-9]{8}" onChange={(e) => setEndDateTime(e.target.value)} />
                    <br />
                    <button className="submit">Submit search</button>
                </form>
                {results.length > 0 ? <TicketmasterResults results={results} changePage={changePageNumber} /> : null}
            </div>
        </div>
    );
};

export default Ticketmaster;