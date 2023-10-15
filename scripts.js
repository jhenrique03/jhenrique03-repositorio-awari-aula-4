const texto1 = "Blog Tecno";
const texto2 =
  "Aqui você encontra notícias, informações e conteúdos do universo da tecnologia.";

const h1js = document.createElement("h1"); // Criar a tag h1
const h3js = document.createElement("h3"); // Criar a tag h3

h1js.textContent = texto1; // Atribuir o texto1 ao elemento <h1> - SUBSTITUI TEXT NODE
h3js.textContent = texto2; // Atribuir o texto2 ao elemento <h3> - SUBSTITUI TEXT NODE

document.body.appendChild(h1js); // Adicionar o h1 ao corpo (body) - INTERESSANTE
document.body.appendChild(h3js); // Adicionar o h3 ao corpo (body) - INTERESSANTE
