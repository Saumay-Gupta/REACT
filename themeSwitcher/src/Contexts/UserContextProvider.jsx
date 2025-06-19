import React from 'react'
import UserContext from './UserContext'


const UserContextProvider = ({children})=>{
    const [theme,setTheme] = React.useState('dark');
    return(
        <UserContext.Provider value={{theme,setTheme}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider