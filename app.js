const title = document.getElementById('title')
const text = document.getElementById('text')
const btnSave = document.querySelector('.btn-save')

const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    
btnSave.addEventListener('click', () => {
  let blob = new Blob([text.value], {
    type: "text/plain;charset=utf-8"
  })
  saveAs(blob, `${slugify(title.value)}.txt`)
})