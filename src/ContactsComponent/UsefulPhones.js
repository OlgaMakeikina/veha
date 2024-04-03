import React from 'react';
import phoneNumbers from './phoneNumbers';

function UsefulPhones() {
    return (
         <div>
           <h2 className="header_contact">Полезные телефоны</h2>
           <div className='cont_useful_phones'>
             {phoneNumbers.map(phoneNumber => (
               <div className='useful_phones' key={phoneNumber.id}>
                 <img src={phoneNumber.image} width="50px" height="50px" alt="phone number" />
                 <div>
                   <p className='text_contacts'>{phoneNumber.name}</p>
                   {phoneNumber.numbers.map((number, index) => (
                     <p key={index} className="text_contacts">
                       <a href={`tel:${number}`} className="phone_contacts">{number}</a>
                     </p>
                   ))}
                 </div>
               </div>
             ))}
           </div>
         </div>
       );
     }



export default UsefulPhones;