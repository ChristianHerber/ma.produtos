async function loadProducts() {
    try {
        // Faz a requisição para o arquivo JSON
        const response = await fetch('products.json'); 
        if (!response.ok) {
            throw new Error('Erro ao carregar o JSON');
        }
        const data = await response.json();

        // Seleciona o elemento onde os produtos serão exibidos
        const productList = document.getElementById('product-list');

        // Mapeia os produtos e cria o HTML para cada um
        data.products.map(product => {
            const productItem = document.createElement('div');
            productItem.className = 'card mb-4 text-center rounded-0 border-light shadow-sm';
            productItem.innerHTML = `
                <div class="card-body">
                    <a href="${product.link}" target="_blank">
                        <img src="${product.image}" alt="${product.title}" class="m-auto fluid-img" width="50%" height="auto">
                        <h4 class="mt-3 text-black">${product.title}</h4>
                        <p class='text-dark'>${product.description}</p>
                        <p class="text-success fs-4"><strong>${product.price}</strong></p>
                        <span href="${product.link}" target="_blank" class="btn btn-lg btn-warning rounded-0 d-flex justify-content-between align-items-center m-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
                            </svg>
                            Quero Comprar
                        </span>
                    </a>
                </div>
            `;

            productList.appendChild(productItem);
        });
    } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
    }
}

loadProducts();