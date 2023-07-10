import axios from 'axios'
import del from './components/delete'

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
      <td className="border border-black text-center">${item.image}</td>
      <td>
        <button id="delete" data-id="${item._id}">delete</button>
      </td>
    </tr>
    `
  })
  const btnDelete = await document.querySelectorAll('#delete')
  btnDelete.forEach(item => {
    item.addEventListener('click', () => {
      const itemId = item.getAttribute('data-id')
      // console.log(itemId)
      del(itemId)
    })
  })
  return fetchedData
}

export default Data