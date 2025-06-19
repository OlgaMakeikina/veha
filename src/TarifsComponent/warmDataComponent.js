import React from 'react';

const WarmDataComponent = ({ warmData }) => {
    return (
        <div className='tarifs_data_cont'> 
        <div className='tarifs_data_box_headers'>
         <h3>№п/п</h3>
         <h3>Наименование теплоснабжающих организаций</h3>
         <h3>Вид услуги</h3>
         <div>
             <h3>Тарифы на 2025г. (руб./Гкал) с учетом НДС 20%</h3> 
             <div className='period_tarifs'>
             <p>с 01.01.2025. по 30.06.2025г.</p>
             <p>с 01.07.2025г. по 31.12.2025г.</p>           
             </div>
         </div>
       
        </div>                   
       
            {warmData.map((item) => (
                <div className='tarifs_data_box' key={item.id}>
                <p>{item.id}</p>
                <p>{item.organisationName}</p>
                    <div>
                        {item.service.map((serviceItem, index) => (
                            <div className='service_tarifs' key={index}>
                                <p>{serviceItem.serviceType}</p>
                                <p>{serviceItem.prices22}</p>
                                <p>{serviceItem.prices23}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <p className='normativ'>*Распоряжение Комитета по ценам и тарифам МО от 27.12.2024г. №358-Р</p>
            <p className='normativ'>**Распоряжение Комитета по ценам и тарифам МО от 27.12.2024г. №362-Р</p>
        </div>
    );
};

export default WarmDataComponent;
