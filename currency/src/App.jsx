import { useState } from 'react'
import Inputbox from './components/InputBox';
import usecurrencyinfo from './hooks/usecurrencyinfo';
import './App.css'

function App() {
  const [amount,setamount]  = useState(0);
  const [from, setfrom] = useState("usd");
  const [to,setto] = useState("inr");
  const [convertedamount,setconvertedamount] = useState(0);
  //using custom hook it is a special hook
  const currencyinfo = usecurrencyinfo(from);//data is returned in form of objects so we have to require all keys
  const options =  Object.keys(currencyinfo)
  const swap = ()=>{
    setfrom(to)
    setto(from)
    setconvertedamount(amount)
    setamount(convertedamount)
  }
  const convert = ()=>{
    setconvertedamount(amount*currencyinfo[to])
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <h1 className="text-4xl font-bold text-white">Hello, World!</h1>
    </div>
  );
}

export default App
