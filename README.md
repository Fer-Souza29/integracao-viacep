# integracao-viacep
A simple mobile-friendly page to test the ViaCEP API integration "https://viacep.com.br/" to be used in other projects.

The objective of this simple project was to test the integration of the ViaCEP API, 
the user can enter a Brazilian zip code in the formats ( xxxxx xxx or xxxxx-xxx),
and by clicking on "Pesquisar", the data will be requested from the API and inserted into the inputs.
The zip code typed in the correct pattern with Regex is captured via JS with an event listener on the button,
and sent to the API, which returns the data through the Fetch API, 
the data is validated and inserted into the inputs through the "atribuirdados function.

The "limparDados" function simply adds empty values to the inputs in order to perform a new search.

The regex pattern="\d{5}-?\d{3}"
the ViaCEP API URL `https://viacep.com.br/ws/${valorCep}/json/`;
