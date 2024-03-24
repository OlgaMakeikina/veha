import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import message from './send_message.png';

function ContactForm() {
  const [state, handleSubmit] = useForm("mayrdlyq");
  if (state.succeeded) {
      return <p className='after_sending'>Спасибо! Ваш запрос отправлен!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <div className='form_name'>
        <img src={message} width="75px" height="75px" alt="message" />
        <h3 className="heading_contacts">Связь с нами</h3>     
        </div>

        <input
          id="name"
          type="text" 
          name="name"
          placeholder='Имя'
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        /> 
        <input
          id="email"
          type="email" 
          name="email"
          placeholder='E-mail'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
          placeholder='Сообщение'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button className='contact_btn' type="submit" disabled={state.submitting}>
          ОТПРАВИТЬ
        </button>
      </form>
  );
}
export default ContactForm;

