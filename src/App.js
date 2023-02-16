// import React, { useEffect, useRef, useState } from "react";
// import { Container } from "react-bootstrap";
import MainLayout from "./components/layout/main.layout";
import Images from "./components/images";

const App = () => {
  return (
    <>
      <MainLayout>

        <Images title="Image API" description="fetch api dari tridh party" />

      </MainLayout >
    </>
  )
}


// const App = () => {
//   const [getLimit, setLimit] = useState(1)
//   const [getMyName, setMyName] = useState('ahmad')
//   const refMyName = useRef(getMyName)

//   useEffect(() => {
//     setMyName(refMyName.current.value)
//   }, [getLimit])

//   return (
//     <>
//       {getMyName}
//       {getLimit}
//       <br />
//       <button onClick={() => setLimit((nilai) => nilai + 1)}>Tambah</button>
//       <button onClick={() => setLimit((nilai) => nilai - 1)}>Kurang</button>
//       <input ref={refMyName} defaultValue={refMyName.current} />
//       <Testing title="UJI coba NUKLIR" description="kami akan membangun nuklir untuk keamanan sebuah negara" />
//     </>
//   );
// }

export default App;
