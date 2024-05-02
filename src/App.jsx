import { useState } from 'react'
import { BarcodeScanner } from 'react-webcam-barcode-scanner'
import './App.css'

function App() {
  const [data, setData] = useState('No Barcode Scanned');

  return (
    <>
      <div className="App" style={{ padding: "5rem 10rem" }}>
      <BarcodeScanner
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData('No Barcode Scanned');
        }}
        width={500}
        height={500}
      />
      <p>Barcode: {data}</p>
    </div>
  );
    </>
  )
}

export default App
