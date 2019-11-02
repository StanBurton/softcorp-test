function renderNewsList(data) {
    const enter = document.querySelector(".parse-app");
  
    const ul = document.createElement("ul");
    ul.setAttribute("class", "list-group");
    enter.appendChild(ul);
  
    data.forEach(item => {
      const li = document.createElement("li");
      li.setAttribute("class", "list-group-item");
  
      //title
      const h3 = document.createElement("h3");
      h3.setAttribute("class", "news-title");
      h3.textContent = item.title;
      li.appendChild(h3);
  
      //description
      const p = document.createElement("p");
      p.setAttribute("class", "lead news-description");
      p.textContent =
        item.description.length > 200
          ? item.description.substring(0, 200) + "..."
          : item.description;
      li.appendChild(p);
  
      //button
      const div = document.createElement("div");
      div.setAttribute("class", "btn-block");
  
      const a = document.createElement("a");
      a.setAttribute("role", "button");
      a.setAttribute("href", `./news/${item.id}`);
      a.setAttribute("class", "btn btn-outline-success float-right");
      a.textContent = "Подробнее";
  
      div.appendChild(a);
      li.appendChild(div);
  
      ul.appendChild(li);
    });
  }

  export default renderNewsList;