console.log('Brikšu skripts strādā!');

const pants = [
    {
        produktaId: 1,
        nosaukums: "Ziemas Bikses 1",
        cena: 14.99,
        daudzums: 8,
        attels: "https://media.istockphoto.com/id/1219875741/photo/ski-trousers-isolated.jpg?s=1024x1024&w=is&k=20&c=k-EKGFPwNfQIqi2FhFBRxNPk0rYTOOcMEWOJBIkm6rM="
    },
    {
        produktaId: 2,
        nosaukums: "Vasaras Bikses 1",
        cena: 12.99,
        daudzums: 15,
        attels: "https://media.istockphoto.com/id/1131989210/photo/happy-young-smart-casual-man-with-hands-on-waist.jpg?s=2048x2048&w=is&k=20&c=9G4zdLjI_Yjf4Pkcsy_Z9DXxqEU7cVIPLV4_OGyraLo="
    },
    {
        produktaId: 3,
        nosaukums: "Sporta Bikses",
        cena: 16.99,
        daudzums: 12,
        attels: "https://media.istockphoto.com/id/1314274760/photo/sport-pants.jpg?s=2048x2048&w=is&k=20&c=EfN_29YWlLMrt-pAifWEurJHKSjH0jjCHyl7cIbfDfw="
    }
];

function loadPants() {
    console.log("loadPants funkcija strādā");

    const pantsGrid = document.getElementById('pants-grid');
    console.log("Brikšu konteiners:", pantsGrid);

    if (!pantsGrid) {
        console.error("Kļūda: Nevar atrast 'pants-grid' elementu");
        return;
    }

    pants.forEach((pant) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.id = `pants-${pant.produktaId}`;

        card.innerHTML = `
            <a target="_blank" href="${pant.attels}">
                <img class="card__image"
                    src="${pant.attels}"
                    alt="${pant.nosaukums}" 
                    title="${pant.nosaukums}" />
            </a>
            <div class="card__content">
                <h2 class="card__title">${pant.nosaukums}</h2>
                <div class="card__details">
                    <span class="card__price">€${pant.cena}</span>
                    <span class="card__count">${pant.daudzums} gab</span>
                </div>
            </div>
        `;

        pantsGrid.appendChild(card);
        console.log("Bikses pievienotas:", pant.nosaukums);
    });

    console.log("Visas bikses pievienotas!");
}

// Izsaukt funkciju, kad lapa ir ielādējusies
document.addEventListener('DOMContentLoaded', loadPants);
