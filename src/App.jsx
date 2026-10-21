import { useState } from "react";

function App (){
  const N = 89;
  const jam = 9;
  const [judul,setJudul] = useState ("kantin Ardi ");

  const style = {
    color : "blue",
    fontSize : "30px",
    fontWeight : "bold"
  }

  return (
    <>
    <p style = {style}>{judul}</p>
    <p>{jam < 12 ? "selamat pagi" : "selamat siang"}</p>
    <p>saldo awal kartu kantin: Rp.{N*1000}</p>
    <button disabled="disabled">bayar</button>
    </>
  )
}

export default App