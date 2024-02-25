import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import Admin from './pages/admin/Admin'
import AddData from './pages/admin/AddData'
import Register from './pages/login/Register'

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />


      <Routes>
        <Route path='/adminLogin' element={<Register />} />
        <Route path='/' element={<Admin />}>
          <Route index element={<AddData />} />
          <Route path='content-joylash' element={<AddData />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App