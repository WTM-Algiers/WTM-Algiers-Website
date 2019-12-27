import React from 'react'
import './contactUs.css'
const contactUs = () => (
  <div className={'contact-form'}>
    <form
      name='contact-form'
      method='post'
      netlify-honeypot='bot-field'
      data-netlify='true'
    >
      <input type='hidden' name='form-name' value='contact' />
      <div className={'input-row'}>
        <input name='name' placeholder='Full Name' type='text' id='name' />
      </div>
      <div className={'input-row'}>
        <input name='email' placeholder='Email' type='email' id='email' />
      </div>

      <div className={'textarea-row'}>
        <textarea
          className={'textarea'}
          name='message'
          placeholder='Message ...'
          id='message'
        />
      </div>
      <div className={'button-row'}>
        <button type='submit' className={'submitButton'}>
          Send
        </button>
      </div>
    </form>
  </div>
)
export default contactUs
