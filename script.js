/*Menu Escondido Bars */
document.addEventListener("DOMContentLoaded", function() {
    const toggleMenuButton = document.getElementById("toggle-menu");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");

    let menuOpen = false;

    function openMenu() {
        menu.style.display = "block";
        toggleMenuButton.textContent = "☰";
        overlay.style.display = "block";
        menuOpen = true;
    }

    function closeMenu() {
        menu.style.display = "none";
        toggleMenuButton.textContent = "☰";
        overlay.style.display = "none";
        menuOpen = false;
    }

    // Quando o mouse entra no botão
    toggleMenuButton.addEventListener("mouseenter", function() {
        if (!menuOpen) {
            openMenu();
        }
    });

    // Quando o mouse sai do botão
    toggleMenuButton.addEventListener("mouseleave", function() {
        if (menuOpen) {
            closeMenu();
        }
    });

    // Quando o mouse entra no menu
    menu.addEventListener("mouseenter", function() {
        openMenu();
    });

    // Quando o mouse sai do menu
    menu.addEventListener("mouseleave", function() {
        closeMenu();
    });
});
/*Menu Escondido Bars */

// JavaScript para abrir e fechar o menu
const openMenuBtn = document.getElementById("openLocmenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const menuLoc = document.getElementById("menuLoc");

openMenuBtn.addEventListener("click", () => {
  menuLoc.style.display = "block";
});

closeMenuBtn.addEventListener("click", () => {
  menuLoc.style.display = "none";
});

/*Menu Escondido Tecnologia */
function showTecnologiaSubmenu() {
    const submenu = document.getElementById("submenuTecnologia");
    submenu.style.display = "block";
}

function hideTecnologiaSubmenu() {
    const submenu = document.getElementById("submenuTecnologia");
    submenu.style.display = "none";
}
/*Menu Escondido Tecnologia */

/*Menu Escondido EletroDoméstico */
function showEletrodomesticosSubmenu() {
    const submenu = document.getElementById("submenuEletrodomesticos");
    submenu.style.display = "block";
}

function hideEletrodomesticosSubmenu() {
    const submenu = document.getElementById("submenuEletrodomesticos");
    submenu.style.display = "none";
}
/*Menu Escondido EletroDoméstico */

/*Menu Escondido Escritório */

function showEscritorioSubmenu() {
    const submenu = document.getElementById("submenuEscritorio");
    submenu.style.display = "block";
}

function hideEscritorioSubmenu() {
    const submenu = document.getElementById("submenuEscritorio");
    submenu.style.display = "none";
}
/*Menu Escondido Escritório */

/*Menu Escondido Beleza*/
function showBelezaSubmenu() {
    const submenu = document.getElementById("submenuBeleza");
    submenu.style.display = "block";
}

function hideBelezaSubmenu() {
    const submenu = document.getElementById("submenuBeleza");
    submenu.style.display = "none";
}
/*Menu Escondido Beleza*/

/*Menu Escondido Pet*/
function showPetSubmenu() {
    const submenu = document.getElementById("submenuPet");
    submenu.style.display = "block";
}

function hidePetSubmenu() {
    const submenu = document.getElementById("submenuPet");
    submenu.style.display = "none";
}
/*Menu Escondido Pet*/

/*Menu Escondido Futebol*/
function showFutebolSubmenu() {
    const submenu = document.getElementById("submenuFutebol");
    submenu.style.display = "block";
}

function hideFutebolSubmenu() {
    const submenu = document.getElementById("submenuFutebol");
    submenu.style.display = "none";
}
/*Menu Escondido Futebol*/

/*Menu Escondido Vôlei*/
function showVoleiSubmenu() {
    const submenu = document.getElementById("submenuVolei");
    submenu.style.display = "block";
}

function hideVoleiSubmenu() {
    const submenu = document.getElementById("submenuVolei");
    submenu.style.display = "none";
}
/*Menu Escondido Vôlei*/

/*Menu Escondido Basquete*/
function showBasqueteSubmenu() {
    const submenu = document.getElementById("submenuBasquete");
    submenu.style.display = "block";
}

function hideBasqueteSubmenu() {
    const submenu = document.getElementById("submenuBasquete");
    submenu.style.display = "none";
}
/*Menu Escondido Basquete*/

/*Menu Escondido Atletismo*/
function showAtletismoSubmenu() {
    const submenu = document.getElementById("submenuAtletismo");
    submenu.style.display = "block";
}

function hideAtletismoSubmenu() {
    const submenu = document.getElementById("submenuAtletismo");
    submenu.style.display = "none";
}
/*Menu Escondido Atletismo*/

/*Menu Escondido Ciclismo*/
function showCiclismoSubmenu() {
    const submenu = document.getElementById("submenuCiclismo");
    submenu.style.display = "block";
}

function hideCiclismoSubmenu() {
    const submenu = document.getElementById("submenuCiclismo");
    submenu.style.display = "none";
}
/*Menu Escondido Ciclismo*/

// Função para formatar o campo de CEP
function formatarCEP(cep) {
    cep = cep.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (cep.length > 5) {
      cep = cep.substring(0, 5) + '-' + cep.substring(5, 8); // Formata para o formato XXXXX-XXX
    }
    return cep;
  }
  
  // Função para buscar CEP (substitua esta função com a lógica real da busca)
  function buscarCEP(cep) {
    alert('Buscando CEP: ' + cep); // Simplesmente exibe um alerta, você deve implementar a lógica real aqui
  }
  
  // Referência ao elemento do campo de pesquisa
  const cepInput = document.getElementById('cepInput');
  const buscarCEPButton = document.getElementById('buscarCEP');
  
  // Evento para formatar o campo de CEP
  cepInput.addEventListener('input', function () {
    this.value = formatarCEP(this.value);
  });
  
  // Evento para realizar a busca de CEP
  buscarCEPButton.addEventListener('click', function () {
    const cep = cepInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos para buscar
    buscarCEP(cep); // Chama a função de busca
  });
  
