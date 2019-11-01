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

function renderElements(data) {
  const enter = document.querySelector(".news-block");

  const h1 = document.createElement("h1");
  h1.textContent = data.title;
  enter.appendChild(h1);

  if (data.img && data.img.length > 0 ) {
    const div = document.createElement("div");
    div.setAttribute("class", "img-block");

    data.img.forEach(item => {
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

renderElements(data[1]);
