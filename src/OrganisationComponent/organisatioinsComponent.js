import React from 'react';

const OrganisationsComponent = ({ organisationsData }) => {
  return (
    <div className='organisations'>
      {organisationsData.map(org => (
     
        <div className='organisation_container' key={org.id}>
          <p className='org_number'>{org.id}</p>
          <div className='organisation_box'>
          <h3>{org.companyName}</h3>
          <p><strong>Адрес:</strong> {org.address}</p>
          <p><strong>Контакты:</strong> {org.contacts}</p>
          <p><strong>Тип услуги:</strong> {org.serviceType}</p>
        </div>
        </div>
      ))}
    </div>
  );
};

export default OrganisationsComponent;