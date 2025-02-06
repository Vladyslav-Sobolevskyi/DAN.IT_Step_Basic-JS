"use strict";

const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];


const trainersCardContainer = document.querySelector(".trainers-cards__container");
const sortingBtn = document.querySelector(".sorting");
const filterForm = document.querySelector(".sidebar__filters");

let filteredDATA = [...DATA];




//? Завантаження карток та сторінки
window.addEventListener("load", () => {
	const preloader = document.querySelector(".loader");
	const hiddenElements = document.querySelectorAll("[hidden]")

	setTimeout(() => {
		preloader.remove();

		const directionActive = localStorage.getItem("direction");
		if (directionActive !== null && directionActive !== "") {
			document.querySelector(`input[id="${directionActive}"]`).checked = true;
		}

		const categoryActive = localStorage.getItem("category");
		if (categoryActive !== null && categoryActive !== "") {
			document.querySelector(`input[id="${categoryActive}"]`).checked = true;
		}

		filteredCard();

		setTimeout(() => {
			hiddenElements.forEach((elements) => {
				elements.removeAttribute("hidden");
			})
		}, 500);

		modalShowMore();
	}, 3000);
});

console.log(localStorage.getItem("direction"));
		
console.log(localStorage.getItem("category"));


//? Фільтрування карток
filterForm.addEventListener("submit", (event) => {
	event.preventDefault();
	
	sortingBtn.querySelector(".sorting__btn--active").classList.replace("sorting__btn--active", "sorting__btn");
	sortingBtn.firstElementChild.nextElementSibling.classList.add("sorting__btn--active");	

	filteredCard();
});




//? Сортування карток
sortingBtn.addEventListener("click", (event) => {
	if (event.target.closest("button")) {
		sortingBtn.querySelector(".sorting__btn--active").classList.replace("sorting__btn--active", "sorting__btn");
		event.target.classList.add("sorting__btn--active")

		sortedCard();
	}
});





//? Функція сортування карток
function sortedCard() {
	filteredCard();

	const activeSortBtn = sortingBtn.querySelector(".sorting__btn--active").textContent.trim().toLowerCase();
	console.log(activeSortBtn);
	

	if (activeSortBtn === "за замовчуванням") {
		renderCards(filteredDATA);
	}

	if (activeSortBtn === "за прізвищем") {
		filteredDATA.sort((a, b) => a["last name"].localeCompare(b["last name"]));
		renderCards(filteredDATA);
	}

	if (activeSortBtn === "за досвідом") {
		filteredDATA.sort((a, b) => parseInt(b.experience.split(" ")[0]) - parseInt(a.experience.split(" ")[0]))
		renderCards(filteredDATA);
	};
}





//? Функція фільтрування карток
function filteredCard() {
	const radioActiveDirection = filterForm.querySelector(`input[name="direction"]:checked`);
	const radioActiveCategory = filterForm.querySelector(`input[name="category"]:checked`);

	localStorage.setItem("direction", radioActiveDirection.id);
	localStorage.setItem("category", radioActiveCategory.id)
	
	const filterDirection = filterForm.querySelector(`input[name="direction"]:checked`).nextElementSibling.textContent.trim().toLowerCase();
	const filterCategory = filterForm.querySelector(`input[name="category"]:checked`).nextElementSibling.textContent.trim().toLowerCase();

	console.log(filterDirection, filterCategory);

	filteredDATA = DATA.filter(trainer => {
		const matchesDirection = filterDirection === "всі" || trainer.specialization.toLowerCase() === filterDirection;
		const matchesCategory = filterCategory === "всі" || trainer.category.toLowerCase() === filterCategory;
		return matchesDirection && matchesCategory;
	});


	renderCards(filteredDATA);
}




//? Функція рендеру карток
function renderCards(trainers) {
	const templateTrainerCard = document.querySelector("#trainer-card");
	trainersCardContainer.innerHTML = "";

	trainers.forEach((trainerData) => {
		// console.log(trainerData);

		const newTrainerCard = templateTrainerCard.content.cloneNode(true);
		const trainerImg = newTrainerCard.querySelector(".trainer__img");
		const trainerName = newTrainerCard.querySelector(".trainer__name");

		trainerImg.src = trainerData.photo;
		trainerName.textContent = `${trainerData["first name"]} ${trainerData["last name"]}`;
		trainersCardContainer.append(newTrainerCard);
	});
};




//? Функція модального вікна
function modalShowMore() {

	trainersCardContainer.addEventListener("click", (event) => {
		addModal(event);
	});

	function addModal(event) {
		if (event.target.matches(".trainer__show-more")) {
			const card = event.target.closest(".trainer");
			const cardName = card.querySelector(".trainer__name");
			// console.log(cardName);

			const trainerData = DATA.find((trainer) => {
				if (`${trainer["first name"]} ${trainer["last name"]}` === cardName.textContent) {
					return trainer;
				};
			});
			// console.log(trainerData);

			const modalTemplate = document.querySelector("#modal-template");
			const modal = modalTemplate.content.cloneNode(true);

			const modalImg = modal.querySelector(".modal__img");
			modalImg.src = trainerData.photo;
			const modalName = modal.querySelector(".modal__name");
			modalName.textContent = `${trainerData["first name"]} ${trainerData["last name"]}`;
			const modalCategory = modal.querySelector(".modal__point--category");
			modalCategory.textContent = `Категорія: ${trainerData.category}`;
			const modalExperience = modal.querySelector(".modal__point--experience");
			modalExperience.textContent = `Досвід: ${trainerData.experience}`
			const modalSpecialization = modal.querySelector(".modal__point--specialization");
			modalSpecialization.textContent = `Напрям тренера: ${trainerData.specialization}`;
			const modalText = modal.querySelector(".modal__text");
			modalText.textContent = trainerData.description;

			document.body.prepend(modal);

			closeModal();
			toggleScrollLocker(true);
		};
	};

	function closeModal() {
		const modal = document.querySelector(".modal");

		modal.addEventListener("click", (event) => {
			if (event.target.closest(".modal__close") || !event.target.closest(".modal__body")) {
				modal.remove();
				toggleScrollLocker(false);
			};
		})

	};

};




//? Функція блокування/розблокування скролу екрану
function toggleScrollLocker(locked) {
	if (locked) {
		const scrollY = window.scrollY;
		document.body.style.position = "fixed";
		document.body.style.top = `-${scrollY}px`;
	} else {
		const scrollY = document.body.style.top;
		document.body.style.position = "";
		document.body.style.top = "";
		window.scrollTo(0, parseInt(scrollY || "0") * -1);
	}

};


// localStorage.setItem.
