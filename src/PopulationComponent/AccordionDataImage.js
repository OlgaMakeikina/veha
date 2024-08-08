import './accordion.css';
import gaz1 from './gaz1.jpg';
import gaz2 from './gaz2.jpg';
import otoplenie1 from './otoplenie1.jpg';
import otoplenie2 from './otoplenie2.jpg';
import platnye1 from './platnye1.jpg';
import platnye2 from './platnye2.jpg';

const AccordionDataImages = [
    { 
      title: 'График технического обслуживания газового оборудования',
      description: "График технического обслуживания газового оборудования",
      images: [
        { src: gaz1, alt: 'График обслуживания газового оборудования' },
        { src: gaz2, alt: 'График обслуживания газового оборудования' },
      ]
    },
    { 
      title: 'Платные услуги',
      description: "Платные услуги",
      images: [
        { src: platnye1, alt: 'Платные услуги' },
        { src: platnye2, alt: 'Платные услуги' },
      ]
    },
  ];
  
  export default AccordionDataImages;