$(() => {
  let consultBtn = document.getElementById("getConsult")
  let consultModal = document.getElementById("consultModal")
  if (consultBtn && consultModal) {
    consultBtn.addEventListener("click", () => {
      consultModal.style = ""
      let close = consultModal.querySelector("i")
      callModal.custom("fitContent", (showModal, closeModal) => {
        showModal(consultModal)
        close.addEventListener("click", closeModal)
      })
    })
    consultModal.querySelector("button").addEventListener("click", () => {
      validateSection(consultModal).then(() => alert("با موفقیت انجام شد!"))
    })
  }
})
