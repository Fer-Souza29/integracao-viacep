# integracao-viacep
Uma página simples e mobile-friendly para testar integração com a API do ViaCEP "https://viacep.com.br/" para ser usada em outros projetos.

![testeviacep](https://user-images.githubusercontent.com/97694277/151893848-8a15ce65-b891-491c-8262-d4496af6dd68.gif)

O objetivo desse simples projeto foi testar uma integração com a Api ViaCEP, 
o usuário pode digitar um cep brasileiro nos seguintes formatos ( xxxxxxxx ou xxxxx-xxx),
e clicando em "pesquisar", os dados serão requisitados da API e inseridos nos inputs.
o cep digitado no padrão correto ( com Regex) é capturado via JS com um event listener no botão,
e enviado para a API, que retorna os dados via Fetch API,
os dados são validados e inseridos nos inptus pela função "atruibuirdados"

A função "limparDados" simplesmente adiciona valores vazios nos inputs para poder pesquisar novamente.

Padrão regex ="\d{5}-?\d{3}"

ViaCEP API URL `https://viacep.com.br/ws/${valorCep}/json/`;


==========================================================================


A simple mobile-friendly page to test the ViaCEP API integration "https://viacep.com.br/" to be used in other projects.

The objective of this simple project was to test the integration of the ViaCEP API, 
the user can enter a Brazilian zip code in the formats ( xxxxxxxx or xxxxx-xxx),
and by clicking on "Pesquisar", the data will be requested from the API and inserted into the inputs.
The zip code typed in the correct pattern with Regex is captured via JS with an event listener on the button,
and sent to the API, which returns the data through the Fetch API, 
the data is validated and inserted into the inputs through the "atribuirdados" function.

The "limparDados" function simply adds empty values to the inputs in order to perform a new search.

The regex pattern="\d{5}-?\d{3}"

the ViaCEP API URL `https://viacep.com.br/ws/${valorCep}/json/`;
