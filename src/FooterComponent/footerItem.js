import React from 'react';

const FooterItem = ({ item }) => {
  const renderContent = () => {
    switch (item.type) {
      case 'text':
        return (
            <div className="contact_footer">
               <img src={item.picture} width="25px" height="25px" alt=""/>
               <p className="span_footer">{item.text}</p>;
            </div>
            ) 
        
      case 'phone':
      case 'link':
        return (
            <div className="contact_footer">
              <img src={item.picture} width="25px" height="25px" alt="mail" />
              <a className="span_footer" href={item.link} target="_blank" rel="noopener noreferrer">
                {item.text}
              </a>
            </div>
          );
      case 'email':
        return (
        <div className="contact_footer">
           <img src={item.picture} width="25px" height="25px" alt="mail"/>
          <a className="span_footer" href={item.link}>{item.text}</a>  
        </div>
        )         
           
      default:
        return null;
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
};

export default FooterItem;