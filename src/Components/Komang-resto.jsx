import Menu from "./Menu";
import { Total } from "./Total";
import DaftarMenu from "./Daftar-menu";

export default function KomangResto() {
    return (
        <div className="container border-x-1 border-t-1 border-black flex justify-between items-center w-full m-auto">
            <Menu />
            <DaftarMenu />
            <Total />
        </div>
    )
}