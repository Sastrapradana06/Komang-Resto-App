import { useDataApp } from "../Context/App-context-"

export default function Menu() {
    const context = useDataApp()
    const setDataTampil = context.setDataTampil
    const makanan = context.makanan
    const minuman = context.minuman
    const seafood = context.seafood

    function Makanan() {
        setDataTampil(makanan)
    }

    function Minuman() {
        setDataTampil(minuman)
    }

    function PaketMakanan() {
        setDataTampil(seafood)
    }

    return (
        <div className="menu border-1 border-white w-1/5 text-center h-[87vh] bg-teal-900 text-white font-serif uppercase">
            <div className="border-b-1 border-white p-2">
                <h1>Jenis Menu</h1>
            </div>
            <div className="flex flex-col gap-4 mt-10 font-mono">
                <button onClick={Makanan} className="w-max m-auto focus:border-1 p-1 rounded-lg border-white ">Makanan</button>
                <button onClick={Minuman} className="w-max m-auto focus:border-1 p-1 rounded-lg border-white ">Minuman</button>
                <button onClick={PaketMakanan} className="w-max m-auto focus:border-1 p-1 rounded-lg border-white ">SeaFood</button>
            </div>
        </div>
    )
}