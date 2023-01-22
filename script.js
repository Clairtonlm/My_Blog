
    var form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
    
      var nome = document.querySelector("#nome").value;
      var telefone = document.querySelector("#telefone").value;
    
      // Envie as informações coletadas para o seu servidor usando uma requisição AJAX
      // ...
    });

    
     
     
     /* JavaScript code 
      // Exemplo de código JavaScript para adicionar interação ao seu blog
      var menuLinks = document.querySelectorAll("header nav ul li a");
      for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener("mouseover", function() {}