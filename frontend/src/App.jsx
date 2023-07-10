function App() {
  const Data = async () => {
    const fetched = await fetch(`http://localhost:9000/wisata`, {
      method: 'GET',
    }) 
    .then((response) => response.json())
    .catch((err) => {
      console.error(err)
      return []
    })
    console.log(fetched)
  }
  Data()

  return (
    <>
      <div className="w-full">
        <h1 className="mx-auto my-5 w-max text-xl font-bold">Lokasi Wisata Jawa Timur</h1>
        <table className="w-[90vw] m-auto" id="tableData">
          <tbody>
            <tr className="border border-black">
              <td className="text-center w-[7%]">No.</td>
              <td className="border border-black text-center">Nama</td>
              <td className="border border-black text-center">Lokasi</td>
              <td className="border border-black text-center">Gambar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
