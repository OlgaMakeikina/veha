import React, { useState, useEffect, useRef } from 'react';
import down from './down.png';
import right from './right.png';

const HousesDataTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(-1);
  const [buttonStates, setButtonStates] = useState(data.map(() => false));
  const tabsRef = useRef(null);

  const handleTabClick = (index) => {
    setActiveTab(activeTab === index ? -1 : index);
    const newButtonStates = buttonStates.map((state, i) => i === index ? !state : false);
    setButtonStates(newButtonStates);
  };

  const handleClickOutside = (event) => {
    if (tabsRef.current && !tabsRef.current.contains(event.target)) {
      setActiveTab(-1);
      setButtonStates(buttonStates.map(() => false));
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={tabsRef}>
      <div className="tabs">
        {data.map((item, index) => (
          <div className='tabs_starter' key={index}>
            <p>{item.title}</p>
            <button
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => handleTabClick(index)}
            style={{ width: `30px`, height: `30px` }} 
          >
            <img src={buttonStates[index] ? down : right} width="30px" alt="toggle" />
          </button>
          </div>
        ))}
      </div>
      <div className="tab-content">
        {data.map((item, index) => (
          <div key={index} className={activeTab === index ? 'tab-pane active' : 'tab-pane'}>
            <div className='tab-pane-table'>
                <p className='first_column'>Год ввода в эксплуатацию: </p>
                <p>{item.year}</p> 
            </div>
           <div className='tab-pane-table'>
            <p className='first_column'>Этажность:</p>
            <p>{item.floor}</p>
            </div>
            <div className='tab-pane-table'>
                <p className='first_column'>Количество квартир:</p>
                 <p> {item.apartment}</p>
            </div>
            <div className='tab-pane-table'>
                <p className='first_column'>Количество Л/С:</p>
                 <p> {item.quantityLC}</p>
            </div>
            <div className='tab-pane-table'>
                <p className='first_column'>Жилая S м.кв.: </p>
                <p>{item.livingArea}</p>
            </div>
            <div className='tab-pane-table'>
                <p className='first_column'>Не жилые помещения S м. кв.:</p>
                <p>{item.notLivinigArea}</p>
            </div>
            <div className='tab-pane-table'>
                <p className='first_column'>S м. кв., входящих в общее имущество дома:</p>
                <p>{item.commonProperty}</p>
            </div>
            <div className='tab-pane-table'>
                <p className='first_column'>Серия, тип постройки:</p>
                <p>{item.type}</p>
            </div>
            <div className='tab-pane-table'>
                <p className='first_column'>Уровень благоустройства:</p>
                <p>{item.level}</p>
            </div>        
            <div className='tab-pane-table'>
                <p className='first_column'>Инженерно-техническое обеспечение, входящие в состав общего имущества МКД:</p>
                <p>{item.technicalSupport}</p>
            </div>
            <button className='tabs_houses_btn' onClick={() => window.open(item.contractURL)}>Договор управления</button>
            <button className='tabs_houses_btn' onClick={() => window.open(item.protocolURL)}>Протокол</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HousesDataTabs;


