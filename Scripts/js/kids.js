let consultBtn = document.getElementById("getConsult")
let consultModal = document.getElementById("consultModal")
if (consultBtn && consultModal) {
  consultBtn.addEventListener("click", () => {
    consultModal.style = ""
    callModal.fitContent(consultModal)
  })
}
