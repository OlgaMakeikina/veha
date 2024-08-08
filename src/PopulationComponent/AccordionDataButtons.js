import './accordion.css';

const AccordionDataButtons = [
    { 
      title: 'План-график готовности жилищного фонда к эксплуатации в отопительный период',
      description: "План-график готовности жилищного фонда к эксплуатации в отопительный период",
      buttons: [
        { title: '2024г.', document: 'plan_otopl_2024.pdf' },
        { title: '2023/2024г.', document: 'plan_otopl_2023-2024.pdf' },
        { title: '2022/2023г.', document: 'plan_otopl_2022-2023.pdf' },
        { title: '2020/2021г.', document: 'plan_otopl_2020-2021.pdf' }
      ]
    },
    {
      title: 'График планового профилактического ремонта и обслуживания котельных городского округа Пушкинский Московской области при подготовке к осенне-зимнему периоду',
      description: "График планового профилактического ремонта и обслуживания котельных",
      buttons: [
        { title: '2023/2024г.', document: 'grafik_ppr_2023.pdf' },
        { title: '2019/2020г.', document: 'grafik_ppr_2019.pdf' }
      ]
    },
    { 
      title: 'План текущего ремонта',
      description: "План текущего ремонта",
      buttons: [
        { title: '2024/ 2025г.', document: 'Plan_2024-2025.xlsx' },
        { title: '2023г.', document: 'Plan_2023.zip' }
      ]
    },
    { 
      title: 'График гидравлического испытания систем отопления',
      description: "График гидравлического испытания систем отопления",
      buttons: [
        { title: '2024г.', document: 'gidravlicheskiye_ispytaniya.xlsx' },
      ]
    },
  ];
  
  export default AccordionDataButtons;