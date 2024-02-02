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
    <form className='flex flex-col gap-5 mt-5' onSubmit={handleSubmit}>
      <input
        className='border-2 border-white p-2 rounded-full bg-transparent text-white indent-5 hover:bg-slate-800'
        type="text"
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        className='border-2 border-white p-2 rounded-full bg-transparent text-white indent-5 hover:bg-slate-800'
        type="email"
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className='border-2 border-white p-2 rounded-full bg-transparent text-white indent-5 hover:bg-slate-800'
        type="tel"
        placeholder='Phone number'
        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <button type='submit' className='bg-lime-500 py-3.5 px-3 sm:px-8 rounded-full font-bold text-white tracking-wide hover:bg-lime-600'>Get A Free 3 Day Pass</button>
    </form>
  )
}

export default FreePassForm;