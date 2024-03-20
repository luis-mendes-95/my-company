
export const updateMainContent = (buttonText, itemList) => {
    const main = document.querySelector('.main-content');

    const renderCPFContent = () => {
        itemList = itemList || [];
        main.innerHTML = '';

        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.classList.add('data-add-button');
        addButton.addEventListener('click', () => renderModal());
        main.appendChild(addButton);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('data-edit-button');
        main.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('data-delete-button');
        main.appendChild(deleteButton);

        const h2 = document.createElement('h2');
        h2.textContent = 'CPF / CNPJ';
        h2.classList.add('h2-content');
        main.appendChild(h2);

        const table = document.createElement('table');
        table.classList.add('table');
        main.appendChild(table);

        const thead = document.createElement('thead');
        table.appendChild(thead);

        const trHead = document.createElement('tr');
        thead.appendChild(trHead);

        const th1 = document.createElement('th');
        th1.textContent = 'CPF';
        th1.classList.add('table-header');
        trHead.appendChild(th1);

        const th2 = document.createElement('th');
        th2.textContent = 'CNPJ';
        th2.classList.add('table-header');
        trHead.appendChild(th2);

        const th3 = document.createElement('th');
        th3.textContent = 'NOME / RAZÃO SOCIAL';
        th3.classList.add('table-header');
        trHead.appendChild(th3);

        const th4 = document.createElement('th');
        th4.textContent = 'APELIDO / NOME FANTASIA';
        th4.classList.add('table-header');
        trHead.appendChild(th4);

        const th5 = document.createElement('th');
        th5.textContent = 'TIPO';
        th5.classList.add('table-header');
        trHead.appendChild(th5);

        const th6 = document.createElement('th');
        th6.textContent = 'INSCRIÇÃO ESTADUAL';
        th6.classList.add('table-header');
        trHead.appendChild(th6);

        const th7 = document.createElement('th');
        th7.textContent = 'INSCRIÇÃO MUNICIPAL';
        th7.classList.add('table-header');
        trHead.appendChild(th7);

        const th8 = document.createElement('th');
        th8.textContent = 'CEP';
        th8.classList.add('table-header');
        trHead.appendChild(th8);

        const th9 = document.createElement('th');
        th9.textContent = 'RUA';
        th9.classList.add('table-header');
        trHead.appendChild(th9);

        const th10 = document.createElement('th');
        th10.textContent = 'Nº';
        th10.classList.add('table-header');
        trHead.appendChild(th10);

        const th11 = document.createElement('th');
        th11.textContent = 'COMPLEMENTO';
        th11.classList.add('table-header');
        trHead.appendChild(th11);

        const th12 = document.createElement('th');
        th12.textContent = 'BAIRRO';
        th12.classList.add('table-header');
        trHead.appendChild(th12);

        const th13 = document.createElement('th');
        th13.textContent = 'CIDADE';
        th13.classList.add('table-header');
        trHead.appendChild(th13);

        const th14 = document.createElement('th');
        th14.textContent = 'ESTADO';
        th14.classList.add('table-header');
        trHead.appendChild(th14);

        const th15 = document.createElement('th');
        th15.textContent = 'TELEFONE';
        th15.classList.add('table-header');
        trHead.appendChild(th15);

        const th16 = document.createElement('th');
        th16.textContent = 'CELULAR';
        th16.classList.add('table-header');
        trHead.appendChild(th16);

        const th17 = document.createElement('th');
        th17.textContent = 'E-MAIL';
        th17.classList.add('table-header');
        trHead.appendChild(th17);

        const th18 = document.createElement('th');
        th18.textContent = 'SITE';
        th18.classList.add('table-header');
        trHead.appendChild(th18);

        const tbody = document.createElement('tbody');
        table.appendChild(tbody);

        for (let i = 0; i < 5; i++) {
            const tr = document.createElement('tr');
            tbody.appendChild(tr);

            const td1 = document.createElement('td');
            td1.textContent = 'CPF Value';
            td1.classList.add('table-cell');
            tr.appendChild(td1);

            const td2 = document.createElement('td');
            td2.textContent = 'CNPJ Value';
            td2.classList.add('table-cell');
            tr.appendChild(td2);

            const td3 = document.createElement('td');
            td3.textContent = 'Nome / Razão Social Value';
            td3.classList.add('table-cell');
            tr.appendChild(td3);

            const td4 = document.createElement('td');
            td4.textContent = 'Apelido / Nome Fantasia Value';
            td4.classList.add('table-cell');
            tr.appendChild(td4);

            const td5 = document.createElement('td');
            td5.textContent = 'Tipo Value';
            td5.classList.add('table-cell');
            tr.appendChild(td5);

            const td6 = document.createElement('td');
            td6.textContent = 'Inscrição Estadual Value';
            td6.classList.add('table-cell');
            tr.appendChild(td6);

            const td7 = document.createElement('td');
            td7.textContent = 'Inscrição Municipal Value';
            td7.classList.add('table-cell');
            tr.appendChild(td7);

            const td8 = document.createElement('td');
            td8.textContent = 'CEP Value';
            td8.classList.add('table-cell');
            tr.appendChild(td8);

            const td9 = document.createElement('td');
            td9.textContent = 'Rua Value';
            td9.classList.add('table-cell');
            tr.appendChild(td9);

            const td10 = document.createElement('td');
            td10.textContent = 'Nº Value';
            td10.classList.add('table-cell');
            tr.appendChild(td10);

            const td11 = document.createElement('td');
            td11.textContent = 'Complemento Value';
            td11.classList.add('table-cell');
            tr.appendChild(td11);

            const td12 = document.createElement('td');
            td12.textContent = 'Bairro Value';
            td12.classList.add('table-cell');
            tr.appendChild(td12);

            const td13 = document.createElement('td');
            td13.textContent = 'Cidade Value';
            td13.classList.add('table-cell');
            tr.appendChild(td13);

            const td14 = document.createElement('td');
            td14.textContent = 'Estado Value';
            td14.classList.add('table-cell');
            tr.appendChild(td14);

            const td15 = document.createElement('td');
            td15.textContent = 'Telefone Value';
            td15.classList.add('table-cell');
            tr.appendChild(td15);

            const td16 = document.createElement('td');
            td16.textContent = 'Celular Value';
            td16.classList.add('table-cell');
            tr.appendChild(td16);

            const td17 = document.createElement('td');
            td17.textContent = 'E-mail Value';
            td17.classList.add('table-cell');
            tr.appendChild(td17);

            const td18 = document.createElement('td');
            td18.textContent = 'Site Value';
            td18.classList.add('table-cell');
            tr.appendChild(td18);
        }
    };

    const renderProdutosContent = () => {
        itemList = itemList || [];
        main.innerHTML = '';
        
        const h2 = document.createElement('h2');
        h2.textContent = 'Content for PRODUTOS';
        h2.classList.add('h2-content');
        main.appendChild(h2);
        
        const table = document.createElement('table');
        table.classList.add('table');
        main.appendChild(table);
        
        const thead = document.createElement('thead');
        table.appendChild(thead);
        
        const trHead = document.createElement('tr');
        thead.appendChild(trHead);
        
        const th1 = document.createElement('th');
        th1.textContent = 'CÓDIGO';
        th1.classList.add('table-header');
        trHead.appendChild(th1);
        
        const th2 = document.createElement('th');
        th2.textContent = 'DESCRIÇÃO';
        th2.classList.add('table-header');
        trHead.appendChild(th2);
        
        const th3 = document.createElement('th');
        th3.textContent = 'CUSTO';
        th3.classList.add('table-header');
        trHead.appendChild(th3);
        
        const th4 = document.createElement('th');
        th4.textContent = 'PREÇO';
        th4.classList.add('table-header');
        trHead.appendChild(th4);
        
        const th5 = document.createElement('th');
        th5.textContent = 'MARGEM';
        th5.classList.add('table-header');
        trHead.appendChild(th5);
        
        const th6 = document.createElement('th');
        th6.textContent = 'FORNECEDOR';
        th6.classList.add('table-header');
        trHead.appendChild(th6);
        
        const th7 = document.createElement('th');
        th7.textContent = 'ESTOQUE';
        th7.classList.add('table-header');
        trHead.appendChild(th7);
        
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        
        itemList.forEach(item => {
            const tr = document.createElement('tr');
            tbody.appendChild(tr);
            
            const td1 = document.createElement('td');
            td1.textContent = item.codigo;
            td1.classList.add('table-cell');
            tr.appendChild(td1);
            
            const td2 = document.createElement('td');
            td2.textContent = item.descricao;
            td2.classList.add('table-cell');
            tr.appendChild(td2);
            
            const td3 = document.createElement('td');
            td3.textContent = item.custo;
            td3.classList.add('table-cell');
            tr.appendChild(td3);
            
            const td4 = document.createElement('td');
            td4.textContent = item.preco;
            td4.classList.add('table-cell');
            tr.appendChild(td4);
            
            const td5 = document.createElement('td');
            td5.textContent = item.margem;
            td5.classList.add('table-cell');
            tr.appendChild(td5);
            
            const td6 = document.createElement('td');
            td6.textContent = item.fornecedor;
            td6.classList.add('table-cell');
            tr.appendChild(td6);
            
            const td7 = document.createElement('td');
            td7.textContent = item.estoque;
            td7.classList.add('table-cell');
            tr.appendChild(td7);
        });
        
        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.classList.add('data-add-button');
        main.appendChild(addButton);
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('data-edit-button');
        main.appendChild(editButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('data-delete-button');
        main.appendChild(deleteButton);
    };

    const renderVendasContent = () => {
        itemList = itemList || [];
        main.innerHTML = '';
        
        const h2 = document.createElement('h2');
        h2.textContent = 'Content for VENDAS';
        h2.classList.add('h2-content');
        main.appendChild(h2);
        
        const ul = document.createElement('ul');
        ul.classList.add('ul-list');
        main.appendChild(ul);
        
        itemList.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        
        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.classList.add('data-add-button');
        main.appendChild(addButton);
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('data-edit-button');
        main.appendChild(editButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('data-delete-button');
        main.appendChild(deleteButton);
    };

    const renderOSContent = () => {
        itemList = itemList || [];
        main.innerHTML = '';
        
        const h2 = document.createElement('h2');
        h2.textContent = 'Content for OS';
        h2.classList.add('h2-content');
        main.appendChild(h2);
        
        const ul = document.createElement('ul');
        ul.classList.add('ul-list');
        main.appendChild(ul);
        
        itemList.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        
        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.classList.add('data-add-button');
        main.appendChild(addButton);
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('data-edit-button');
        main.appendChild(editButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('data-delete-button');
        main.appendChild(deleteButton);
    };

    const renderComprasContent = () => {
        itemList = itemList || [];
        main.innerHTML = '';
        
        const h2 = document.createElement('h2');
        h2.textContent = 'Content for COMPRAS';
        h2.classList.add('h2-content');
        main.appendChild(h2);
        
        const ul = document.createElement('ul');
        ul.classList.add('ul-list');
        main.appendChild(ul);
        
        itemList.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        
        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.classList.add('data-add-button');
        main.appendChild(addButton);
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('data-edit-button');
        main.appendChild(editButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('data-delete-button');
        main.appendChild(deleteButton);
    };

    const renderAReceberContent = () => {
        itemList = itemList || [];
        main.innerHTML = '';
        
        const h2 = document.createElement('h2');
        h2.textContent = 'Content for A RECEBER';
        h2.classList.add('h2-content');
        main.appendChild(h2);
        
        const ul = document.createElement('ul');
        ul.classList.add('ul-list');
        main.appendChild(ul);
        
        itemList.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        
        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.classList.add('data-add-button');
        main.appendChild(addButton);
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('data-edit-button');
        main.appendChild(editButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('data-delete-button');
        main.appendChild(deleteButton);
    };

    const renderAPagarContent = () => {
        itemList = itemList || [];
        main.innerHTML = '';
        
        const h2 = document.createElement('h2');
        h2.textContent = 'Content for A PAGAR';
        h2.classList.add('h2-content');
        main.appendChild(h2);
        
        const ul = document.createElement('ul');
        ul.classList.add('ul-list');
        main.appendChild(ul);
        
        itemList.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        
        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.classList.add('data-add-button');
        main.appendChild(addButton);
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('data-edit-button');
        main.appendChild(editButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('data-delete-button');
        main.appendChild(deleteButton);
    };

    const renderArquivosContent = () => {
        itemList = itemList || [];
        main.innerHTML = '';
        
        const h2 = document.createElement('h2');
        h2.textContent = 'Content for ARQUIVOS';
        h2.classList.add('h2-content');
        main.appendChild(h2);
        
        const ul = document.createElement('ul');
        ul.classList.add('ul-list');
        main.appendChild(ul);
        
        itemList.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        
        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.classList.add('data-add-button');
        main.appendChild(addButton);
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('data-edit-button');
        main.appendChild(editButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('data-delete-button');
        main.appendChild(deleteButton);
    };

    switch (buttonText) {
        case 'CPF / CNPJ':
            renderCPFContent();
            break;
        case 'PRODUTOS':
            renderProdutosContent();
            break;
        case 'VENDAS':
            renderVendasContent();
            break;
        case 'OS':
            renderOSContent();
            break;
        case 'COMPRAS':
            renderComprasContent();
            break;
        case 'A RECEBER':
            renderAReceberContent();
            break;
        case 'A PAGAR':
            renderAPagarContent();
            break;
        case 'ARQUIVOS':
            renderArquivosContent();
            break;
        default:
            main.textContent = 'Default content';
    }
};

