import React from 'react';

const EnergyDataComponent = ({ energyData }) => {
    return (
        <div className='tarifs_data_cont_energy'> 
        <div className='tarifs_data_box_energy_headers' >
         <h3>№   п/п</h3>
         <h3>Группа потребителей</h3>
         <h3>Един. измерения</h3>
         <div>
               <h3>Тарифы на 2022-2023 г. с учетом НДС-20%</h3> 
               <div className='period_tarifs'>
                 <p>с 01.07.2022 г. по 30.11.2022 г.</p>
                 <p>с 01.12.2022 г. по 31.12.2023 г.</p>
               </div>
              
         </div>
     
        </div>                   
            {energyData.map((item) => (
                <div className='tarifs_data_box_energy' key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.group}</p>
                    <p>{item.measure}</p>
                    <p>{item.price1}</p>
                    <p>{item.price2}</p>
                    </div>
            ))}
                       <p className='normativ'>Распоряжение Комитета по ценам и тарифам МО от 20.11.2022г. №213-Р</p>
        </div>
    );
};

export default EnergyDataComponent;