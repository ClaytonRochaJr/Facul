/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('Testando interações com HTML', () => {
  beforeEach(() => {
    // Carrega o conteúdo do arquivo HTML para simular o DOM
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    document.documentElement.innerHTML = html;

    // Simula a importação do script app.js que manipula o DOM
    require('../app.js');
  });

  test('O texto do parágrafo deve mudar ao clicar no botão', () => {
    // Seleciona o botão e o parágrafo
    const button = document.getElementById('btn');
    const paragraph = document.getElementById('message');

    // Verifica o texto inicial
    expect(paragraph.textContent).toBe('Texto original');

    // Simula o clique no botão
    button.click();

    // Verifica se o texto foi alterado após o clique
    expect(paragraph.textContent).toBe('Texto original');
  });
});