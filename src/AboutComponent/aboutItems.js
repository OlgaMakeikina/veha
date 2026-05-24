import staffJpg from './staff.jpg';
import staffWebp from './staff.webp';
import staffAvif from './staff.avif';
import experienceJpg from './experience.jpg';
import experienceWebp from './experience.webp';
import experienceAvif from './experience.avif';
import clientsJpg from './clients.jpg';
import clientsWebp from './clients.webp';
import clientsAvif from './clients.avif';

const experience = { jpg: experienceJpg, webp: experienceWebp, avif: experienceAvif };
const clients = { jpg: clientsJpg, webp: clientsWebp, avif: clientsAvif };
const staff = { jpg: staffJpg, webp: staffWebp, avif: staffAvif };

export const aboutItems = [
  {
    picture: experience,
    slogan: "Опыт и профессионализм",
    textAbout: "За время деятельности с 2008г. компанией был накоплен значительный опыт проведения ремонтно-отделочных и монтажных работ любой сложности. Грамотный профессиональный подход, а также правильность и четкость действий всех специалистов компании позволяет нам выполнить работы на самом высоком уровне.",
    layout: "left",
  },
  {
    picture: clients,
    slogan: "Житель - наш приоритет!",
    textAbout: "Мы ориентированы на предоставление качественных услуг по обслуживанию, содержанию и ремонту многоквартирных домов. Мы стремимся работать эффективно и на предупреждение проблемных ситуаций. Житель всегда прав, рассчитывая на получение качественных услуг.",
    layout: "right",
  },
  {
    picture: staff,
    slogan: "Сотрудники - наша ценность!",
    textAbout: "ООО «Веха» - конкурентно способная компания, бережно относящаяся как к жителям, так и к собственным сотрудникам. Сотрудники компании являются профессионалами, имеющими большой опыт работы в сфере ЖКХ. Почти все из них работают с момента основания компании.",
    layout: "left",
  },
];