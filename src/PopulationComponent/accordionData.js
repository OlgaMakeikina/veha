import './accordion.css';

const AccordionPanels = [
    { title: 'План-график готовности жилищного фонда к эксплуатации в отопительный период', content: 
    (
        <div>
          <p className='accordion_text'>План-график в отопительный период 2023/24гг.</p>
          <button className="accordion_btn">Ознакомиться</button>
        </div>
      )
    },


    { title: 'Панель 2', content: <button>Кнопка в панели 2</button> },
    { title: 'Панель 3', content: <img src="example.jpg" alt="Изображение в панели 3" /> },
    { 
      title: 'Панель 4', 
      content: (
        <div>
          <p>Текст в панели 4</p>
          <button className="accordion_btn">Ознакомиться</button>
        </div>
      )
    },
  ];
  
  export default AccordionPanels;