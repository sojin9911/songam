let mobileMenu = document.querySelectorAll('.mobile-menu');
let tabletMenu = document.querySelectorAll('.tablet-menu');
let mobileIndex =0;
let tabletIndex = 0;
    
for (let i=0; i < mobileMenu.length; i++) {
    mobileMenu[i].addEventListener('click', ()=> {

        if(i==mobileIndex){
            mobileMenu[mobileIndex].classList.remove('active');
            mobileIndex=-1;
        }
        else{
            // console.log(i,"누름")
            if (mobileIndex>=0){
                mobileMenu[mobileIndex].classList.remove('active');
            }
            mobileMenu[i].classList.add('active');
            mobileIndex = i;
        }
    });




    tabletMenu[i].addEventListener('click', ()=> {

        if(i==tabletIndex){
            tabletMenu[tabletIndex].classList.remove('active');
            tabletIndex=-1;
        }
        else{
            // console.log(i,"누름")
            if (tabletIndex>=0){
                tabletMenu[tabletIndex].classList.remove('active');
            }
            tabletMenu[i].classList.add('active');
            tabletIndex = i;
        }
    });

}

date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("todaydate").innerHTML = year + "년 " + month + "월 " + day + "일";


const sun = document.querySelector('.sunClock');
let start = new Date("2021-12-31 07:34:00");
let end = new Date("2021-12-31 17:17:00");
let stT =start.getHours()*60 + start.getMinutes();
let enT =end.getHours()*60 + end.getMinutes();

let startAngle = stT/4;
let endAngle = enT/4;

sun.style.background="conic-gradient(#11264f " + startAngle + "deg, #ff7473 0 " + endAngle + "deg, #11264f 0)";
sun.style.background="-webkit-conic-gradient(#11264f " + startAngle + "deg, #ff7473 0 " + endAngle + "deg, #11264f 0)";
sun.style.backgroundImage="-moz-conic-gradient(#11264f " + startAngle + "deg, #ff7473 0 " + endAngle + "deg, #11264f 0)";
sun.style.backgroundImage="-o-conic-gradient(#11264f " + startAngle + "deg, #ff7473 0 " + endAngle + "deg, #11264f 0)";

const moon = document.querySelector('.moonClock');
let mori = new Date("2021-12-31 00:59:00");
let mose = new Date("2021-12-31 13:01:00");
let moriT =mori.getHours()*60 + mori.getMinutes();
let moseT =mose.getHours()*60 + mose.getMinutes();

let moriAngle = moriT/4;
let moseAngle = moseT/4;

moon.style.backgroundImage="conic-gradient(#11264f " + moriT + "deg, #f0d047 0 " + moseAngle + "deg, #11264f 0)";
