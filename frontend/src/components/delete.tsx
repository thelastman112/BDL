import axios from 'axios'
import React from 'react'

const del = async (itemId) => {
  const deleted = await axios.delete(`http://localhost:9000/wisata/${itemId}`)
  window.location.reload()
}

export default del