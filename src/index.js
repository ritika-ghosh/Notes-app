import {  createNotes } from './notes'
import {  setFilters } from './filters'
import { renderNotes } from './views'


renderNotes()

document.querySelector('#create-notes').addEventListener('click', (e) =>{
    const id = createNotes()
    location.assign(`/note.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e)=>{
  // filters.searchText = e.target.value
   setFilters({
       searchText: e.target.value
   })
   renderNotes()
})

document.querySelector('#filter-by').addEventListener('change', (e)=> {
    filters.sortBy = e.target.value
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
        renderNotes()
    }
})



