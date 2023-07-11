import insert from './insert'

const Form = () => {
  return (
    <form id='formInsert' className='w-[90vw] mx-auto my-5 flex flex-col'>
      <label>Nama</label>
      <input type="text" id='inputNama' className='m-5 p-3 border border-black rounded-[15px]' placeholder='Masukkan Nama Tempat Wisata' required />
      <label>Lokasi</label>
      <input type="text" id='inputLokasi' className='m-5 p-3 border border-black rounded-[15px]' placeholder='Masukkan Lokasi Wisata' required />
      <label>Gambar</label>
      <input type="text" id='inputGambar' className='m-5 p-3 border border-black rounded-[15px]' placeholder='Masukkan Gambar Wisata' required />
      <button id='submit' onClick={() => insert()} className='border border-black w-fit self-end p-5 rounded-[25px] bg-slate-400 hover:bg-slate-600'>Submit</button>
      <button id='update' className='border border-black w-fit self-end p-5 rounded-[25px] bg-slate-400 hover:bg-slate-600 hidden'>Update</button>
    </form>
  )
}

export default Form