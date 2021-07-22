const title = document.getElementById('title')
const text = document.getElementById('text')
const btnSave = document.querySelector('.btn-save')
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
    
btnSave.addEventListener('click', () => {
  if (title.value.length === 0 || text.value.length === 0) {
    notyf.error("Your notes can't be saved.")
  } else {
      let blob = new Blob([text.value], {
      type: "text/plain;charset=utf-8"
    })
    saveAs(blob, `${slugify(title.value)}.txt`)
    notyf.success("Your notes has been downloaded")
    title.value = ""
    text.value = ""
  }
})