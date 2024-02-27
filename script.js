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
const descriptions = ['Erhalte hier mehr Übungsempfehlungen aus über 10 Jahren Erfahrung und aus mehr als 25.000 virtuellen Klassenstunden. Du verfolgst mehrere Ziele? Ergäanze dein Förderprogramm bis zu 18 Wochen im Voraus mit wenigen Klicks.',
 'Lesekompetenz | Schwer | 3 Wochen', 'Konzentration | Leicht | 3 Wochen', 'Neue Wörter | Leicht | 3 Wochen', 'Lesekompetenz | Mittel | 6 Wochen', 'Lesekompetenz | Mittel | 6 Wochen', 'Lesekompetenz | Mittel | 6 Wochen', 'Textversändnis | Scwher | 3 Wochen'];
const classNames = ['info', 'pures-lesen', 'relax-fokus', 'wortschatz', 'zwanzig-minuten', 'level-up', 'wortschatz-fokus', 'genaues-lesen'];

for (let i = 0; i < titles.length; i++) {
    const className = classNames[i];
    const card = createCard(titles[i], descriptions[i], colors[i], className);
    mainContent.appendChild(card);
}


const goalCardMap = {
    lesen: ['pures-lesen', 'relax-fokus', 'level-up', 'genaues-lesen'],
    fokus: ['relax-fokus', 'wortschatz-fokus', 'genaues-lesen'],
    wortschatz: ['wortschatz', 'zwanzig-minuten', 'wortschatz-fokus'],
    schreiben: ['wortschatz', 'zwanzig-minuten', 'level-up']
};

const goalCheckboxes = document.querySelectorAll('input[name="goal"]');

function filterGoalCards() {
    const checkedValues = [...goalCheckboxes].filter(checkbox => checkbox.checked).map(e => e.value);
    const allCards = document.querySelectorAll('.card');

    allCards.forEach(card => {
        card.style.display = 'none';
    });

    if (checkedValues.length === 0) {
        allCards.forEach(card => {
            card.style.display = 'flex';
        });

        const planingAmount = document.getElementById('plan-amount');
        planingAmount.innerHTML = '';
        return;
    }

    let filteredCardClasses = [];
   

    for (const value of checkedValues) {
        const relatedCardClasses = goalCardMap[value];

        if (filteredCardClasses.length === 0) {
            filteredCardClasses = relatedCardClasses;
        } else {
            filteredCardClasses = filteredCardClasses.filter(className => relatedCardClasses.includes(className));
        }
    }

    const filteredCards = document.querySelectorAll('.card.' + filteredCardClasses.join(', .card.'));
    
    filteredCards.forEach(card => {
        card.style.display = 'flex';
    });

    const planingAmount = document.getElementById('plan-amount');
    planingAmount.innerHTML = `<span>(${filteredCards.length})</span>`;
}

goalCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterGoalCards);
});


const levelCardMap = {
    leicht: ['relax-fokus', 'wortschatz'],
    mittel: ['zwanzig-minuten', 'level-up', 'wortschatz-fokus'],
    schwer: ['pures-lesen', 'genaues-lesen']
};

const levelCheckboxes = document.querySelectorAll('input[name="level"]');

function filterLevelCards() {
    const checkedValues = [...levelCheckboxes].filter(checkbox => checkbox.checked).map(e => e.value);
    const allCards = document.querySelectorAll('.card');

    allCards.forEach(card => {
        card.style.display = 'none';
    });

    if (checkedValues.length === 0) {
        allCards.forEach(card => {
            card.style.display = 'flex';
        });

        const planingAmount = document.getElementById('plan-amount');
        planingAmount.innerHTML = '';
        return;
    }



    let filteredCardClasses = [];
   

    for (const value of checkedValues) {
        const relatedCardClasses = levelCardMap[value];

        if (filteredCardClasses.length === 0) {
            filteredCardClasses = relatedCardClasses;
        } else {
            filteredCardClasses = filteredCardClasses.filter(className => relatedCardClasses.includes(className));
        }
    }

    const filteredCards = document.querySelectorAll('.card.' + filteredCardClasses.join(', .card.'));
    
    filteredCards.forEach(card => {
        card.style.display = 'flex';
    });


    const planingAmount = document.getElementById('plan-amount');
    planingAmount.innerHTML = `<span>(${filteredCards.length})</span>`;
}


levelCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterLevelCards);
});



