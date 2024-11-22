// JavaScript para Obter Dados da API (script.js) Para cria os cards de acordo com a API

const apiUrl = 'https://docs.google.com/spreadsheets/d/118Z4lj9UZwHoPJvXpJLGyiBo9r5RCTRnbuD1AUWfniE/edit?usp=sharing';
 

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('cards-container');
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img href="${item.linke_img}" alt="${item.titulo}">
                <h3>${item.titulo}</h3>
                <p>${item.descripción}</p>
                <p>Dias de Servicios: ${item.Dias_de_Servicios}</p>
                <p>Que Icluye: ${item.Incluye}</p>
                <p>Duracion: ${item.duracion}</p>
                <p>Horario de Pickup: ${item.Horario_de_pick_up}</p>

                <p>Politica_de_Menores:${item.Politica_de_Menores}</p>
                <h3>Desde: ${item.Precio_de_Venta}</h3>
                h3>Descuento: ${item.descuentos}</h3>


                <a href="${item.link}" target="_blank">Saiba mais</a>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Erro ao buscar dados:', error));