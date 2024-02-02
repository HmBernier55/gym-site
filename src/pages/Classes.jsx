import React from 'react';
import { PageHeader, ClassCard, ClassesScheduleCard } from '../components/index';
import { lunges, roomOfTreadmills, squatting, yogaClass, ropes, situps, stationaryBike } from '../assets/index';

const Classes = () => {
  return (
    <div>
      <PageHeader title='CLASSES' />
      <div className='flex flex-col lg:flex-row p-7 gap-10 bg-gray-200'>
        <div className='flex flex-col items-center justify-center gap-10 bg-white rounded-xl p-5 shadow shadow-lg'>
          <h1 className='font-extrabold text-3xl text-center'>Elevate Your Fitness Journey with Dynamic Workouts for All Levels!"</h1>
          <p className='text-center font-medium leading-relaxed'>Dive into a diverse fitness experience that goes beyond the ordinary. Our classes, led by passionate instructors, cater to all levels, from heart-pounding Cardio Blast to muscle-sculpting Strength Sculpt and rejuvenating Yoga Fusion. Check out our dynamic schedule below for an exciting fitness journey tailored to your goals. Unleash your potential, redefine your limits, and let the transformation begin at Reflex Fitness!</p>
          <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8'>
            <ClassesScheduleCard
              name='Cardio Blast'
              times={[
                '12:00PM - 1:00PM',
                '8:00AM - 9:00AM',
                '10:00AM - 11:00AM',
                '1:00PM - 2:00PM',
                '7:00AM - 8:00AM',
                '3:00PM - 4:00PM',
                '5:00PM - 6:00PM'
              ]}
            />
            <ClassesScheduleCard
              name='Strength Sculpt'
              times={[
                '10:00AM - 11:00AM',
                '1:00PM - 2:00PM',
                '12:00PM - 1:00PM',
                '5:00PM - 6:00PM',
                '9:00AM - 10:00AM',
                '11:00AM - 12:00PM',
                '8:00AM - 9:00AM'
              ]}
            />
            <ClassesScheduleCard
              name='Yoga Fusion'
              times={[
                '8:00AM - 9:00AM',
                '12:00PM - 1:00PM',
                '5:00PM - 6:00PM',
                '10:00AM - 11:00AM',
                '1:00PM - 2:00PM',
                '9:00AM - 10:00AM',
                '3:00PM - 4:00PM'
              ]}
            />
            <ClassesScheduleCard
              name='HIIT Ignition'
              times={[
                '9:00AM - 10:00AM',
                '5:00PM - 6:00PM',
                '7:00AM - 8:00AM',
                '3:00PM - 4:00PM',
                '8:00AM - 9:00AM',
                '1:00PM - 2:00PM',
                '10:00AM - 11:00AM'
              ]}
            />
            <ClassesScheduleCard
              name='Core Crusher'
              times={[
                '1:00PM - 2:00PM',
                '10:00AM - 11:00AM',
                '3:00PM - 4:00PM',
                '7:00AM - 8:00AM',
                '12:00PM - 1:00PM',
                '2:00PM - 3:00PM',
                '9:00AM - 10:00AM'
              ]}
            />
            <ClassesScheduleCard
              name='Spin Intensity'
              times={[
                '3:00PM - 4:00PM',
                '9:00AM - 10:00AM',
                '1:00PM - 2:00PM',
                '11:00AM - 12:00PM',
                '10:00AM - 11:00AM',
                '8:00AM - 9:00AM',
                '12:00PM - 1:00PM'
              ]}
            />
          </div>
        </div>
        <img className='w-full lg:w-1/2 rounded-xl object-cover' src={lunges} alt="gym class" />
      </div>
      <div className='flex flex-col items-center gap-10 py-10'>
        <ClassCard
          imageUrl={roomOfTreadmills}
          name='Cardio Blast'
          description='A high-energy class focused on cardiovascular endurance and fat burning. Incorporates dynamic movements, interval training, and upbeat music to keep you motivated.'
        />
        <ClassCard
          imageUrl={squatting}
          name='Strength Sculpt'
          description='This class is designed to build lean muscle and enhance overall strength. It includes a mix of weightlifting, bodyweight exercises, and targeted resistance training to sculpt and tone your body.'
        />
        <ClassCard
          imageUrl={yogaClass}
          name='Yoga Fusion'
          description='A harmonious blend of traditional yoga poses and dynamic movements to improve flexibility, balance, and mindfulness. Suitable for all fitness levels, promoting relaxation and strength.'
        />
        <ClassCard
          imageUrl={ropes}
          name='HIIT Ignition'
          description='High-Intensity Interval Training (HIIT) class to maximize calorie burn and boost metabolism. Short bursts of intense exercises followed by brief rest periods for a powerful, efficient workout.'
        />
        <ClassCard
          imageUrl={situps}
          name='Core Crusher'
          description='Target and strengthen your core muscles with a variety of abdominal exercises and stability drills. Improve posture, enhance balance, and achieve a strong, toned midsection.'
        />
        <ClassCard
          imageUrl={stationaryBike}
          name='Spin Intensity'
          description='A dynamic cycling class led by expert instructors, blending invigorating sprints and challenging terrains for a high-energy, full-body workout that boosts endurance and torches calories.'
        />
      </div>
    </div>
  )
}

export default Classes;