import React, {useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'

function Kezdolap() {
    const {user} = useContext(AuthContext)
    console.log(user)
  return (
    <div>
      {user?user.name:"Nincs bejelentkezett felhasználó"}
    </div>
  );
}

export default Kezdolap
