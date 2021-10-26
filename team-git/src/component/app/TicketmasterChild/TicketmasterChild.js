import React from 'react';

const TicketmasterResults = (props) => {
    const {events, changePage} = props

    console.log(events);


    return (
        <div>
            <div>
                <button onClick={(e) => changePage(e, 'down')}>Previous 10</button>
                <button onClick={(e) => changePage(e, 'up')}>Next 10</button>
            </div>
            {events.map(event => {
                return (
                    <div key={event._id}>
                        <h3>{event.name}</h3>
                        <p>
                            {event.type}
                       </p>
                        <a href={event.web_url}><button>Find Out More!</button></a>
                    </div>
                )
            })}
        </div>
    );
};

export default TicketmasterResults;