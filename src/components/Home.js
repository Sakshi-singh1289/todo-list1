import { useState, useEffect } from 'react';
import axios from 'axios';
// import { Logout } from './Logout';
import { Navbar } from './Navbar';

const Home = () => {

     const [itemText, setItemText] = useState('');
     const [listItems, setListItems] = useState(['ghhj', 'bkk']);
     const [isUpdating, setIsUpdating] = useState('');
     const [updateItemText, setUpdateItemText] = useState('');



     //add new todo item to database
     const addItem = async (e) => {
          e.preventDefault();
          try {
               const res = await axios.post('http://localhost:5500/api/item', { item: itemText })
               setListItems(prev => [...prev, Object.values(res.data)]);
               setItemText('');
               fetch();
          } catch (err) {
               console.log(err);
          }
     }

     const fetch = () => {
          axios.get('http://localhost:5500/api/items').then((res) => {
               console.log(Object.values(res.data))
               setListItems(Object.values(res.data));
               console.log('render')

          })
     }

     //Create function to fetch all todo items from database -- we will use useEffect hook
     useEffect(() => {

          fetch();


     }, []);

     // Delete item when click on delete
     const deleteItem = async (id) => {
          try {
               const res = await axios.delete(`http://localhost:5500/api/item/${id}`)
               const newListItems = listItems.filter(item => item._id !== id);
               setListItems(newListItems);
          } catch (err) {
               console.log(err);
          }
     }

     //Update item
     const updateItem = async (e) => {
          e.preventDefault()
          try {
               const res = await axios.put(`http://localhost:5500/api/item/${isUpdating}`, { item: updateItemText })
               console.log(res.data)
               const updatedItemIndex = listItems.findIndex(item => item._id === isUpdating);
               const updatedItem = listItems[updatedItemIndex].item = updateItemText;
               setUpdateItemText('');
               setIsUpdating('');
          } catch (err) {
               console.log(err);
          }
     }

     //before updating item we need to show input field where we will create our updated item
     const renderUpdateForm = () => (
          <form className="update-form" onSubmit={(e) => { updateItem(e) }} >
               <input className="update-new-input" type="text" placeholder="New Item" onChange={e => { setUpdateItemText(e.target.value) }} value={updateItemText} />
               <button className="update-new-btn" type="submit">Update</button>
          </form>
     )

     return (
          <>
          <Navbar />
          <div className="App">
               <h1>Todo List</h1>
               <form className="form" onSubmit={e => addItem(e)}>
                    <input type="text" placeholder='Add Todo Item' onChange={e => { setItemText(e.target.value) }} value={itemText} />
                    <button type="submit">Add</button>
               </form>
               <div className="todo-listItems">
                    <ul>
                         {
                              listItems.map(item => (

                                   <li className="todo-item">
                                        {
                                             isUpdating === item._id
                                                  ? renderUpdateForm()
                                                  : <>
                                                       <p className="item-content">{item.item}</p>
                                                       <button className="update-item" onClick={() => { setIsUpdating(item._id) }}>Update</button>
                                                       <button className="delete-item" onClick={() => { deleteItem(item._id) }}>Delete</button>
                                                  </>
                                        }

                                   </li>
                              ))
                         }

                    </ul>
               </div>
          </div>
          </>
     )
}

export default Home