export const menuItemsData = [
  {
    title: "Главная",
    url: "/",
  },

  {
    title: "О компании",
    submenu: [
      {
        title: "О компании",
        url: "aboutCompany",
      },

      {
        title: "Учредительные документы и свидетельства",
        url: "documents",
      },
      {
        title: "Отчетность",
        url: "accounting",
      },
      {
        title: "Платежные реквизиты",
        url: "documents",
      },
    ],
  },

  {
    title: "Жителям",
    submenu: [
      {
        title: "Информация для населения",
        submenu: [
          {
            title: "График готовности к отопительному периоду",
            url: "people",
          },
          {
            title: "График ремонта и обслуживания котельных",
            url: "people",
          },
          {
            title: "План текущего ремонта",
            url: "people",
          },
          {
            title: "График технического обслуживания газового оборудования",
            url: "people",
          },
          {
            title: "График испытания систем отопления",
            url: "people",
          },
          {
            title: "Платные услуги",
            url: "people",
          },
          {
            title: "Собрания собственников",
            url: "meeting",
          },
        ],
      },



      {
        title: "Раскрытие информации",
        submenu: [
          {
            title: "Привлечение к ответственности",
            url: "responsibility",
          },
        ], 
      },

  {
    title: "Информация по объектам",
    submenu: [
      {
        title: "Дома в управлении и договора",
        url: "houses",
      },
    ],
  },

  {
    title: "Тарифы на ЖКХ",
    url: "tarifs",
  },

  {
    title: "Ресурсоснабжающие органихации",
    url: "organisations",
  },

    ], // Закрытие submenu "Жителям"
  },




  {
    title: "Новости",
    url: "/news",
  },

  {
    title: "Контакты",
    url: "/contact",
  },
];