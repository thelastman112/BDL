import axios from 'axios'

const del = async (itemId) => {
  const deleted = await axios.delete(`http://localhost:9000/wisata/${itemId}`)
  window.location.reload()
}

export default del