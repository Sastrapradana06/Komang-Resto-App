
import { useDataApp } from "../Context/App-context-"
import '../font.css'
import TampilanUtama from "./Tampilan-Utama"

export default function DaftarMenu() {
    const [state, dispatch] = useDataApp()
    const dataTampil = state.dataTampil
    const daftarPesanan = state.daftarPesanan
    const jumlahPesan = state.jumlahPesanan
    const total = state.total

    function jumlahPesanan(nama, harga) {
        dispatch({
            type: 'DaftarPesanan',
            payload: [...daftarPesanan, {
                nama,
                harga
            }]
        })

        dispatch({
            type: 'JumlahPesanan',
            payload: jumlahPesan + 1
        })

        const sumTotal = parseFloat(harga.replace(/\./g, ''));

        dispatch({
            type: 'TotalBayar',
            payload: total + sumTotal
        })
    }
    return (
            <div className="daftar-menu border-1 border-black w-3/5 text-center h-[87vh] bg-slate-700 text-white font-serif uppercase">
                <div className="border-b-1 border-black p-2">
                    <h1 className="font-judul">Daftar Menu</h1>
                </div>
                {!dataTampil && (
                    <TampilanUtama />
                )}
                {dataTampil && (
                    <div className="flex justify-around items-center flex-wrap p-2 gap-2 backdrop-blur-md">
                    {dataTampil.map((data) => {
                        return (
                            <div className="border-1 border-white p-2  bg-cyan-950 rounded-lg text-white cursor-pointer" key={data.Id}>
                                <div className="img">
                                    <img src={data.Img} alt={data.Nama} className="w-40 h-40 object-cover"/>                      
                                </div>
                                <div className="teks">
                                    <p className="font-nama text-[.9rem] mt-1">{data.Nama}</p>
                                    <div className="flex justify-around mt-2">
                                        <p className="font-harga">{data.Harga}</p>
                                        <button className="w-[60px] rounded-lg text-[.8rem] font-btn bg-green-700 hover:bg-green-900 transition-all duration-200" onClick={jumlahPesanan.bind(this, data.Nama, data.Harga)}>Beli</button>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>                    
                )}
            </div>
    )
}