import React from 'react';

const HousesDataComponent = ({ housesData }) => {
    return (
        <div className='tarifs_data_cont_energy'> 
        <div className='tarifs_data_box_houses_headers' >
         <h3>№   п/п</h3>
         <h3>Адрес</h3>
         <div>
               <h3>Содержание ж/ф руб./кв.м.</h3> 
               <div className='period_tarifs'>
               <p>Тариф с 01.01.2024г.</p>
               <p>Тариф с 01.07.2024г.</p>      
               </div>
              
         </div>
     
        </div>                   
            {housesData.map((item) => (
                <div className='tarifs_data_box_energy' key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.address}</p>
                    <p>{item.tarif1}</p>
                    <p>{item.tarif2}</p>
                    </div>
            ))}
        </div>
    );
};

export default HousesDataComponent;