let consultBtn = document.getElementById("getConsult")
let consultModal = document.getElementById("consultModal")
if (consultBtn && consultModal) {
  consultBtn.addEventListener("click", () => {
    consultModal.style = ""
    callModal.fitContent(consultModal)
  })
  consultModal.querySelector("button").addEventListener("click", () => {
    validateSection(consultModal).then(() => callModal.success("با شما تماس گرفته میشود"))
  })
}
