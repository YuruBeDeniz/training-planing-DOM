function createCard(title, description, color, className) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(className);
    card.style.backgroundColor = color;

    const textWrapper = document.createElement('div');
    textWrapper.classList.add('text-wrapper');
    textWrapper.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
    `;

    const iconWrapper = document.createElement('div');
    iconWrapper.classList.add('icon-wrapper');
    iconWrapper.innerHTML = `
        <span class="material-symbols-outlined" style="color: ${color};">bar_chart</span>
    `;

    card.appendChild(textWrapper);
    card.appendChild(iconWrapper);

    return card;
};

const mainContent = document.getElementById('main-content');
const colors = ['#00cbff', '#009fff', '#0055ff', '#ff3799', '#ac00ff', '#00b749', '#ff7f00', '#ffcc00'];

const titles = ['Mehr Abwechslung, mehr Erfolg!', 'PURES LESEN', 'RELAX & FOKUS', 'WORTSCHATZ', '20-MINUTEN', 'LEVEL-UP', 'WORTSCHATZ & FOKUS', 'GENAUES LESEN'];
const descriptions = ['This is the description of Training Plan 1', 'This is the description of Training Plan 2', 'This is the description of Training Plan 3', 'This is the description of Training Plan 4', 'This is the description of Training Plan 5', 'This is the description of Training Plan 6', 'This is the description of Training Plan 7', 'This is the description of Training Plan 8'];
const classNames = ['info', 'pures-lesen', 'relax-fokus', 'wortschatz', 'zwanzig-minuten', 'level-up', 'wortschatz-fokus', 'genaues-lesen'];

for (let i = 0; i < titles.length; i++) {
    const className = classNames[i];
    const card = createCard(titles[i], descriptions[i], colors[i], className);
    mainContent.appendChild(card);
}


const checkboxes = document.querySelectorAll('input[name="goal"]');
console.log(checkboxes);

function filterCards() {
    const checkedValues = [...checkboxes].filter(checkbox => checkbox.checked).map(e => e.value);
    
   
    const allCards = document.querySelectorAll('.card');

    allCards.forEach(card => {
        card.style.display = 'none';
    });

    if (checkedValues.length === 0) {
        allCards.forEach(card => {
            card.style.display = 'flex';
        });
    } 
    
    if (checkedValues.includes('lesen')) {
        const puresLesenCard = document.querySelectorAll('.card.pures-lesen');
        puresLesenCard.forEach(card => {
            card.style.display = 'flex';
        });

        const levelUpCard = document.querySelectorAll('.card.level-up');
        levelUpCard.forEach(card => {
            card.style.display = 'flex';
        });

        const relaxFocusCard = document.querySelectorAll('.card.relax-fokus');
        relaxFocusCard.forEach(card => {
            card.style.display = 'flex';
        });

        const genauesLesenCard = document.querySelectorAll('.card.genaues-lesen');
        genauesLesenCard.forEach(card => {
            card.style.display = 'flex';
        });
    }

    if (checkedValues.includes('fokus')) {
        const relaxFocusCard = document.querySelectorAll('.card.relax-fokus');
        relaxFocusCard.forEach(card => {
            card.style.display = 'flex';
        });

        const genauesLesenCard = document.querySelectorAll('.card.genaues-lesen');
        genauesLesenCard.forEach(card => {
            card.style.display = 'flex';
        });

        const wortschatzFokusCard = document.querySelectorAll('.card.wortschatz-fokus');
        wortschatzFokusCard.forEach(card => {
            card.style.display = 'flex';
        });
    }

    if (checkedValues.includes('wortschatz')) {
        const wortschatzFokusCard = document.querySelectorAll('.card.wortschatz-fokus');
        wortschatzFokusCard.forEach(card => {
            card.style.display = 'flex';
        });

        const wortschatzCard = document.querySelectorAll('.card.wortschatz');
        wortschatzCard.forEach(card => {
            card.style.display = 'flex';
        });

        const minutenCard = document.querySelectorAll('.card.zwanzig-minuten');
        minutenCard.forEach(card => {
            card.style.display = 'flex';
        });
    }

    if (checkedValues.includes('schreiben')) {
        const wortschatzCard = document.querySelectorAll('.card.wortschatz');
        wortschatzCard.forEach(card => {
            card.style.display = 'flex';
        });

        const minutenCard = document.querySelectorAll('.card.zwanzig-minuten');
        minutenCard.forEach(card => {
            card.style.display = 'flex';
        });

        const levelUpCard = document.querySelectorAll('.card.level-up');
        levelUpCard.forEach(card => {
            card.style.display = 'flex';
        });
    }
}



checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterCards);
});