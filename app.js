const title = document.getElementById('title')
const textArea = document.getElementById('text')
const btnSave = document.querySelector('.btn-save')
const form = document.querySelector('.toolbars')
const fileInput = document.querySelector('.file-input')
const titleInput = document.querySelector('.title-input')

let notyf = new Notyf({
  ripple: true
});

const slugify = str =>
str
.toLowerCase()
.trim()
.replace(/[^\w\s-]/g, '')
.replace(/[\s_-]+/g, '-')
.replace(/^-+|-+$/g, '')

const extractFileToText = (event) => {
  let input = event.target

  const reader = new FileReader()
  reader.onload = () => {
    let text = reader.result
    textArea.value = text
  }
  let fileName = input.files[0].name
  let title = fileName.replace(/\.[^/.]+$/, "")
  titleInput.value = title

  reader.readAsText(input.files[0])
}

fileInput.addEventListener('change', extractFileToText)

form.addEventListener('submit', e => {
  e.preventDefault()
  if (title.value.length === 0 || textArea.value.length === 0) {
    notyf.error("Your notes can't be saved.")
  } else {
    let blob = new Blob([textArea.value], {
      type: "text/plain;charset=utf-8"
    })
    saveAs(blob, `${slugify(title.value)}.txt`)
    notyf.success("Your notes has been downloaded")
    title.value = ""
    textArea.value = ""
  }
})