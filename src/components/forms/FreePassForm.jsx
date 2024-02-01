import React, { useState } from 'react';

const FreePassForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setPhone('');
  }

  return (
    <form className='flex flex-col space-y-5' onSubmit={handleSubmit}>
      <input
        className='border-2 border-white p-2 rounded-full bg-transparent text-white indent-5 hover:bg-slate-800'
        type="text"
        placeholder='Enter your name'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        className='border-2 border-white p-2 rounded-full bg-transparent text-white indent-5 hover:bg-slate-800'
        type="email"
        placeholder='Enter your email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className='border-2 border-white p-2 rounded-full bg-transparent text-white indent-5 hover:bg-slate-800'
        type="tel"
        placeholder='Enter your phone number'
        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <button type='submit' className='bg-lime-500 py-3.5 px-8 rounded-full font-bold text-white tracking-wide hover:bg-lime-600'>Get A Free 3 Day Pass</button>
    </form>
  )
}

export default FreePassForm;