const rooms = [
    {id: 'rest-room', name: 'Комната отдыха', image: 'img/rest-room.png', price: 30, bonuses: {coffe: 3, bonus2: 0, bonus3: 0}},
    {id: 'rest-room', name: 'Комната отдыха', image: 'img/rest-room.png', price: 30, bonuses: {coffe: 3, bonus2: 0, bonus3: 0}},
    {id: 'rest-room', name: 'Комната отдыха', image: 'img/rest-room.png', price: 30, bonuses: {coffe: 3, bonus2: 0, bonus3: 0}},
    {id: 'rest-room', name: 'Комната отдыха', image: 'img/rest-room.png', price: 30, bonuses: {coffe: 3, bonus2: 0, bonus3: 0}},
];

function closeWindow(name) {
    document.querySelector(`.${name}`).style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    function generateBuildCard() {
        const buildBox = document.querySelector('.build_menu .card_box');
        buildBox.innerHTML = ''; // Очищаем контейнер перед добавлением новых карточек

        rooms.forEach(room => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <img src="${room.image}" alt="${room.id}">
                <div class="desc_card_box">
                    <div class="head_info_box">
                        <p>${room.name}</p>
                        <div class="price_box">
                            <p>${room.price}</p> 
                            <i class="fa-solid fa-coins"></i>
                        </div>
                    </div>
                    <div class="bonuses_box">
                        <div class="bonus">
                            <i class="fa-solid fa-mug-hot"></i>
                            <p>${room.bonuses.coffe}</p>
                        </div>
                        <div class="bonus">
                            <i class="fa-solid fa-mug-hot"></i>
                            <p>${room.bonuses.bonus2}</p>
                        </div>
                        <div class="bonus">
                            <i class="fa-solid fa-mug-hot"></i>
                            <p>${room.bonuses.bonus3}</p>
                        </div>
                    </div>
                </div>
            `;

            buildBox.appendChild(card);
        });
    }

    document.querySelector('.build-menu-btn').addEventListener('click', () => {
        document.querySelector('.build_menu').style.display = 'flex';
        generateBuildCard();
    });
});
