import React, {useState} from 'react';
import TicketmasterResults from './TicketmasterChild/TicketmasterChild';

const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const key = 'FGYnq11NCzOT2Nsw8GyhfycPCAnJXEix';

const Ticketmaster = () => {
    // const [events, setEvents] = useState('');

    // let position = async () => {
    //     await navigator.geolocation.getCurrentPosition(function(position) {
    //         console.log('Latitude is: ', position.coords.latitude);
    //         console.log('Longitude is: ', position.coords.longitude);
    //     }, )
    // }
    

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

    const [search, setSearch] = useState('')
    const [zipcode, setZipcode] = useState('')
    // const [geoPoint, setGeoPoint] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [pageNumber, setPageNumber] = useState(0)
    const [results, setResults] = useState([])

    const fetchResults = () => {
        let url = `${baseURL}?apikey=${key}&page=${pageNumber}&q=${search}`;
        url = startDate ? url + `&beging_date=${startDate}` : url;
        url = endDate ? url + `&end_date=${endDate}` : url;
        url = zipcode ? url + `&zipcode=${zipcode}` : url;

        fetch(url)
            .then(res => res.json())
            .then(data => setResults(data.response.docs))
            .catch(err => console.log(err));
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
            <h1>Ticketmaster Events</h1>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <span>Enter a single search term (required) : </span>
                    <input type='text' name='search' onChange={(e) => setSearch(e.target.value)} required />
                    <br />
                    <span>Enter zipcode (required) : </span>
                    <input type='number' name='zipcode' onChange={(e) => setZipcode(e.target.value)} required />
                    <br />
                    <span>Enter a start date: </span>
                    <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => setStartDate(e.target.value)} />
                    <br />
                    <span>Enter an end date: </span>
                    <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(e) => setEndDate(e.target.value)} />
                    <br />
                    <button className="submit">Submit search</button>
                </form>
                {results.length > 0 ? <TicketmasterResults results={results} changePage={changePageNumber} /> : null}
            </div>
        </div>
    );
    
};

export default Ticketmaster;