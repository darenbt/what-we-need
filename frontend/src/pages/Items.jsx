import { useState, useEffect, useMemo} from 'react'
import mainImage from '../assets/image.svg'
import '../style.css'

function Items() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/toget/api').then(r => r.json()).then(({ items }) => {
      setItems(items)
    })
  }, []);

  const left = useMemo(() => items.filter(item => !item.completed).length, [items])

  async function handleSubmit (event) {
    event.preventDefault();
    const form = event.currentTarget
    const response = await fetch(form.action, {
      method: form.method,
      body: JSON.stringify({
        togetItem: form.elements.togetItem.value
      }),
      headers: {'Content-Type' : 'application/json'}
    })
    const newItem = await response.json()
    setItems(prev => [...prev, newItem])
    event.target.reset()
  }

  async function markItem (event, item) {
    await fetch (`/toget/api/mark${item.completed ? 'In' :''}Complete`, {
      method: 'put',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ togetIdFromJSFile: item._id})
    })
    setItems( items.map(i => i._id === item._id ? {...i, completed: !i.completed} : i))
  }

  async function deleteItem (event, item) {
    await fetch ('/toget/api/deleteItem', {
      method: 'delete',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ togetIdFromJSFile: item._id})
    })
    setItems(items.filter(i => i._id !== item._id))
  }

  const itemList = items.map((item) => (
    <li key = {item._id} className = "togetItem">
      <span className = {`${item.completed ? "completed " : "not "}item`} onClick = {event => markItem(event, item)}> {item.toget}</span>   <span className = {item.completed ? "completed fa-solid fa-circle-check" : "not fa-solid fa-circle"} onClick = {event => markItem(event, item)}></span>   <span className = "del fa-solid fa-trash-can" onClick = {event => deleteItem(event, item)}></span>
    </li>
  ))

  return (
    <>
      <img className="image" src={mainImage}/>
      <section className="container">
        <h1>Here's What We Need!</h1> 
         <ul>
            {itemList}
        </ul>
          
        <h2 className="items-left">Items Left: {left}</h2>

        <form action="/toget/api/createItem" method='POST' onSubmit = {handleSubmit}>
            <input type="text" placeholder="What do we need?" name='togetItem' />
            <div className="btn-container">
              <button className="btn" type="submit"> Add Item </button>
            </div>
        </form>
      </section>
      <div className="foot">
      <span>&copy; <a className="personal" target="_blank" href="https://dbthurman.netlify.app">DB Thurman</a></span>
    </div>
    </>
  )
}

export default Items
