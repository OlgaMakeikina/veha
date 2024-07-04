import React from 'react';

const TboDataComponent = ({ tboData }) => {
    return (
        <div className='tarifs_data_cont_energy'> 
        <div className='tarifs_data_box_energy_headers' >
         <h3>№   п/п</h3>
         <h3>Наименование организации</h3>
         <h3>Един. измерения</h3>
         <div>
               <h3>Тарифы на 2024г.(с учетом НДС 20%)</h3> 
               <div className='period_tarifs'>
               <p>с 01.01.2024г. по 30.06.2024г.</p>
               <p>с 01.07.2024г. по 31.12.2024г.</p>      
               </div>
              
         </div>
     
        </div>                   
            {tboData.map((item) => (
                <div className='tarifs_data_box_energy' key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.companyName}</p>
                    <p>{item.measure}</p>
                    <p>{item.price1}</p>
                    <p>{item.price2}</p>
                    </div>
            ))}
           <p className='normativ'>Распоряжение Комитета по ценам и тарифам МО от 20.12.2023г. №299-Р</p>
        </div>
    );
};

export default TboDataComponent;