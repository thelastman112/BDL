import axios from "axios"

const getForm = async (id) => {
  const fetched = await axios.get(`http://localhost:9000/wisata/${id}`)
    .then(resp => resp.data)
    .catch(err => console.error(err))
  document.getElementById('submit').style.display = 'none'
  document.getElementById('update').style.display = 'block'
  const nama = fetched.wisata.nama
  const lokasi = fetched.wisata.lokasi
  const image = fetched.wisata.image
  document.getElementById('inputNama').value = nama
  document.getElementById('inputLokasi').value = lokasi
  document.getElementById('inputGambar').value = image
  document.getElementById('update').addEventListener('click', async () => {
    const namaForm = document.getElementById('inputNama').value
    const lokasiForm = document.getElementById('inputLokasi').value
    const gambarForm = document.getElementById('inputGambar').value
    const wisataData = {
      nama: namaForm,
      lokasi: lokasiForm,
      image: gambarForm
    }
    console.log(id)
    const put = await fetch(`http://localhost:9000/wisata/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wisataData),
    })
      .then(res => res.json())
      .then(data => data.results)
      .catch(err => console.error(err))
    put()
  })
}

export { getForm }