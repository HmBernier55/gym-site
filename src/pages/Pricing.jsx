import React from 'react';
import { FreePassForm, PageHeader, PriceCard } from '../components/index';

const Pricing = () => {
  return (
    <div>
      <PageHeader title='PRICING' />
      <div className=''>
        <div className='flex px-20 py-10 space-x-12'>
          <div className='bg-slate-900 shadow shadow-black w-1/2 border border-black px-8 py-16 space-y-9 rounded-3xl'>
            <p className='text-3xl font-extrabold text-lime-500 border-b pb-2'>Memberships</p>
            <p className='text-white font-medium leading-relaxed'>At Reflex Fitness, we understand that everyone has unique fitness goals, and our range of memberships is designed to cater to individual needs and preferences. Whether you're just starting your fitness journey or aiming for peak performance, our memberships offer a pathway to achieve your goals with added perks and benefits at each level.</p>
          </div>
          <div className='bg-slate-900 shadow shadow-black w-1/2 px-8 py-16 space-y-9 rounded-3xl'>
            <p className='text-3xl font-extrabold text-lime-500 border-b pb-2'>Free Pass</p>
            <FreePassForm />
          </div>
        </div>
        <div className='flex'>
          <PriceCard
            price='29'
            benefits={[
              'Access to state-of-the-art gym facilities',
              'Basic fitness assessments and goal-setting session',
              'Group fitness classes with experienced instructors',
              'General nutrition guidance'
            ]}
            name='STARTER'
          />
          <PriceCard
            price='49'
            benefits={[
              'All benefits of the Starter Membership',
              'Unlimited access to specialized fitness classes',
              'Bi-monthly personalized training session with a certified trainer',
              'Discounted rates on select Reflex Fitness events and workshops'
            ]}
            name='ESSENTIAL'
          />
          <PriceCard
            price='79'
            benefits={[
              'All benefits of the Essential Membership',
              'Weekly personalized training session with a certified trainer',
              'Full access to premium amenities',
              'Nutritional counseling and personalized meal planning',
              'Exclusive early access to new equipment and facilities'
            ]}
            name='PREMIUM'
          />
          <PriceCard
            price='99'
            benefits={[
              'All benefits of the Premium Membership',
              'Unlimited access to all group fitness classes and specialty workshops',
              'Priority scheduling for personal training sessions',
              'Complimentary guest passes for friends and family',
              'VIP invitations to exclusive events and member appreciation nights'
            ]}
            name='ULTIMATE'
          />
        </div>
      </div>
    </div>
  )
}

export default Pricing;