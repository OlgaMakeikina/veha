import React from 'react';

const GazDataComponent = ({ gazData }) => {
    return (
        <div className='tarifs_data_cont_gaz'> 
        <div className='tarifs_data_box_gaz' >
         <h3>№   п/п</h3>
         <h3>Группа потребителей</h3>
         <h3>Един. измерения</h3>
         <h3>Цена (с учетом НДС) с 01.12.2022 г.</h3>
        </div>                   
            {gazData.map((item) => (
                <div className='tarifs_data_box_gaz' key={item.id}>
                 
                    <p>{item.id}</p>
                    <p>{item.group}</p>
                    <p>{item.measure}</p>
                    <p>{item.price}</p>
                    </div>
            ))}
            <p className='normativ'>Распоряжение Комитета по ценам и тарифам МО от 18.11.2022г. №193-Р</p>
        </div>
    );
};

export default GazDataComponent;