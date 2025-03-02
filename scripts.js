


document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll('a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1); // Убираем #
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20, // Можно подстроить отступ сверху
                    behavior: "smooth" // Плавная анимация
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll('li');

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });

        item.addEventListener('mouseleave', () => {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {

 // Аккордеон для продуктів
 const productAccordionButton = document.querySelector('.product-accordion .accordion-button');
 const productAccordionContent = document.querySelector('.product-accordion .accordion-content');

 if (productAccordionButton && productAccordionContent) {
     productAccordionButton.addEventListener('click', function () {
         productAccordionContent.classList.toggle('open');
         if (productAccordionContent.classList.contains('open')) {
             productAccordionButton.textContent = 'Сховати всі продукти';
         } else {
             productAccordionButton.textContent = 'Показати всі продукти';
         }
     });
 }

 document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        button.classList.toggle('active');

        // Определяем, какие ключи использовать
        const closeKey = button.getAttribute('data-text-uk-close2') || button.getAttribute('data-text-uk-close3') || button.getAttribute('data-text-uk-close4');
        const openKey = button.getAttribute('data-text-uk-open2') || button.getAttribute('data-text-uk-open3') || button.getAttribute('data-text-uk-open4');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            button.textContent = openKey; // Используем ключ для открытого состояния
        } else {
            accordionContent.style.maxHeight = 0;
            button.textContent = closeKey; // Используем ключ для закрытого состояния
        }
    });
});

    // Аккордеон для відео
    const videoAccordionButton = document.querySelector('.video-accordion .accordion-button');
    const videoAccordionContent = document.querySelector('.video-accordion .accordion-content');

    if (videoAccordionButton && videoAccordionContent) {
        videoAccordionButton.addEventListener('click', function () {
            videoAccordionContent.classList.toggle('open');
            if (videoAccordionContent.classList.contains('open')) {
                videoAccordionButton.textContent = 'Сховати всі відео';
            } else {
                videoAccordionButton.textContent = 'Показати всі відео';
            }
        });
    }

    // Аккордеон для посилань
    const linksAccordionButton = document.querySelector('.links-accordion .accordion-button');
    const linksAccordionContent = document.querySelector('.links-accordion .accordion-content');

    if (linksAccordionButton && linksAccordionContent) {
        linksAccordionButton.addEventListener('click', function () {
            linksAccordionContent.classList.toggle('open');
            if (linksAccordionContent.classList.contains('open')) {
                linksAccordionButton.textContent = 'Сховати всі посилання';
            } else {
                linksAccordionButton.textContent = 'Показати всі посилання';
            }
        });
    }
});

// Объект переводов
const translations = {
    ua: {
        "slogan": "Smart-дизайн для вашого ідеального затишку",
        "main": "ГОЛОВНА",
        "about": "ПРО НАС",
        "ПРОФІЛЬ": "ПРОФІЛЬ КОМПАНІЇ",
        "ФІЛОСОФІЯ": "ФІЛОСОФІЯ",
        "ПОСЛУГИ": "ПОСЛУГИ",
        "ПРОДУКЦІЯ": "ПРОДУКЦІЯ",
        "НІЧНА ЗОНА": "НІЧНА ЗОНА",
        "Дитячі": "Дитячі",
        "Двоярусні ліжка": "Двоярусні ліжка",
        "Мостові ліжка": "Мостові ліжка",
        "Двомісні ліжка": "Двомісні ліжка",
        "Одномісні ліжка": "Одномісні ліжка",
        "ДЕННА ЗОНА": "ДЕННА ЗОНА",
        "Кухні": "Кухні",
        "Вітальні": "Вітальні",
        "Зони відпочинку": "Зони відпочинку",
        "Кабінети": "Кабінети",
        "РІЗНЕ": "РІЗНЕ",
        "Столи": "Столи",
        "Тумби": "Тумби",
        "Полиці": "Полиці",
        "ЯКІСТЬ": "ЯКІСТЬ",
        "Плитні матеріали": "Плитні матеріали",
        "Меблева фурнітура": "Меблева фурнітура",
        "Фасади": "Фасади",
        "ПРОЄКТНІ РОБОТИ": "ПРОЄКТНІ РОБОТИ",
        "catalog": "КАТАЛОГИ / ПРАЙСИ",
        "ВІДЕО": "ВІДЕО / КОРИСНІ ПОСИЛАННЯ",
               
        "НОВИНИ": "НОВИНИ / БЛОГ",
        "ВХІД": "УВІЙТИ",
        "РЕГІСТР": "ЗАРЕЄСТРУВАТИСЯ",
        "КОНТАКТИ": "ЗВ'ЯЗАТИСЯ З НАМИ",
                
        "footer_1": "Всі права захищено &copy; 2025",
        "footer_2": "FURNIROOM",
        "footer_3": "Сокіл Вадим & Воловик Раїса",
        "about_text_1": "Наші майстри не знають втоми та створюють неповторні речі, наче чарівники з казки, наповнюючи їх життям.",
        "about_text_2": "Це історія марки оригінальних меблів FURNIROOM. Ця історія однієї людини, що почалася в 2004 році з купівлі ліцензійної програми для конструювання меблів, яка хотіла бути незалежною від керівництва і займатися улюбленою справою.",
        "about_text_3": "Ці цінності стали головним орієнтиром компанії на кожному етапі роботи від проектування до виробництва,  з використанням найдосконаліших інструментів, що дозволяють ефективно реагувати на потреби ринку, що постійно змінюються.",
        "about_text_4": "Конструкторський цех знаходиться в місті Дніпро, в промисловому районі, що динамічно розвивається, відомому на весь світ як батьківщина поняття «Зроблено в Україні». Саме тут виробляється весь спектр товарів, що поєднують у собі ремісничі традиції та новітні технології, проте головну роль у виробничому процесі незмінно відіграють люди, чия невпинна увага та контроль на всіх етапах забезпечує високий рівень стандартів виробництва.",
       "profile_text_1": "Компанія спеціалізується на корпусних меблях-трансформерах, в яких поєднуються багатофункціональність, органомічність і сучасність інтер'єрів.",
       "profile_text_2": "Дизайни, які розробляються, орієнтовані на замовника, враховують максимум побажань по кольорах та функціоналу.",
       "profile_text_3": "Ми зможемо надати різні варіанти корпусних меблів для інтер'єрів: від комунальної квартири до котеджів на будь-який смак і достаток.",
       "philosophy_text_1": "Залишаючись незмінно вірним оригінальній якості, бренд Furniroom прагне надати класичному стилю нове звучання, втілюючи його в сучасних інтер'єрах віталень та спалень.",       
       "philosophy_text_2": "Компанія Furniroom розробляє дизайни, витримані в теплих і насичених тонах, які рясніють деталями та ремінісценціями елегантних інтер'єрів трансатлантичних лайнерів XIX століття і немов просякнуті солонуватим морським повітрям. У неповторному дизайні цих творів теслярського мистецтва, виконаних із матеріалів вищої якості, нероздільно сплетено старе та нове.", 
        "philosophy_text_3": "Стиль Furniroom, що незмінно залишається вірним своїм витокам, але поданий зовсім по-новому, не тільки тішить погляд, а й зачіпає потаємні струни душі і лише потім. ",
       "services_1": "- консультації із бригадою архітекторів та техніків",
       "services_2": "- розробка персональних проєктов для всіх бажаючих",
       "services_3": "- об'ємний рендеринг проектів, що розробляються",
       "services_4": "- виїзд на місце для здійснення вимірів",
       "services_5": "- транспортування, монтаж та післяпродаже обслуговування",
       "links": "Корисні посилання",
       "video-links": "Відео",

       "hight-zone": "НІЧНА ЗОНА",
        
       "contacts": "ЗВ'ЯЗАТИСЯ З НАМИ",
       "send": "Надіслати повідомлення",
       "name": "Ваше повне ім'я:",
       "country": "Країна:",
       "region": "Область:",
       "city": "Місто:",
       "street": "Вулиця:",
       "phone": "Номер телефона:",
       "email": "Електронна пошта:",
       "message": "Повідомлення:",
       "btn_send": "Надіслати",
       "address": "Наша адреса",
       "add": "Адреса: м. Дніпро, вул. Промислова, 123",
       "tel": "Телефон: +38 (067) 123-45-67",
        "em": "Email: info@furniroom.com",
        "open": "Години роботи: Пн-Пт: 9:00 - 18:00",
        "login": "Вхід",
        "log_in": "УВІЙТИ",
        "username": "Ім'я користувача або електронна пошта",
        "password": "Пароль",
        "btn-submit_2": "Увійти",
        "question_1": "Ще не зареєстровані?",
        "answer_1": " Зареєструватися",
        "question_2": "Забули пароль?",
        "forgot-password": "ЗАБУЛИ ПАРОЛЬ?",
        "btn-submit_3": "Відправити новий пароль",
        "sign_up": "ЗАРЕЄСТРУВАТИСЯ",
        "signup": "Реєстрація",
        "user-name": "Ім'я користувача",
        "password_2": "Підтвердити пароль",
        "btn-submit_1": "Зареєструватися",

        "plates": "Плитні матеріали",
        "furni": "Фурнітура",
    },

    en: {
        "slogan": "Smart design for your perfect comfort",
        "main": "HOME",
        "about": "ABOUT US",
        "ПРОФІЛЬ": "COMPANY PROFILE",
        "ФІЛОСОФІЯ": "PHILOSOPHY",
        "ПОСЛУГИ": "SERVICES",
        "ПРОДУКЦІЯ": "PRODUCTS",
        "НІЧНА ЗОНА": "NIGHT AREA",
        "Дитячі": "Children`s rooms",
        "Двоярусні ліжка": "Bunk beds",
        "Мостові ліжка": "Bridge beds",
        "Двомісні ліжка": "Double beds",
        "Одномісні ліжка": "Single beds",
        "ДЕННА ЗОНА": "DAY AREA",
        "Кухні": "Kitchens",
        "Вітальні": "Living rooms",
        "Зони відпочинку": "Recreation areas",
        "Кабінети": "Offices ",
        "РІЗНЕ": "VARIOUS FURNITURE",
        "Столи": "Tables & desks",
        "Тумби": "Stands",
        "Полиці": "Shelfs",
        "ЯКІСТЬ": "QUALITY",
        "Плитні матеріали": "Plate materials",
        "Меблева фурнітура": "Furniture accessories",
        "Фасади": "Facades",
        "ПРОЄКТНІ РОБОТИ": "PROJECTS",
        "catalog": "CATALOGS / PRICES",
        "ВІДЕО": "VIDEOS / USEFUL LINKS",
        
        "НОВИНИ": "NEWS / BLOG",
        "ВХІД": "LOG IN",
        "РЕГІСТР": "SIGN UP",
        "КОНТАКТИ": "CONTACTS",
       
        "footer_1": "All rights reserved &copy; 2025",
        "footer_2": "FURNIROOM",
        "footer_3": "Sokil Vadym & Volovyk Raisa",
        "about_text_1": "Our craftsmen never know fatigue and create unique items like wizards from a fairy tale, bringing them to life.",
        "about_text_2": "This is the story of the FURNIROOM brand of original furniture. It is the story of one person, which began in 2004 with the purchase of licensed software for furniture design, who wanted to be independent from management and pursue their passion.",
        "about_text_3": "These values have become the main guide for the company at every stage of work, from design to production, using the most advanced tools that allow us to effectively respond to the constantly changing needs of the market.",
        "about_text_4": "The design workshop is located in the city of Dnipro, in a dynamically developing industrial area, known worldwide as the birthplace of the concept of 'Made in Ukraine.' It is here that the full range of products is produced, combining craftsmanship traditions with cutting-edge technologies. However, the key role in the production process is always played by the people whose constant attention and control at every stage ensure a high level of production standards.",
        "profile_text_1": "The company specializes in case furniture-transformers, which combine multifunctionality, organicity and modern interiors.", 
        "profile_text_2": "The designs that are developed are focused on the customer, taking into account the maximum wishes in terms of colors and functionality.",
        "profile_text_3": "We will be able to provide various options of cabinet furniture for interiors: from a communal apartment to cottages for every taste and wealth",
        "philosophy_text_1": "Remaining faithful to the original quality, the Furniroom brand strives to give a new sound to the classic style, embodying it in modern interiors of living rooms and bedrooms.", 
        "philosophy_text_2": "The Furniroom company develops designs made in warm and saturated colors, which are full of details and reminiscences of the elegant interiors of transatlantic liners of the 19th century and seem to be permeated with salty sea air. In the unique design of these works of carpentry art, made of the highest quality materials, the old and the new are inseparably woven together.", 
        "philosophy_text_3": "The style of Furniroom, which remains faithful to its origins, but presented in a completely new way, not only pleases the eye, but also touches the secret strings of the soul and only then.",
        "services_1": "- consultations with a team of architects and technicians",
        "services_2": "- development of personal projects for everyone",
        "services_3": "- volumetric rendering of projects under development",
        "services_4": "- trip to the place for measurements",
        "services_5": "- transportation, installation and after-sales service",
        "links": "Useful links",
        "video-links": "Videos",
       
        "hight-zone": "HIGHT ZONE",

        "contacts": "CONTACTS",
        "send": "Send a message",
        "name": "Your full name:",
        "country": "Country:",
        "region": "Region:",
        "city": "City:",
        "street": "Street:",
        "phone": "Phone number:",
        "email": "Email:",
        "message": "Message:",
        "btn_send": "Send",
        "address": "Our address",
        "add": "Address: Dnipro city, Industrial street, 123",
        "tel": "Phone: +38 (067) 123-45-67",
        "em": "Email: info@furniroom.com",
        "open": "Opening hours: Mon-Fri: 9:00 - 18:00",
        "login": "Log in",
        "log_in": "LOG IN",
        "username": "User name or email",
        "password": "Password",
        "btn-submit_2": "Log in",
        "question_1": "Not registered yet?",
        "answer_1": " Sign Up",
        "question_2": "Forgot your password?",
        "forgot-password": "FORGOT YOUR PASSWORD?",
        "btn-submit_3": "Send new password",
        "sign_up": "SIGN UP",
        "signup": "Sign up",
        "user-name": "User name",
        "password_2": "Confirm password",
        "btn-submit_1": "Sign up",
        
        "plates": "Plate materials",
        "furni": "Furniture",
    },
};

// Функция для смены языка
function switchLanguage(lang) {
    // Сохраняем выбранный язык в localStorage
    localStorage.setItem("selectedLanguage", lang);

    // Обновляем текст на странице
    document.querySelectorAll("[data-lang-key]").forEach((el) => {
        // Исключаем обработку изображений
        if (el.tagName === "IMG") {
        return; // Пропускаем элементы img
        }

        const key = el.getAttribute("data-lang-key");
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// Проверка сохраненного языка при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "ua";
    switchLanguage(savedLanguage);
});

// Обработчики для кнопок
document.getElementById("lang-ua").addEventListener("click", () => switchLanguage("ua"));
document.getElementById("lang-en").addEventListener("click", () => switchLanguage("en"));

fetch('menu.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.left-menu').innerHTML = data;
    });

    document.addEventListener('DOMContentLoaded', function () {
        // Обработка кликов на ссылки с якорями
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault(); // Отменяем стандартное поведение
                const targetId = this.getAttribute('href').substring(1); // Получаем ID цели
                const targetElement = document.getElementById(targetId); // Находим элемент
                if (targetElement) {
                    // Прокручиваем к элементу плавно
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    });

//Отправка сообщений на email FURNIROOM 
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let formData = new FormData(this);

        fetch("https://formsubmit.co/ajax/volovik.raisa.kam@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            },
            body: JSON.stringify(Object.fromEntries(formData)) // Преобразуем FormData в JSON
        })
        .then(response => response.json()) // Парсим ответ
        .then(data => {
            if (data.success) {
                document.getElementById("statusMessage").textContent = "Повідомлення успішно надіслано!";
                document.getElementById("statusMessage").style.color = "green";
                document.getElementById("contactForm").reset();
            } else {
                document.getElementById("statusMessage").textContent = "Помилка надсилання повідомлення.";
                document.getElementById("statusMessage").style.color = "red";
            }
        })
        .catch(error => {
            console.error("Помилка:", error);
            document.getElementById("statusMessage").textContent = "Сталася помилка, спробуйте ще раз.";
            document.getElementById("statusMessage").style.color = "red";
        });
    });
});


/*ЯКІСТЬ*/
function bringToFront(element) {
    // Сбрасываем z-index для всех изображений
    const images1 = document.querySelectorAll('.image_1');
    const images2 = document.querySelectorAll('.image_2');
    const allImages = [...images1, ...images2]; // Объединяем все изображения в один массив

    allImages.forEach(img => {
        img.style.zIndex = 1; // Сбрасываем z-index для всех изображений
    });

    // Устанавливаем z-index для активного изображения
    element.style.zIndex = 10;

    // Анимация: перемещение на передний план
    element.style.transform = 'rotate(0deg) scale(1.1)';

    // Возвращаем остальные изображения в исходное положение
    allImages.forEach(img => {
        if (img !== element) {
            img.style.transform = img.style.transform.replace(/scale\([^)]+\)/, 'scale(1)');
        }
    });
}
