// Seleção dos elementos necessários
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

// Função para abrir o modal e atualizar o conteúdo
const openModal = (preview) => {
    modal.classList.add("open");
    original.classList.add("open");

    // Alterar dinamicamente o texto e a imagem
    const { originalSrc, alt } = preview.dataset;
    original.src = originalSrc;
    caption.textContent = alt;
};

// Adicionar event listener a cada imagem da galeria
previews.forEach(preview => {
    preview.addEventListener("click", () => openModal(preview));
});

// Fechar o modal ao clicar fora da imagem
modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});
