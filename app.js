document.addEventListener("DOMContentLoaded", function () {
    //PopUp
    let popup = document.getElementById("myPopup");
    let showPopUp = document.querySelector(".ShowPopUp");

    showPopUp.addEventListener("mouseover", function () {
        popup.classList.remove("hide");
        popup.classList.add("show");
    });

    showPopUp.addEventListener("mouseout", function () {
        popup.classList.add("hide");
        popup.classList.remove("show");
    });

    //Privacy
    let privacy = document.getElementById("ArrDown");

    privacy.addEventListener("click", function () {
        let showOptions = document.getElementById("PrivacyDiv");
        showOptions.classList.toggle("show");

        let links = document.getElementById("socialsClicks");
        links.classList.remove("show");
    });

    //SocialsLinks
    let social = document.getElementById("Social");

    social.addEventListener("click", function () {
        let showOptions = document.getElementById("PrivacyDiv");
        showOptions.classList.remove("show");

        let links = document.getElementById("socialsClicks");
        links.classList.toggle("show");
    });

    //Collapsible nav
    let sandwitch = document.getElementById("sandwitch");
    sandwitch.addEventListener("click", function () {

        let collapsibleNav = document.getElementById("CollapsibleNav");
        let closeBtn = document.getElementById("closeNav");

        collapsibleNav.classList.toggle("show");

        closeBtn.addEventListener("click", function () {
            collapsibleNav.classList.remove("show");
        });

        let showOptions = document.getElementById("PrivacyDiv");
        showOptions.classList.remove("show");
        let links = document.getElementById("socialsClicks");
        links.classList.remove("show");

    });
});
