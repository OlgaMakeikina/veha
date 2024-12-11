import Home from './home.png';
import Call from './call.png';
import Location from './location.png';
import Mail from './mail.png';
import Telegram from './telegram.png';
import VK from './vk.png';

export const FooterData = [
    {
      type: 'text',
      picture: Home,
      text: 'ООО ВЕХА'
    },
    {
      type: 'text',
      picture: Location,
      text: 'ул. Ленина, д. 4, п. Софрино, Пушкинский р-он., Московская обл., 141270'
    },
    {
      type: 'phone',
      picture: Call,
      text: '8-800-550-14-12',
      link: 'tel:88005501412'
    },
    {
      type: 'phone',
      picture: Call,
      text: '+7 (915) 068 15 45',
      link: 'tel:+79150681545'
    },
    {
      type: 'email',
      picture: Mail,
      text: 'vexa2008@mail.ru',
      link: 'mailto:vexa2008@mail.ru'
    },
    {
      type: 'link',
      picture: Telegram,
      text: 'Наш Telegram',
      link: 'https://t.me/veha_sofrino'
    },
    {
      type: 'link',
      picture: VK,
      text: 'Мы в ВКонтакте',
      link: 'https://vk.com/ooovexa'
    }
  ]