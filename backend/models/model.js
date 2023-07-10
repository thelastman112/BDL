const mongoose = require('mongoose')

const wisataSchema = mongoose.Schema({
  nama: {
    type: String,
    required: [true, "Masukkan Nama Tempat"]
  },
  lokasi: {
    type: String,
    required: [true, "Masukkan Lokasi"]
  },
  image: {
    type: String,
    required: [true, "Masukkan Image"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
},
{
  timestampss: true
})

const Wisata = mongoose.model('Wisata', wisataSchema)
module.exports = Wisata