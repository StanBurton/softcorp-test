function renderNews(data) {
  const enter = document.querySelector(".news-block");
 
  const h1 = document.createElement("h1");
  h1.textContent = data.title;
  enter.appendChild(h1);

  if (data.img && data.img.length > 0 ) {
    const div = document.createElement("div");
    div.setAttribute("class", "img-block");
    [data.img].forEach(item => {
      const img = document.createElement("img");
      img.setAttribute("src", item);
      img.setAttribute("alt", "picture");
      div.appendChild(img);
    });

    enter.appendChild(div);
  }

  const p = document.createElement("p");
  p.setAttribute("class","lead news-description");
  p.textContent = data.description;
  enter.appendChild(p);
}

export default renderNews;
