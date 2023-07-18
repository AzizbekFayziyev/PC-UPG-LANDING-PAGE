window.addEventListener("DOMContentLoaded", () => {
     "use strict";

     AOS.init();

     // Elements
     const menu = document.querySelector("#menu"),
          mobMenu = document.querySelector(".mobmenu"),
          navbar = document.querySelector(".navbar ul"),
          navbarItem = document.querySelectorAll(".navbar ul li");

     // Toggle menu
     function toggleMenu() {
          if (this.classList.contains("fa-bars")) {
               this.classList.remove("fa-bars");
               this.classList.add("fa-xmark");
               document.documentElement.style.overflowY = "hidden";
          } else {
               this.classList.add("fa-bars");
               this.classList.remove("fa-xmark");
               document.documentElement.style.overflowY = "auto";
          }

          mobMenu.classList.toggle("active");
          navbar.classList.toggle("active");
     }

     const menuToggler = toggleMenu.bind(menu);

     menu.addEventListener("click", menuToggler);

     navbarItem.forEach(el => {
          if (window.getComputedStyle(navbar).position === "fixed") {
               el.addEventListener("click", menuToggler);
          }
     });

     // Clese menu on press key "Esc"
     document.addEventListener("keydown", e => {
          if (e.key === "Escape" && mobMenu.classList.contains("active") && navbar.classList.contains("active")) {
               menuToggler();
          };
     });

     // Timer
     const deadline = "2023-9-04";

     function getTimeRemaining(endtime) {
          const timer = Date.parse(endtime) - Date.parse(new Date()),
               days = Math.floor(timer / (1000 * 60 * 60 * 24)),
               hours = Math.floor((timer / (1000 * 60 * 60)) % 24),
               minutes = Math.floor((timer / 1000 / 60) % 60),
               seconds = Math.floor((timer / 1000) % 70);

          return { timer, days, hours, minutes, seconds };
     }

     function setClock(selector, endTime) {
          const timer = document.querySelector(selector),
               days = timer.querySelector("#days"),
               hours = timer.querySelector("#hours"),
               minutes = timer.querySelector("#minutes"),
               seconds = timer.querySelector("#seconds"),
               timeInterval = setInterval(updateClock, 1000);

          updateClock();

          function updateClock() {
               const t = getTimeRemaining(endTime);

               days.innerHTML = t.days;
               hours.innerHTML = t.hours;
               minutes.innerHTML = t.minutes;
               seconds.innerHTML = t.seconds;

               if (t.timer <= 0) {
                    clearInterval(timeInterval)
               }
          }
     };

     setClock(".timer", deadline);

     // Cards

     const cardData = [
          {
               title: "Только практические навыки в работе",
               paragrph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.",
               icon: "fas fa-regular fa-computer",
          },
          {
               title: "Только практические навыки в работе",
               paragrph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.",
               icon: "fas fa-brands fa-usb",
          },
          {
               title: "Сертификация по окончании обучения",
               paragrph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.",
               icon: "fas fa-regular fa-gear",
          },
     ];

     cardData.map((e) => {
          const el = document.createElement("div");
          el.className = "courses__cards_card";
          el.innerHTML = `
          <i class="${e.icon}"></i>
          <h4>${e.title}</h4>
          <p>${e.paragrph}</p>
          `;
          document.querySelector(".courses__cards").append(el);
     });
});