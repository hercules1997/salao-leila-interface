import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async (userInfo) => {
    setUserData(userInfo)

    await localStorage.setItem('salaoleila:userData', JSON.stringify(userInfo))
  }

  const logout = async () => {
    await localStorage.removeItem('salaoleila:userData')
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('salaoleila:userData')
      const clientInfoFirebase = await localStorage.getItem('salaoleila:userData')

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo, clientInfoFirebase))
      }
    }

    loadUserData()
  }, [])

  return (
    <UserContext.Provider value={{ putUserData, userData, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with Usercontext')
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
