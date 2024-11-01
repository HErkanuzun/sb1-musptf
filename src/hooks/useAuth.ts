import { useState, useEffect } from 'react'

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  userType?: 'customer' | 'business';
}

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated')
    const userData = localStorage.getItem('user')
    const userType = localStorage.getItem('userType')
    
    if (authStatus === 'true') {
      setIsAuthenticated(true)
      if (userData) {
        setUser({ ...JSON.parse(userData), userType })
      }
    }
  }, [])

  const login = (userData: User, userType: 'customer' | 'business') => {
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('userType', userType)
    setIsAuthenticated(true)
    setUser({ ...userData, userType })
  }

  const logout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('user')
    localStorage.removeItem('userType')
    setIsAuthenticated(false)
    setUser(null)
    // Reset theme to light
    document.documentElement.classList.remove('dark')
  }

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData }
      localStorage.setItem('user', JSON.stringify(updatedUser))
      setUser(updatedUser)
    }
  }

  return {
    isAuthenticated,
    user,
    login,
    logout,
    updateUser
  }
}

export default useAuth