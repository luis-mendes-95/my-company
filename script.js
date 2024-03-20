import { updateMainContent } from "./src/js/functions.js";

const createCustomHeader = (title, buttons) => {
    const header = document.createElement('header');
    const companyElement = document.createElement('h1');
    companyElement.textContent = 'My Company';
    header.appendChild(companyElement);
    header.classList.add('custom-header');

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    buttons.forEach(button => {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = button.text;
        buttonElement.addEventListener('click', button.action);
        buttonContainer.appendChild(buttonElement);
    });

    header.appendChild(buttonContainer);
    document.body.appendChild(header);
};

const createMainComponent = (title, content) => {
    const main = document.createElement('main');
    main.classList.add('main-content');

    const heading = document.createElement('h1');
    heading.textContent = title;
    main.appendChild(heading);

    const info = document.createElement('p');
    info.textContent = content;
    main.appendChild(info);

    document.body.appendChild(main);
};

const createFooterComponent = (content) => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const info = document.createElement('p');
    info.textContent = content;
    footer.appendChild(info);

    document.body.appendChild(footer);
};

const title = 'MY COMPANY';
const buttons = ['CPF / CNPJ','PRODUTOS','VENDAS','OS','COMPRAS','A RECEBER','A PAGAR','ARQUIVOS']
.map(text => ({
    text,
    action: () => updateMainContent(text)
}));

createCustomHeader(title, buttons);
createMainComponent('Welcome to my website', 'This is some placeholder content for the main component.');
createFooterComponent('© 2021 MY COMPANY');

