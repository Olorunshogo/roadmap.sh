
// Function to create a cookie
// function setCookie(cname, cvalue, exdays ) {
//     const date = new Date();
//     date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     let expires = "expires=" + date.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// // Function to read a cookie
// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//           c = c.substring(1);  
//         }

//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);            
//         }
//     }
//     return "";
// }

// // Adding Event Listener to the like cookies button
// function acceptConsent() {
//     setCookie('user_cookie_consent', true, 30); // Set cookie for 30 days
//     let cookieConsentStatus = getCookie("user_cookie_consent");

//     // document.addEventListener('DOMContentLoaded', function() {

//     // });
    
//     if(cookieConsentStatus != "") {
//         // document.getElementById("cookieNotice").style.display = "none";
//     } else {
//         document.getElementById("cookieNotice").style.display = "block";
//         document.getElementById("acceptButton").addEventListener('click', function() {
//             acceptConsent();
//             document.getElementById("cookieNotice").style.display = "none";
//         });
//     }
// }



