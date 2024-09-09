const rooms = [
    {id: 'rest-room', name: 'Комната отдыха', image: 'img/rest-room.png', price: 30, bonuses: {coffe: 3, bonus2: 0, bonus3: 0}},
    {id: 'meeting-room', name: 'Переговорная', image: 'img/meeting-room.jpg', price: 30, bonuses: {coffe: 3, bonus2: 0, bonus3: 0}},
    {id: 'cafe-room', name: 'Кафе', image: 'img/cafe-room.png', price: 30, bonuses: {coffe: 3, bonus2: 0, bonus3: 0}},
    {id: 'work-room', name: 'Рабочая комната', image: 'img/work-room.jpg', price: 30, bonuses: {coffe: 3, bonus2: 0, bonus3: 0}},
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
            card.id = room.id

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

        const cards = document.querySelectorAll('.build_menu .card');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                localStorage.setItem('setCard', card.id);
                console.log(card.id);
                buildCard()
            });
        });
    });

    function buildCard() {
        const buildBox = document.querySelector('.build_box');
        buildBox.style.display = 'flex';
        // ЗАМЕНИТЬ ПОЗЖЕ НА GRID
    
        const cells = document.querySelectorAll('.build_box .cell');
        let selectedCellId = null;
    
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                selectedCellId = cell.id;
                console.log(selectedCellId);
                updateCard(selectedCellId);
            });
        });
    
        function updateCard(cellId) {
            let setCard = localStorage.getItem('setCard');
            const roomArray = rooms.find(room => room.id === setCard);
            console.log(roomArray);
    
            const editCell = document.getElementById(cellId);
            console.log(editCell);
    
            if (editCell) {
                editCell.innerHTML = `
                    <img src="${roomArray.image}" alt="${roomArray.id}">
                `;
            }
    
            const lastCell = cells[cells.length - 1];
            const lastCellId = parseInt(lastCell.id, 10);
    
            const newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.id = lastCellId + 1;
    
            newCell.innerHTML = `
                <p>+</p>
            `;
    
            buildBox.appendChild(newCell);
        }
    }
    
});
