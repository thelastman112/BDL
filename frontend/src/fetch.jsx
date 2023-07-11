import axios from 'axios'
import del from './components/delete'
import { getForm } from './components/update'

const Data = async () => {
  const fetched =  await axios.get('http://localhost:9000/wisata') 
  .then((response) => response.data)
  const fetchedData = fetched.wisata
  fetchedData.forEach(item => {
    document.querySelector('#tbody').innerHTML += 
    `
    <tr className="border border-black" id="${item._id}">
      <td className="border border-black text-center">${item.nama}</td>
      <td className="border border-black text-center">${item.lokasi}</td>
      <td className="border border-black text-center">
        <img class="imageForm" src="${item.image}" alt="GambarWisata">
      </td>
      <td>
        <button id="update" data-id="${item._id}">update</button>
        <button id="delete" data-id="${item._id}">delete</button>
      </td>
    </tr>
    `
  })
  const btnDelete = document.querySelectorAll('#delete')
  btnDelete.forEach(item => {
    item.addEventListener('click', () => {
      const itemId = item.getAttribute('data-id')
      del(itemId)
    })
  })
  const btnUpdate = document.querySelectorAll('#update')
  btnUpdate.forEach(item => {
    item.addEventListener('click', () => {
      const itemId = item.getAttribute('data-id')
      localStorage.setItem('id', itemId)
      getForm(itemId)
    })
  })
  return fetchedData
}

export default Data