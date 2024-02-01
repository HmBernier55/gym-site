import React, { useState } from 'react';

const ContactForm = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  }
  return (
    <form onSubmit={handleSubmit} className='lg:w-1/2 mx-5 mb-10 rounded-3xl flex flex-col bg-slate-900 px-10 py-10 gap-10'>
      <div className='flex flex-col gap-3'>
        <label htmlFor='firstName' className='text-lime-500 text-xl font-bold'>First Name</label>
        <input
          id='firstName'
          type="text"
          className='border border-black p-3 rounded-xl'
          placeholder='First Name'
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <label htmlFor='lastName' className='text-lime-500 text-xl font-bold'>Last Name</label>
        <input
          id='lastName'
          type="text"
          className='border border-black p-3 rounded-xl'
          placeholder='Last Name'
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className='flex flex-col gap-3'>
      <label htmlFor='email' className='text-lime-500 text-xl font-bold'>Email</label>
        <input
          id='email'
          type="email"
          className='border border-black p-3 rounded-xl'
          placeholder='Email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <label htmlFor='phone' className='text-lime-500 text-xl font-bold'>Phone</label>
        <input
          id='phone'
          type="tel"
          className='border border-black p-3 rounded-xl'
          placeholder='Phone Number'
          required
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <label htmlFor='subject' className='text-lime-500 text-xl font-bold'>Subject</label>
        <input
          id='subject'
          type="text"
          className='border border-black p-3 rounded-xl'
          placeholder='Subject'
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <label htmlFor='message' className='text-lime-500 text-xl font-bold'>Message</label>
        <textarea
          id='message'
          className='border border-black p-3 rounded-xl'
          placeholder='Message'
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows='5'
          cols='50'
        >
        </textarea>
      </div>
      <button type='submit' className='bg-lime-500 py-3.5 px-8 rounded-full font-bold text-white tracking-wide hover:bg-lime-600'>Send Message</button>
    </form>
  )
}

export default ContactForm;