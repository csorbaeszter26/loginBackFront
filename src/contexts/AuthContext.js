import {createContext, useState} from "react";
import {MyAxios} from "./MyAxios"
import { resolvePath, useNavigate } from "react-router-dom";


export const AuthContext = createContext("")
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const navigacio=useNavigate()

    const csrf = () => MyAxios.get("/sanctum/csrf-cookie")


    const regisztracio_fv = async (adat) => {
        await csrf(); //eloszor itt mindig lekell kérni ezt a tokent
        try{
            const response = await MyAxios.post('/register', adat)
            console.log("siker")
            getUser()
            navigacio("/")
        }catch(err){
            console.log("hiba történt az adat elküldésekor", err)

        }finally{

        }
    }

    //lekérjük a bejelentkezett felhasználó adatait:
    const getUser = async () => {
        await csrf(); 
        try{
            const response = await MyAxios.get('/api/user')
            console.log(response.data);
            setUser(response.data)
            console.log(user)
        }catch(err){
            console.log("hiba ", err)

        }finally{

        }
    }
    //kijelentkezés:
    const kijelentkezes_fv = async () => {
        await csrf(); 
        try{
            const response = await MyAxios.post('/logout')
            console.log("sikeres kijelentkezés")
            navigacio("/regisztracio")
        }catch(err){
            console.log("hiba történt a kijelentkezéskor", err)

        }finally{

        }
    }


    return(
        <AuthContext.Provider value={{ regisztracio_fv, kijelentkezes_fv, user }}>
            {children}
        </AuthContext.Provider>
    )
}



