import React from 'react';

const ClassesScheduleCard = ({times, name}) => {
  return (
    <div id='class-card' className='relative bg-gray-200 shadow-lg text-slate-950 font-medium flex justify-center items-center p-3 w-48 hover:bg-gray-300 hover:cursor-default'>
      <p>{name}</p>
      <div id='hid-schedule' className='absolute overflow-hidden ease-out duration-500 top-full opacity-0 h-0 w-full'>
        <div className='bg-gradient-to-b from-gray-200 to-white text-slate-950 rounded-br-lg rounded-bl-lg p-3 text-sm flex gap-3'>
          <div className='flex flex-col items-end gap-2 font-bold'>
            <p>Mon:</p>
            <p>Tues:</p>
            <p>Wed:</p>
            <p>Thur:</p>
            <p>Fri:</p>
            <p>Sat:</p>
            <p>Sun:</p>
          </div>
          <div className='flex flex-col gap-2'>
            {times.map((time, index) => (
              <p key={index}>{time}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassesScheduleCard;