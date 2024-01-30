import React from 'react';
import { PageHeader } from '../components/index';
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  return (
    <div>
      <PageHeader title='ABOUT US' />
      <div className='flex flex-col'>
        <div className='flex flex-col space-y-2 border-b-2 px-20 py-10'>
          <p className='text-2xl font-extrabold text-lime-500'>Welcome to Reflex Fitness</p>
          <p className='font-medium text-slate-950'>Where your journey to a healthier, stronger, and more vibrant you begins. At Reflex Fitness, we believe in the transformative power of fitness, and we are dedicated to providing a dynamic and supportive environment for individuals of all fitness levels. Founded on the principle that fitness is not just a routine, but a lifestyle. Reflex Fitness was born out of a passion for helping people achieve their health and wellness goals. Whether you're a seasoned athlete or taking your first steps into the world of fitness, we're here to guide, motivate, and celebrate every step of your journey.</p>
        </div>
        <div className='flex flex-col space-y-2 px-20 border-b-2 py-10'>
          <p className='text-2xl font-extrabold text-lime-500'>What Sets Us Apart</p>
          <ol className='font-medium space-y-3'>
            <li><span className='text-xl font-bold underline'>Expertise:</span> Our team of certified trainers and fitness professionals bring a wealth of knowledge and experience to the gym floor. From personalized workout plans to expert advice on nutrition, we're committed to helping you reach your full potential.</li>
            <li><span className='text-xl font-bold underline'>State-of-the-Art Facilities:</span> Reflex Fitness is equipped with cutting-edge equipment designed to cater to a diverse range of fitness needs. Whether you're into strength training, cardio, or group classes, our facilities are designed to enhance your workout experience.</li>
            <li><span className='text-xl font-bold underline'>Community Spirit:</span> At Reflex Fitness, we believe in the power of community. Our gym is more than just a place to work out – it's a hub of like-minded individuals supporting each other on their fitness journeys. Join group classes, engage in friendly competitions, and build connections that go beyond the gym walls.</li>
            <li><span className='text-xl font-bold underline'>Personalized Approach:</span> We understand that everyone is unique, and so are their fitness goals. Our trainers work with you to create personalized fitness plans tailored to your individual needs, ensuring you get the most out of every workout.</li>
            <li><span className='text-xl font-bold underline'>Holistic Wellness:</span> Fitness is not just about what happens in the gym; it's a holistic journey encompassing mind, body, and spirit. Reflex Fitness is committed to promoting overall wellness, offering resources and support for mental health, stress management, and nutritional guidance.</li>
          </ol>
        </div>
        <div className='flex flex-col px-20 py-20 items-center'>
          <div className='flex flex-col max-w-2xl items-center space-y-6 bg-slate-900 p-5 text-white rounded-xl'>
            <p className='font-bold text-3xl text-lime-500'>Join us:</p>
            <p className='text-center font-medium'>Whether you're looking to build strength, boost your endurance, or simply improve your overall well-being, Reflex Fitness is the place for you. Come join our vibrant community, break barriers, and discover the best version of yourself.</p>
            <button className='bg-lime-500 py-3.5 px-8 rounded-full font-bold text-white tracking-wide hover:bg-lime-600' onClick={() => navigate('/pricing')}>View Memberships</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;