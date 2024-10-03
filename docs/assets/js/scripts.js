const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

const searchValue = searchInput.value;
 
  if(searchValue === '') {
    alert('Por favor, insira um termo de pesquisa.'); // Exibir um alerta se o campo estiver vazio
  }

  else {
    alert("Nome do usuário: " + searchValue); //Exibe o nome do usuário se não estiver vazio
  }

  
  
