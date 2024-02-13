// Array para armazenar os itens do estoque
let stock = [];

// Função para adicionar um item ao estoque
function addItem(event) {
    event.preventDefault();

    // Obter os valores dos campos do formulário
    const itemName = document.getElementById('itemName').value;
    const itemQuantity = parseInt(document.getElementById('itemQuantity').value);

    // Verificar se o item já existe no estoque
    const existingItemIndex = stock.findIndex(item => item.name === itemName);

    if (existingItemIndex !== -1) {
        // Se o item já existe, atualize a quantidade
        stock[existingItemIndex].quantity += itemQuantity;
    } else {
        // Se o item não existe, adicione-o ao estoque
        stock.push({ name: itemName, quantity: itemQuantity });
    }

    // Limpar os campos do formulário
    document.getElementById('itemName').value = '';
    document.getElementById('itemQuantity').value = '';

    // Atualizar a lista de itens no estoque
    renderStockList();
}

// Função para renderizar a lista de itens no estoque
function renderStockList() {
    const itemList = document.getElementById('itemList');

    // Limpar a lista antes de renderizar novamente
    itemList.innerHTML = '';

    // Adicionar cada item do estoque à lista
    stock.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.name}:</span> ${item.quantity}`;
        itemList.appendChild(li);
    });
}

// Adicionar um ouvinte de evento para o formulário de adição de item
document.getElementById('addForm').addEventListener('submit', addItem);
