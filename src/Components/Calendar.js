import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { Event } from '../utils';
import { BsFillCheckSquareFill } from 'react-icons/bs';

const CalendarComp = () => {
  const [month, setMonth] = useState(new Date());

  return (
    <section className='flex flex-col md:flex-row max-w-5xl mx-auto justify-start items-center my-10'>
      <div className=' md:pl-5'>
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
            <div key={id} className=''>
              <ul className='px-8 '>
                {event.map((singleevent, index) => {
                  return (
                    <div
                      className='grid gap-5 items-center  grid-cols-10 '
                      key={index}
                    >
                      <BsFillCheckSquareFill className='text-xl' />
                      <li className='mb-4 col-span-9 '>{singleevent}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        }
      )}
    </section>
  );
};

export default CalendarComp;
