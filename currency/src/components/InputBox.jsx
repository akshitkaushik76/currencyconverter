import React from "react";
import {use}
//use id generates unique id
function Inputbox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyoptions=[],
    selectcurrency = "usd",
    amountDisable = false,
    currencydisable  = false,
    className = ""
}) {

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
            <label className="text-black/40 mb-2 inline-block">{label}</label>
            <input className="outline-none w-full bg-transparent py-1.5" type="number" placeholder="amount" disabled={amountDisable} value={amount} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}></input>
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">curreny type</p>
            <select className="rounded-lg px-1 py-2 bg-gray-100 curosor-pointer outline-none" value={selectcurrency} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value) } disabled={currencydisable}>
                {currencyoptions.map((currency)=>(
                    <option key={currency} value={currency}>{currency}</option>//remember the key in loop
                ))}
            </select>
            </div>
        </div>
    )
}
export default Inputbox