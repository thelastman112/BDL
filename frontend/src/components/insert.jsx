import axios from "axios"

const insert = async () => {
  const namaForm = document.getElementById('inputNama').value
  const lokasiForm = document.getElementById('inputLokasi').value
  const gambarForm = document.getElementById('inputGambar').value
  const wisataData = {
    nama: namaForm,
    lokasi: lokasiForm,
    image: gambarForm
  }
  const inserted = await axios.post(`http://localhost:9000/wisata`, wisataData)
    .then((res) => console.log(res.status))
    .catch((err) => {
      console.error(err)
      return[]
    })
}

export default insert