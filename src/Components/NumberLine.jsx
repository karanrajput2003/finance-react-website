import React from 'react'

const NumberLine = () => {
  return (
    <div className='number-container'>
      <div className='text-content'>
        <div className='steps'>
          <div className='number'>
            <div className='number-background'>1</div>
          </div>
          <div>
            <div className='step-name'>Sign Up</div>
            <div className='step-description'>
              Create your free account in minutes-no paperwork, no hassle. Create your free account in.
            </div>
          </div>
        </div>

        <div className='steps'>
          <div className='number'>
            <div className='number-background'>2</div>
          </div>
          <div>
            <div className='step-name'>Set your goals</div>
            <div className='step-description'>
              Tell us what you're working toward, and we'll help build a personalized plan that fits your lifestyle.
            </div>
          </div>
        </div>

        <div className='steps'>
          <div className='number'>
            <div className='number-background'>3</div>
          </div>
          <div>
            <div className='step-name'>Track your progress</div>
            <div className='step-description'>
              Get real-time updates, hit your milestones and stay motivated with smart insights and reminders.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NumberLine