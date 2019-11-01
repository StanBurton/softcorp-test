import renderNews from './news.js';
import renderNewsList from './newsList.js';

const data = [
  {
    id: 0,
    title: "Pizda",
    description:
      "ochen silno ne ponaytno,ochen silno ne ponaytno,ochen silno ne ponavno ne ponaytno",
    img: null,
    src: "#",
  },
  {
    id: 1,
    title: "Zhopa",
    description:
      "ya ebaliya ebal  menya sosaliya ebal  menya sosalial  menya sosali,ya ebal  menya sa sosaliya ebal  menya sosalial  menya sosali,ya ebal  mena sosaliya ebal  menya sosalial  menya sosali,ya ebal  menosaliya ebal  menya sosaliya ebal  menya sosali aliya ebal  menya sosaliya ebal  menya sosali aliya ebal  menyaliya ebal  menya sosaliya ebal  menya sosalia sosaliya ebal  menya sosali",
    img: [
      "https://sun9-17.userapi.com/c830608/v830608487/14abb8/9y2ScbHQFBA.jpg",
      "https://sun9-31.userapi.com/c639819/v639819588/3e6cb/f6biPZf9-Hk.jpg",
    ],
    src: "#",
  },
];


document.querySelector(".parse-app") ? renderNewsList(data) : renderNews(data[0]);

