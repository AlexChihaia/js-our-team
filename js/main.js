'use strict';

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
    const person = ourTeam[i];
    console.log(`Full Name: ${person.fullName}`);
    console.log(`Job: ${person.job}`);
    console.log(`Profile Image: ${person.profileImage}`);
    console.log("---");
}