'use strict';

const outputElement = document.getElementById('output');

const imgPath = 'img/';

const ourTeam = [
    {
        fullName: 'Wayne Barnett',
        job: 'Founder & CEO',
        profileImage: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        fullName: 'Angela Caroll',
        job: 'Chief Editor',
        profileImage: 'angela-caroll-chief-editor.jpg',
    },
    {
        fullName: 'Walter Gordon',
        job: 'Office Manager',
        profileImage: 'walter-gordon-office-manager.jpg',
    },
    {
        fullName: 'Angela Lopez',
        job: 'Social Media Manager',
        profileImage: 'angela-lopez-social-media-manager.jpg',
    },
    {
        fullName: 'Scott Estrada',
        job: 'Developer',
        profileImage: 'scott-estrada-developer.jpg',
    },
    {
        fullName: 'Barbara Ramos',
        job: 'Graphic Designer',
        profileImage: 'barbara-ramos-graphic-designer.jpg',
    }
];

for (let i = 0; i < ourTeam.length; i++) {
    const member = ourTeam[i];
    console.log(`Name: ${member.fullName}, Job: ${member.job}, Photo: ${member.profileImage}`);
}

function createCard() {
    const containerDiv = document.getElementById('container');
    for (let i = 0; i < ourTeam.length; i++) {
        const member = ourTeam[i];

        let card = document.createElement('div');
        card.classList.add('card');

        const photo = document.createElement('img');
        photo.src = `${imgPath}${member.profileImage}`;
        photo.alt = `Full Name:${member.fullName}`;
        photo.classList.add('photo');
        card.appendChild(photo);

        const nameHeading = document.createElement('h3');
        nameHeading.innerHTML = member.fullName;
        card.appendChild(nameHeading);

        const jobParagraph = document.createElement('p');
        jobParagraph.innerHTML = member.job;
        card.appendChild(jobParagraph);

        containerDiv.append(card);
    }
};

createCard();






