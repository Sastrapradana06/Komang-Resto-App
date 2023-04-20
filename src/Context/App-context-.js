import { createContext, useReducer, useContext} from "react";
import { DataMakanan, DataMinuman, DataSeafood } from "../Data/Menu-resto";

// + Reducer
    export const AppContext = createContext({})
    export const useDataApp = () => {
        return useContext(AppContext)
    }

    function reducer(state, action) {
        switch(action.type) {
            case 'Makanan':
                return {...state, dataTampil: DataMakanan}
            case 'Minuman':
                return {...state, dataTampil: DataMinuman}
            case 'Seafood':
                return {...state, dataTampil: DataSeafood}
            case 'DaftarPesanan':
                return {...state, daftarPesanan: action.payload}
            case 'TotalBayar':
                return {...state, total: action.payload}
            default:
                throw new Error();
        }
    }

    const initialState = {
        makanan: DataMakanan,
        minuman: DataMinuman,
        seafood: DataSeafood,
        dataTampil: DataMakanan,
        daftarPesanan: [],
        total: 0
    }


    export const AppProvider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState)
    
        const AppContextValue = [state, dispatch]
        return (
            <AppContext.Provider value={AppContextValue}>
                {children}
            </AppContext.Provider>
        )
    }





















    // + Use Context
//     export const AppContext = createContext({})
    
//     export const useDataApp = () => {
//         return useContext(AppContext)
//     }

// export const AppProvider = ({children}) => {
//     const [makanan, setMakanan] = useState(DataMakanan)
//     const [minuman, setMinuman] = useState(DataMinuman)
//     const [seafood, setSeafood] = useState(DataSeafood)
//     const [dataTampil, setDataTampil] = useState(DataMakanan)

//     const [daftarPesanan, setDaftarPesanan] = useState([])
//     const [total, setTotal] = useState(0)


//     const AppContextValue = {
//         makanan,
//         setMakanan,
//         minuman,
//         setMinuman,
//         seafood,
//         setSeafood,
//         dataTampil,
//         setDataTampil,
//         daftarPesanan,
//         setDaftarPesanan,
//         total,
//         setTotal
//     }
//     return (
//         <AppContext.Provider value={AppContextValue}>
//             {children}
//         </AppContext.Provider>
//     )
// }