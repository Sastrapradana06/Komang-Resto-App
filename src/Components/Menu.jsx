import { useDataApp } from "../Context/App-context-"
import '../font.css'

export default function Menu() {
    const [, dispatch] = useDataApp()

    return (
        <div className="menu border-1 border-white w-1/5 text-center h-[87vh] bg-teal-900 text-white font-serif uppercase">
            <div className="border-b-1 border-black p-2 bg-slate-700 ">
                <h1 className="font-judul">Jenis Menu</h1>
            </div>
            <div className="flex flex-col gap-6 mt-10 font-mono">
                <button onClick={() => dispatch({type: 'Makanan'})} className="w-max m-auto focus:border-1 p-1 rounded-lg border-white hover:text-[1.3rem] duration-200 ease-in-out">Makanan</button>
                <button onClick={() => dispatch({type: 'Minuman'})} className="w-max m-auto focus:border-1 p-1 rounded-lg border-white hover:text-[1.3rem] duration-200 ease-in-out">Minuman</button>
                <button onClick={() => dispatch({type: 'Seafood'})} className="w-max m-auto focus:border-1 p-1 rounded-lg border-white hover:text-[1.3rem] duration-200 ease-in-out">SeaFood</button>
            </div>
        </div>
    )
}