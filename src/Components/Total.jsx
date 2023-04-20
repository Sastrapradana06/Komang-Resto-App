import { useState } from "react"
import { useDataApp } from "../Context/App-context-"


export function Total() {
    const [state, dispatch] = useDataApp()
    const daftarPesanan = state.daftarPesanan
    const total = state.total

    const [cekBayar, setCekBayar] = useState(false)

    function bayar() {
        if(total === 0) {
            return false
        }

        dispatch({
            type: 'DaftarPesanan',
            payload: []
        })

        dispatch({
            type: 'TotalBayar',
            payload: 0
        })
        setCekBayar(true)
    }

    setTimeout(() => {
        setCekBayar(false)
    }, 3000)

    return (
        <div className="total border-1 border-white w-1/5 text-center h-[87vh] bg-teal-900 text-white uppercase font-serif">
            <div className="border-b-1 border-white p-2">
                <h1>Total Pesanan</h1>
            </div>
            <div className="font-mono mt-10 text-sm">
                {daftarPesanan.map((item) => {
                    return (
                            <p key={item.nama} className="font-mono">{item.nama}</p>                            
                        )
                    })}
            </div>
            <div className="font-mono mt-4">
                <p>Total: {total}</p>
                <button className="rounded-full bg-green-500 w-36 mt-4 text-white hover:bg-green-700 duration-300 ease-in-out" onClick={bayar}>Bayar</button>
            </div>
            {cekBayar && (
                <div className="mt-10 m-auto font-mono border-1 border-white p-2 w-[230px] h-[100px] rounded-xl">
                    <h3>Pembayaran Berhasil✅</h3>
                    <p className="mt-4">Terimah Kasih 💖</p>
                </div>
            )}
        </div>
    )
}