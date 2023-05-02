import React from 'react';

const Timeline = ({ events }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="border-l-2 border-gray-500 h-full absolute left-1/2"></div>
      {events.map((event, index) => (
        <div
          key={index}
          className="flex items-center mb-8 mt-4"
          style={{ transform: 'translateX(-50%)' }}
        >
          <div className="flex items-center justify-center w-10 h-10 bg-gray-500 text-white font-bold rounded-full">
            {index + 1}
          </div>
          <div className="ml-4">
            <p className="text-gray-800 font-semibold">{event.title}</p>
            <p className="text-gray-600">{event.date}</p>
            <p className="text-gray-700">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
