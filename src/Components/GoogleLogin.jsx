import React, { useContext } from 'react'
// import AuthContext from '../Context/AuthContext'

const GoogleLogin = () => {
    // const {LoginWithGoogle} = useContext(AuthContext);

    const googleLogin = ()=>{
        LoginWithGoogle()
        .then((result)=>{
            
        })
        .them((error)=>{

        })
    }

  return (
    <div>
              <div className="divider">OR</div>

           <button className='btn btn-neutral w-full' onClick={googleLogin}>GoogleLogin</button>
    </div>
  )
}

export default GoogleLogin