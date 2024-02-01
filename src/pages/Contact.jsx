import React from 'react';
import { ContactForm, PageHeader } from '../components/index';

const Contact = () => {
  return (
    <div>
      <PageHeader title='CONTACT US' />
      <div className='flex flex-col items-center gap-10'>
        <h3 className='pt-10 max-w-5xl text-center font-extrabold text-3xl'>At Reflex Fitness, we're here for you – feel free to reach out at any time through our contact channels, as we're dedicated to supporting your fitness journey.</h3>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact;