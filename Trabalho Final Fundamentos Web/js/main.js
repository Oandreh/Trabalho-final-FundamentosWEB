const abrigos = [
    {
        'Nome': 'Abrigo Igreja Católica São Sebastião',
        'Tipo': 'Oficial',
        'Bairro': 'Bela Aliança',
        'Ativamento': 7.00
    },
    {
        'Nome': 'Abrigo Lions Club',
        'Tipo': 'Oficial',
        'Bairro': 'Progresso',
        'Ativamento': 7.00
    },
    {
        'Nome': 'Abrigo Igreja Luterana Bela Aliança',
        'Tipo': 'Oficial',
        'Bairro': 'Bela Aliança',
        'Ativamento': 7.00
    },
    {
        'Nome': 'Abrigo Sociedade Atiradores Bela Aliança',
        'Tipo': 'Oficial',
        'Bairro': 'Bela Aliança',
        'Ativamento': 10.00
    },
    {
        'Nome': 'Abrigo Câmara Junior (JCI)',
        'Tipo': 'Oficial',
        'Bairro': 'Pamplona',
        'Ativamento': 12.00
    },
    {
        'Nome': 'Abrigo Associação Fundo Canoas',
        'Tipo': 'Oficial',
        'Bairro': 'Fundo Canoas',
        'Ativamento': 10.00
    }
];

window.onload = () => {
    const numbers = document.querySelectorAll('.number');

    numbers.forEach((el) => {
        el.addEventListener('click', (e) => {
            const abrigosFiltrados = abrigos.filter(abrigo => parseFloat(abrigo.Ativamento) <= parseFloat(e.target.innerHTML .replace(',', '.')));
            let html = '';
            if (!abrigosFiltrados.length) {
                html = '<tr><td colspan="4">Sem abrigos ativos</td></tr>';
            }
            abrigosFiltrados.forEach(abrigo => {
                html += `<tr><td>${abrigo.Nome}</td><td>${abrigo.Tipo}</td><td>${abrigo.Bairro}</td><td>${abrigo.Ativamento}</td></tr>`;
            });
            const tbody = document.querySelector('#tabela-abrigos');
            tbody.innerHTML = html;
        });
    });
};