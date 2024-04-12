import { useState } from "react";

const AccordionHouses = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = index => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="">
            {data.map((item, index) => (
                <div key={index} className="accordion-item">
                    <div className="accordion-header_houses" onClick={() => handleClick(index)}>
                        {item.title}
                    </div>
                    {activeIndex === index && (
                        <div className="accordion-content">
                            <p>Год ввода в эксплуатацию: {item.year}</p>
                            <p>Этажность: {item.floor}</p>
                            <p>Количество квартир: {item.apartment}</p>
                            <p>Количество Л/С: {item.quantityLC}</p>
                            <p>Жилая S м.кв.: {item.livingArea}</p>
                            <p>Не жилые помещения S м. кв.: {item.notLivinigArea}</p>
                            <p>S м. кв., входящих в общее имущество дома: {item.commonProperty}</p>
                            <p>Серия, тип постройки: {item.type}</p>
                            <p>Уровень благоустройства: {item.level}</p>
                            <p>Инженерно-техническое обеспечение, входящие в состав общего имущества МКД: {item.technicalSupport}</p>
                            <button className="accordion_houses_btn" onClick={() => window.open(item.contractURL, '_blank', 'noopener noreferrer')}>Договор управления</button>
                            <button className="accordion_houses_btn" onClick={() => window.open(item.protocolURL, '_blank', 'noopener noreferrer')}>Протокол</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AccordionHouses;