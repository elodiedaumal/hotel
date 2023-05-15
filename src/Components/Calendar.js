import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { Event } from '../utils';

const CalendarComp = () => {
  const [month, setMonth] = useState(new Date());

  return (
    <>
      <div className='max-w-5xl mx-auto'>
        <Calendar
          onChange={setMonth}
          value={month}
          defaultView='year'
          maxDetail='year'
          next2Label=''
          prev2Label=''
          prev2AriaLabe=''
        />
      </div>
      {Event.filter((item) => item.id - 1 === month.getMonth()).map(
        ({ id, event }) => {
          return (
            <div key={id}>
              <ul>
                {event.map((singleevent, index) => {
                  return <li key={index}>{singleevent}</li>;
                })}
              </ul>
            </div>
          );
        }
      )}
    </>
  );
};

export default CalendarComp;
