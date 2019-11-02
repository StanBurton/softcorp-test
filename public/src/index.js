import renderNews from './news.js';
import renderNewsList from './newsList.js';

document.querySelector(".parse-app") ? renderNewsList(window.news) : renderNews(window.news);
