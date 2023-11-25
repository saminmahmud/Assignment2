// all buttons show

const autodata = () => {
    fetch("https://openapi.programming-hero.com/api/videos/categories")
  .then((res) => res.json())
  .then((data) => displayCategories(data.data));
};
fetch("https://openapi.programming-hero.com/api/videos/categories")
  .then((res) => res.json())
  .then((data) => displayCategories(data.data));


const displayCategories = (data) => {
  const categoriContainer = document.getElementById("categori_container");
  data.forEach((item) => {
    const button_section = document.createElement("div");
    button_section.classList.add("btn-section");
    button_section.innerHTML = `
            <button type="button" onclick="display_btn('${item.category_id}')" class="buttonn btn btn-secondary">${item.category}</button>
        `;
    categoriContainer.appendChild(button_section);
    
  });
  display_btn();
};
// click korlei buttone kaz soro
const display_btn = async (id) => {
  try {
    id = id || "1000";
    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${id}`
    );
    const data = await res.json();
    display_item(data.data);
    abarpatha= ()=>{
      sortkor(data.data);
    };
    
  } catch {
    (err) => console.log(err);
  }
};

// const senddata = (item) => {
//   // console.log("ami senddata r id: ",item);
//     return item;
// }
// function theid(){
//     return item;
//   }
const display_item = (item) => {

  console.log(item);document.getElementById("listcontainer").innerHTML ="";
  document.getElementById("nullcontainer").innerHTML ="";
  if(item.length > 0) {

  
  const listContainer = document.getElementById("listcontainer"); //maincontainer
  item.forEach((data) => {
    console.log(data);
    const Thambnaill = data.thumbnail;
    const Datee = data.others.posted_date;
    const Profilepic = data.authors[0].profile_picture;
    const Titlevideo = data.title;
    const Profilenam = data.authors[0].profile_name;
    const Varifyis = data.authors[0].verified;
    const Viewss = data.others.views;

    // Assuming you have variables containing the data as mentioned earlier

    const card = document.createElement("div");
    card.classList.add("card");

    const first = document.createElement("div");
    first.classList.add("first");
    
    const thambimg = document.createElement("div");
    thambimg.classList.add("thambimg");
    let htmlcode1 = `
        <img class="card_img" src="${Thambnaill}" alt="">
    `;
    thambimg.innerHTML = htmlcode1;
    first.appendChild(thambimg);
    if(Datee){
        const seconds = parseInt(Datee);
        const formattedTime = formatTimeFromSeconds(seconds);
        // console.log(formattedTime);

        let htmlcode2 = `<p id="date">${formattedTime}</p>`;
        first.innerHTML += htmlcode2;
    }
    card.appendChild(first);

    const second = document.createElement("div");
    second.classList.add("second");
    const third = document.createElement("div");
    third.classList.add("third");
    const forth = document.createElement("div");
    forth.classList.add("forth");
    const verifys = document.createElement("div");
    verifys.classList.add("verifys");

    if(data.authors[0].verified){
        let htmlcode3 = `<img class="card_vimg" src="fi_10629607.png" alt="">`;
        verifys.innerHTML = htmlcode3;
    }
    let htmlcode4 = `<p>${data.authors[0].profile_name}</p>`;
    forth.innerHTML = htmlcode4;
    if (verifys.innerHTML) {
        forth.appendChild(verifys);
    }

    let htmlcode5 = `<h5>${data.title}</h5>`;
    third.innerHTML = htmlcode5;
    third.appendChild(forth);
    let htmlcode6 = `<p>${data.others.views} views</p>`;
    third.innerHTML += htmlcode6;

    let htmlcode7 = `<img class="card_pimg" src=${data.authors[0].profile_picture} alt="">`;
    second.innerHTML = htmlcode7;
    second.appendChild(third);
    card.appendChild(first);
    card.appendChild(second);
    listContainer.appendChild(card);
  
/**/ 

    /*
            const card = document.createElement("div");
            card.classList.add("box");
            card.innerHTML = `
            <div id="first">
                <div id="thambimg"></div>
                <p id="date"></p>
            </div>
  
            <div id="second" class="card-body">
                <img src="" alt="">
                <div id="third">
                    <h2 id="title"></h2>
                    <div id="forth">
                        <p id="profile_name"></p>
                    <div id="verify"></div>
                    </div>
                    <p class="card-text">nhjk</p>
                </div>
            </div>
            `;
            */

    // *******************************************************
    // let htmlcode1 = `
    //     <img class="card_img" src=${data.thumbnail} alt="">
    // `;
    // document.getElementById("thambimg").innerHTML = htmlcode1 ;

    // if(data.others.posted_date){
    //     document.getElementById("date").innerText = data.others.posted_date;
    // }

    // const card = document.createElement("div"); //card
    // card.classList.add("box");
    // const cardchild1 = document.createElement("div"); //thamb and date
    // cardchild1.classList.add("box1");
    // const cardchild2 = document.createElement("div"); // thamb and date+others
    // cardchild2.classList.add("box2");
    // const cardchild3 = document.createElement("div"); // profile pic + others
    // cardchild3.classList.add("box3");
    // const cardchild4 = document.createElement("div"); // name+other+view
    // cardchild4.classList.add("box4");
    // // const cardchild5 = document.createElement("div"); // profilename+ varify
    // // cardchild5.classList.add("box5");

    // // thamb + date
    // let htmlcode1 = `
    //     <img class="card_img" src=${data.thumbnail} alt="">
    // `;
    // if(data.others.posted_date){
    //     htmlcode1 += `<p class="dateago">${data.others.posted_date}</p>`;
    // }
    // cardchild1.innerHTML = htmlcode1;

    // // profile name + varify
    // let htmlcode3 =`
    //     <p>${data.authors[0].profile_name}</p>
    // `;
    // if(data.authors[0].verified){
    //     htmlcode3 += `<img class="card_vimg" src="fi_10629607.png" alt="">`;
    // }
    // cardchild2.innerHTML = htmlcode3;

    // // taitle + child2 + verify
    // let htmlcode4 =`
    //     <h1>${data.title}</h1>
    // `;
    // cardchild3.innerHTML(htmlcode4);
    // cardchild3.innerHTML(cardchild2);
    // htmlcode4 += `
    //     <p>${data.others.views}</p>
    // `;
    // cardchild3.innerHTML(htmlcode4);

    // //profile pic + child3
    // let htmlcode2 = `
    //     <img class="card_pimg" src=${data.authors[0].profile_picture} alt="">
    // `;
    // cardchild4.innerHTML(htmlcode2);
    // cardchild4.innerHTML(cardchild3);

    // //child1 +child4
    // card.appendChild(cardchild1);
    // card.appendChild(cardchild4);
    // //chard add listcontainer
    // listContainer.appendChild(card);

    // cardchild1.innerHTML = `
    //     <img class="card_img" src=${data.thumbnail} alt="">
    //     <p class="dateago">${data.others.posted_date}</p>
    // `;
    // cardchild2.innerHTML = `
    //     <img class="card_img" src=${data.authors[0].profile_picture} alt="">
    // `;
    // cardchild3.innerHTML =`
    //     <h6>${data.title}</h6>
    // `;
    // cardchild5.innerHTML =`
    //     <h1>${data.authors[0].profile_name}</h1>
    //     <h1>${data.authors[0].verified}</h1>
    //     dfgd
    // `;
    // //add
    // cardchild3.appendChild(cardchild5);
    // cardchild3.innerHTML =`
    //     <p>${data.others.views}</p>
    // `;
    // cardchild2.appendChild(cardchild3);
    // card.appendChild(cardchild1);
    // card.appendChild(cardchild2);
  });
}else{
  document.getElementById("nullcontainer").innerHTML ="";
  const listContainer = document.getElementById("nullcontainer");
  const card2 = document.createElement("div"); //card
  card2.classList.add("card2");
  let lala= `<img class="nullimg" src="Icon.png" alt="">
  `;
  card2.innerHTML = lala;
  card2.innerHTML +=`<h3 class="sorrymessage">Oops!! Sorry, There is no <br> content here</h3>`;
  nullcontainer.appendChild(card2);
  console.log("ami else e");
}
};

function formatTimeFromSeconds(seconds) {
    const hours= Math.floor(seconds/ 3600);
    const remainSeconds = seconds% 3600;
    const minutes = Math.floor(remainSeconds/ 60);
    let timeS = '';
    if (hours > 0) {
        timeS += hours + ' hour' + (hours !== 1 ? 's' : '') + ' ';
    }
    if (minutes > 0) {
        timeS+= minutes + ' minute' + (minutes !== 1 ? 's' : '') + ' ';
    }
    if (timeS === '') {
        timeS = 'Just now';
    } else {
        timeS += 'ago';
    }
    return timeS;
}



const sortByMostViews = () => {
  abarpatha();
  // const data = sortkor(0,false);
  // console.log("ami sort korbo" , x);
  // const sortedData = x.sort((a, b) => {
  //     const viewsA = parseFloat(a.others.views.replace(/[^\d.]/g, ''));
  //     const viewsB = parseFloat(b.others.views.replace(/[^\d.]/g, ''));
  //     return viewsB - viewsA;
  // });

  // displayData(sortedData);
}

const sortkor = (data) => {
  console.log("ami sort korbo" , data);
  const sortedData = data.sort((a, b) => {
      const viewsA = parseFloat(a.others.views.replace(/[^\d.]/g, ''));
      const viewsB = parseFloat(b.others.views.replace(/[^\d.]/g, ''));
      return viewsB - viewsA;
  });

  displayData(sortedData);
}

const displayData = (data) => {
  display_item(data);
}

