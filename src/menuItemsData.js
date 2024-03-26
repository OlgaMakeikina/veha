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
    ],
  },

  {
    title: "Жителям",
    submenu: [
      {
        title: "Для населения",
        url: "people",
        submenu: [
          {
            title: "Тарифы",
            url: "tarifs",
          },
        ],
      },



      {
        title: "Раскрытие информации",
        url: "web-dev",
        submenu: [
          {
            title: "Отчетность",
            url: "accounting",
          },
          {
            title: "Привлечение к ответственности",
            url: "responsibility",
          },
        ], // Закрытие submenu "Раскрытие информации"
      },
  {
    title: "Информация по объектам",
    url: "homeInformation",
    submenu: [
      {
        title: "Дома в управлении",
        url: "houses",
      },
      {
        title: "Договор управления",
        url: "contract",
      },
    ],
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