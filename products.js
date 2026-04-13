console.log('Produktu skripts strādā!');

const products = [
    {
        produktaId: 1,
        nosaukums: "Zeķītes 1",
        cena: 5.99,
        daudzums: 12,
        attels: "https://media.istockphoto.com/id/1286383486/photo/a-pair-of-hand-knitted-socks-dark-rustic-wooden-background.jpg?s=612x612&w=0&k=20&c=j5jKDizJv5giqGUOa4Uo4jS-EVULCrHCdTh7ly4GGro="
    },
    {
        produktaId: 2,
        nosaukums: "Zeķītes 2",
        cena: 5.99,
        daudzums: 12,
        attels: "https://media.istockphoto.com/id/2022673793/photo/hand-knitted-socks-with-needles-and-yarn-ball-concept-for-handmade-and-hygge-slow-life.jpg?s=612x612&w=0&k=20&c=o8tM6iOhTGjiYf4wEBs25I2olrCtK4xfC_IH7zhGtig="
    },
    {
        produktaId: 3,
        nosaukums: "Zeķītes 3",
        cena: 5.99,
        daudzums: 12,
        attels: "https://media.istockphoto.com/id/1440200277/photo/knitting-handknit-socks-on-a-wooden-floor.jpg?s=612x612&w=0&k=20&c=W09dOr8LEphMIEGUGVRsJlYgtj9NNVVesDI-Mrwc9WE="
    }
];

function loadProducts() {
    console.log("loadProducts funkcija strādā");

    const productGrid = document.getElementById('product-grid');
    console.log("Produktu konteiners:", productGrid);

    if (!productGrid) {
        console.error("Kļūda: Nevar atrast 'product-grid' elementu");
        return;
    }

    products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.id = `product-${product.produktaId}`;

        card.innerHTML = `
            <a target="_blank" href="${product.attels}">
                <img class="card__image"
                    src="${product.attels}"
                    alt="${product.nosaukums}" 
                    title="${product.nosaukums}" />
            </a>
            <div class="card__content">
                <h2 class="card__title">${product.nosaukums}</h2>
                <div class="card__details">
                    <span class="card__price">€${product.cena}</span>
                    <span class="card__count">${product.daudzums} gab</span>
                </div>
            </div>
        `;

        productGrid.appendChild(card);
        console.log("Produkts pievienots:", product.nosaukums);
    });

    console.log("Visi produkti pievienoti!");
}

// Izsaukt funkciju, kad lapa ir ielādējusies
document.addEventListener('DOMContentLoaded', loadProducts);
