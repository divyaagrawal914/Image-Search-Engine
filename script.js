const accessKey = "GvKzF04xJ6EjWdSh_OPh4MdxqbymozOEjskLi3OXLWc";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const showResult = document.getElementById("show-result");
const showMoreBtn = document.getElementById("show-more-btn");
const button = document.getElementById("btn");

let keyword ='';
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

   const results = data.results;

   if (page == 1) {
     showResult.innerHTML = "";
   }

   results.map((result)=>{
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imageLinks = document.createElement("a");
    imageLinks.href = result.links.html;
    imageLinks.target = "_blank";

    imageLinks.appendChild(image);
    showResult.appendChild(imageLinks);

   })
   showMoreBtn.style.display = "block";
};

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImages(); 
});

showMoreBtn.addEventListener("click",()=>{
    page++;
     searchImages(); 
});

searchBox.addEventListener("click", function(event) {
    if (event.key === "Enter") {
      button.click(); // triggers button click
    }
  });

