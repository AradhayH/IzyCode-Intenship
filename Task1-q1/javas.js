

let scrollContainter = document.querySelector(".scroll");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");
scrollContainter.addEventListener("wheel", (evt) => {
evt.preventDefault();
scrollContainter.scrollLeft += evt.deltaY;
behavior = "smooth";
});

nextbtn.addEventListener("click", (e) => {
e.preventDefault();
scrollContainter.scrollLeft += 917;
Behavior = "smooth";
});
backbtn.addEventListener("click", (f)=>{
f.preventDefault();
scrollContainter.scrollLeft -= 917;
Behavior = "smooth";
});
const Up = () => {
    window.scrollTo({top :0, behavior:"smooth"});
}
//Progress scroll js
const progressscrollelement = document.querySelector("#bottomscroll");
function progressscroll() {
    const htofpage = document.body.scrollHeight;
    const atmdist = document.documentElement.scrollTop;
    const winheight = document.documentElement.clientHeight;
    const percent1 = (atmdist / (htofpage - winheight)) * 100;
    progressscrollelement.style.width = Math.round(percent1) + "%";
}
document.addEventListener("scroll", progressscroll);
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*tabs*/
const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document
            .querySelector(tab.dataset.tabValue);

        tabInfos.forEach(tabInfo => {
            tabInfo.classList.remove('active')
        })
        target.classList.add('active');
    })
})
/*break text*/
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
  const element = document.getElementById(id),
        text = element.innerText.split("");
  
  element.innerText = "";
  
  text.forEach((value, index) => {
    const outer = document.createElement("span");
    
    outer.className = "outer";
    
    const inner = document.createElement("span");
    
    inner.className = "inner";
    
    inner.style.animationDelay = `${rand(-10000, 0)}ms`;
    
    const letter = document.createElement("span");
    
    letter.className = "letter";
    
    letter.innerText = value;
    
    letter.style.animationDelay = `${index * 1000 }ms`;
    
    inner.appendChild(letter);    
    
    outer.appendChild(inner);    
    
    element.appendChild(outer);
  });
}

enhance("channel-link");
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });