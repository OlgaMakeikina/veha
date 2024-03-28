import React, { useState } from 'react';
import './requisitesButton.css';
import Requisites from './Requisites';

function RequisitesButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='cont_payment'>
      <div className='cont_payment_header'>
        <div>
        <h3 className='payment_header'>Платежные реквизиты</h3> 
        <p>Актуальные платежные реквизиты организации</p> 
        </div>
        <button className='payment_btn' onClick={toggleDiv}>
          {isVisible ? (
            <>
              Закрыть <span>&#9650;</span>
            </>
          ) : (
            <>
              Открыть <span>&#9660;</span>
            </>
          )}
        </button>
      </div>
       
      {isVisible && <Requisites />}
    </div>
  );
}

export default RequisitesButton;
