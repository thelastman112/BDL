import { useEffect } from 'react'
import Data from './Fetch'
import Form from './components/form'

function App() {
  useEffect(() => {
    Data()
  }, [])
  return (
    <>
      <div className="w-full">
        <h1 className="mx-auto my-5 w-max text-xl font-bold">Lokasi Wisata Jawa Timur</h1>
        <div id='form'>
          <Form />
        </div>
        <table className="w-[90vw] mx-auto my-10">
          <thead>
            <tr className="border border-black">
              <td className="border border-black text-center">Nama</td>
              <td className="border border-black text-center">Lokasi</td>
              <td className="border border-black text-center w-[20vw] min-w-[20vw]">Gambar</td>
              <td className="border border-black text-center">Opsi</td>
            </tr>
          </thead>
          <tbody id="tbody"></tbody>
        </table>
      </div>
    </>
  )
}



export default App
