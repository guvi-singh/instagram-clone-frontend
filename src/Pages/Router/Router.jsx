import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Profile from "../Profile/Profile";
import Story from "../Story/Story";
import Auth from "../Auth/Auth";
import { useLocation } from "react-router-dom";
import EditAccountDetails from "../../Components/EditAccount/EditAccountDetails";
function Router() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/signup" ? (
        <div className='flex'>
          <div className='w-[20%] border border-l-slate-500 '>
            <Sidebar></Sidebar>
          </div>
          <div className=' w-full '>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/:username' element={<Profile />} />
              <Route path='/story' element={<Story></Story>} />
              <Route path='/comment/:postId' element={<HomePage></HomePage>} />
              <Route
                path='/account/edit'
                element={<EditAccountDetails></EditAccountDetails>}
              />
            </Routes>
          </div>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path='/signup' element={<Auth />} />
            <Route path='/login' element={<Auth></Auth>} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default Router;
