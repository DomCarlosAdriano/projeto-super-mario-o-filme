const butaoTreiler = document.querySelector(".butao-treiler")
const modal = document.querySelector(".modal")
const iframe = document.querySelector("iframe")
const fecharModal = document.querySelector(".fechar-modal")

butaoTreiler.addEventListener("click", () => {
  modal.classList.add("aberto")
  iframe.setAttribute("src", "https://www.youtube.com/embed/Cb4WV4aXBpk")
})

fecharModal.addEventListener("click", () => {
  modal.classList.remove("aberto")
  iframe.setAttribute("src", "")

})