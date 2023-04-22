import { useState } from "react"
import { useDataApp } from "../Context/App-context-"
import '../font.css'

export function Total() {
    const [state, dispatch] = useDataApp()
    const daftarPesanan = state.daftarPesanan
    const jumlahPesan = state.jumlahPesanan
    const total = state.total

    const [notifBayar, setNotifBayar] = useState(false)

    function bayar() {
        dispatch({
            type: 'DaftarPesanan',
            payload: []
        })

        dispatch({
            type: 'TotalBayar',
            payload: 0
        })

        dispatch({
            type: 'JumlahPesanan',
            payload: 0
        })
        setNotifBayar(true)
    }

    function batalPesan(nama, harga) {
        const newDaftarPesanan = daftarPesanan.filter((name) => {
            return name.nama !== nama
        })
        dispatch({
            type: 'DaftarPesanan',
            payload: newDaftarPesanan
        })

        const sumTotal = parseFloat(harga.replace(/\./g, ''));
        dispatch({
            type: 'TotalBayar',
            payload: total - sumTotal
        })

        dispatch({
            type: 'JumlahPesanan',
            payload: jumlahPesan - 1
        })
    }

    setTimeout(() => {
        setNotifBayar(false)
    }, 8000)

    return (
        <div className="total border-1 border-white w-1/5 text-center h-[87vh] bg-teal-900 text-white uppercase font-serif">
            <div className="border-b-1 border-black p-2 bg-slate-700 ">
                <h1 className="font-judul">Total Pesanan</h1>
            </div>
            <div className="mt-4">
                <p className="capitalize font-mono">Jumlah Pesanan: <span className="font-harga ml-2 text-[1.1rem]">{jumlahPesan}</span></p>
            </div>
            <div className="font-mono mt-10 text-sm mb-10">
                {daftarPesanan.map((item) => {
                    return (
                            <p className="font-pesanan capitalize mt-1" key={item.harga}>{item.nama} <span className="ml-1 cursor-pointer" onClick={batalPesan.bind(this, item.nama, item.harga)}>❌</span> </p> 
                        )
                    })}
            </div>
            <div className=" mt-4">
                <p className="font-mono capitalize">Total Harga: <span className="font-harga text-[1rem]">{total}</span></p>
                {total !== 0 ? <button className="rounded-full bg-green-500 w-36 mt-4 text-white hover:bg-green-700 duration-300 ease-in-out" onClick={bayar}>Bayar</button> : <p></p>}
            </div>
            {notifBayar && (
                <div className="mt-10 m-auto font-pesanan capitalize border-1 border-white p-2 w-[230px] h-[100px] rounded-xl">
                    <h3 className="mt-2">Pembayaran Berhasil✅</h3>
                    <p className="mt-4">Terimah Kasih 💖</p>
                </div>
            )}
        </div>
    )
}