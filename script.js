const container = document.querySelector("#animals")
const API_URL = "https://api.thedogapi.com/v1/images/search?limit=6";


const dogNames = [
  "Барсик", "Рекс", "Бім", "Джек", "Тузик",
  "Арчі", "Макс", "Оскар", "Чарлі", "Бруно",
  "Лакі", "Каспер", "Рокі", "Тобі",
  "Сімба", "Марс", "Граф", "Шарік", "Бакс","Емма","Декстер","Кубік","Бім","Зірочка","Ліам","Патрон","Марлі"
];
function getRandomDate() {
  const start = new Date(2015, 0, 1); // початок діапазону
  const end = new Date(); // сьогодні
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  return randomDate.toLocaleDateString("uk-UA"); // формат дати
}



async function loadDogs () {

    const response = await fetch(API_URL)
    const dogs =  await response.json()
    renderAnimals (dogs)

}
function renderAnimals(dogs){
    container.innerHTML = "";

dogs.forEach(dog => {
        // Далі пишемо тут
    const col = document.createElement("div");
    col.className = "col";

    const randomName = dogNames[Math.floor(Math.random() * dogNames.length)];
    const randomDate = getRandomDate();
    
    col.innerHTML =`
            <div class="card">
      <img src="${dog.url}" alt="Dog">
      <div class="card-body">
        <h3 class="names">${randomName}</h3>
        <p class="dates">${randomDate}</p>
        <a href="adopt.html?img=${encodeURIComponent(dog.url)}" class="btn-adopt">
          Відгукнутися
        </a>
      </div>
    </div>
  `;

  container.appendChild(col);
});

}
loadDogs()
