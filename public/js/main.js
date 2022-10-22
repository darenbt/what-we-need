const deleteBtn = document.querySelectorAll('.del')
const togetItem = document.querySelectorAll('span.not')
const togetComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteItem)
})

Array.from(togetItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(togetComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteItem(){
    const togetId = this.parentNode.dataset.id
    try{
        const response = await fetch('toget/deleteItem', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'togetIdFromJSFile': togetId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const togetId = this.parentNode.dataset.id
    try{
        const response = await fetch('toget/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'togetIdFromJSFile': togetId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const togetId = this.parentNode.dataset.id
    try{
        const response = await fetch('toget/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'togetIdFromJSFile': togetId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
