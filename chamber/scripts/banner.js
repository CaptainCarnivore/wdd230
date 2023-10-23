const bannerDate = new Date();
let bannerOfWeek = bannerDate.getDay();
const banner = document.querySelector('#banner');
const closeBanner = document.querySelector('#closeBanner');
function checkDay(){
    if (bannerOfWeek == "1" || bannerOfWeek == "3" || bannerOfWeek == "5"){
        banner.style.display = "block";
    }
}

checkDay();

closeBanner.addEventListener('click', () => {
    banner.style.display = "none";
});