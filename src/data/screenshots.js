import sportsImg from '../assets/images/news-sports.png';
import gptImg from '../assets/images/news-gpt.png';
import delhiImg from '../assets/images/news-delhi.png';
import scienceImg from '../assets/images/news-science.png';
import startupImg from '../assets/images/news-startup.png';

export const SCREENSHOTS = [
  {
    id: 'sports',
    image: sportsImg.src || sportsImg,
    alt: 'Real SAHAYY screen showing a sports news brief and topic filters',
    title: 'Follow what you love',
    subtitle: 'Cricket, sports updates, and the moments that matter.',
    label: 'Sports & updates',
    actionLabel: 'Show sports news screen',
  },
  {
    id: 'ai',
    image: gptImg.src || gptImg,
    alt: 'Real SAHAYY screen showing frontier AI research news about OpenAI and Anthropic models',
    title: 'Frontier AI & tech',
    subtitle: 'Breakthrough research and technological shifts, unpacked.',
    label: 'AI & technology',
    actionLabel: 'Show AI and technology news screen',
  },
  {
    id: 'delhi',
    image: delhiImg.src || delhiImg,
    alt: 'Real SAHAYY screen showing Delhi city news and metro updates',
    title: 'Keep an eye on your city',
    subtitle: 'Local reports and city headlines alongside national news.',
    label: 'Local news, in context',
    actionLabel: 'Show local news screen',
  },
  {
    id: 'science',
    image: scienceImg.src || scienceImg,
    alt: 'Real SAHAYY screen showing government science policy and research draft rules',
    title: 'Science & regulation',
    subtitle: 'Key research rules and policy developments, simplified.',
    label: 'Science & policy',
    actionLabel: 'Show science news screen',
  },
  {
    id: 'startups',
    image: startupImg.src || startupImg,
    alt: 'Real SAHAYY screen showing deep-tech startup news on fusion energy development',
    title: 'Startups & deep tech',
    subtitle: 'Venture funding, breakthrough hardware, and founder stories.',
    label: 'Startups & innovation',
    actionLabel: 'Show startups news screen',
  },
];
