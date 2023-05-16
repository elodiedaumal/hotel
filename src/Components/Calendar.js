import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { Event } from '../utils';
import { BsFillCheckSquareFill } from 'react-icons/bs';

const CalendarComp = () => {
  const [month, setMonth] = useState(new Date());

  return (
    <>
      <div className='max-w-5xl mx-auto mt-10'>
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
            <div key={id} className='my-10'>
              <ul className='max-w-5xl mx-auto  px-8 '>
                {event.map((singleevent, index) => {
                  return (
                    <div className='grid gap-5 items-center  grid-cols-10 '>
                      <BsFillCheckSquareFill className='text-xl' />
                      <li className='mb-4 col-span-9 ' key={index}>
                        {singleevent}
                      </li>
                    </div>
                  );
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
