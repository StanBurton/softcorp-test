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
    img: null,
    src: "#",
  },
];

for (let i = 0; i < 10; i++) {
  data.push(data[0]);
}

function renderElements(data) {
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

renderElements(data);
