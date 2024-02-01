import React from 'react';
import { PageHeader, AmenitiesCard } from '../components/index';

const Amenities = () => {
  return (
    <div className='w-full'>
      <PageHeader title='AMENITIES' />
      <div className='flex flex-col items-center'>
        <h1 className='max-w-5xl text-center font-extrabold text-3xl pt-10 px-5'>Our cutting-edge amenities designed to elevate your cardio, sculpt your muscles, foster mindfulness, and promote relaxation.</h1>
        <div className='flex justify-center py-10'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
            <AmenitiesCard
              name='Cardio Zone'
              description='Elevate your cardiovascular fitness with our cutting-edge cardio zone, featuring top-of-the-line equipment such as treadmills, elliptical trainers, and stationary bikes. Enjoy a dynamic and energizing workout while monitoring your progress on modern displays, ensuring a motivating exercise experience for users of all fitness levels.'
              imageUrl='https://images.unsplash.com/photo-1638183395699-2c0db5b6afbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <AmenitiesCard
              name='Functional Training Area'
              description='Unleash your full potential in our functional training area, equipped with versatile tools like kettlebells, TRX suspension trainers, and medicine balls. This space is designed to enhance your strength, flexibility, and coordination through functional movements, providing a dynamic and engaging workout environment.'
              imageUrl='https://images.unsplash.com/photo-1632077804406-188472f1a810?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <AmenitiesCard
              name='Strength Training Zone'
              description="Sculpt and tone your muscles in our Reflexive Strength Training Zone, featuring a comprehensive selection of resistance machines and free weights. Whether you're a seasoned weightlifter or a beginner, our well-maintained equipment and expertly designed layout cater to all levels of strength training, promoting a safe and effective workout."
              imageUrl='https://images.unsplash.com/photo-1577992805669-c80be3285f36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <AmenitiesCard
              name='Mind-Body Studio'
              description='Nurture your mind and body in our dedicated Mind-Body Studio, designed for yoga and meditation enthusiasts. This tranquil space offers a serene atmosphere, providing the perfect setting for relaxation and mindfulness. Join our yoga classes or enjoy a peaceful meditation session to balance your physical and mental well-being.'
              imageUrl='https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <AmenitiesCard
              name='Hydrotherapy Spa and Sauna'
              description='Reward your body with post-workout rejuvenation in our Hydrotherapy Spa and Sauna area. Immerse yourself in the soothing warmth of our sauna, promoting muscle relaxation and detoxification. Alternatively, experience the invigorating benefits of hydrotherapy in our spa, designed to enhance recovery and overall well-being.'
              imageUrl='https://images.unsplash.com/photo-1583417657209-d3dd44dc9c09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <AmenitiesCard
              name='Nutrition Bar'
              description='Maximize your fitness journey with our Refuel and Recharge Nutrition Bar. This on-site amenity offers a variety of nourishing snacks, protein shakes, and hydration options to support your pre and post-workout needs. Our carefully curated selection ensures that you have access to quality nutritional options that complement your fitness goals.'
              imageUrl='https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Amenities;