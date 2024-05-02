import { useState, useEffect } from 'react'
import BarcodeScanner  from 'react-webcam-barcode-scanner'
import './App.css'

function App() {
  const [data, setData] = useState('No Barcode Scanned');
  let logTimeout;

  const handleUpdate = (err, result) => {
    if (result) {
      setData(result.text);
      console.log('Barcode detected:', result.text);
    } else {
      clearTimeout(logTimeout);
      logTimeout = setTimeout(() => {
        console.log('No barcode detected');
      }, 1000); 
    }
  };

  useEffect(() => {
    return () => clearTimeout(logTimeout);
  }, []);
  return (
    <>
       <div className="App" style={{ padding: "5rem 10rem" }}>
      <BarcodeScanner
        onUpdate={handleUpdate}
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
