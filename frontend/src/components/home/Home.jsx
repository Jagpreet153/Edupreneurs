// import React from 'react'
import home_svg from '../../assets/home_svg.svg'
import { Link } from 'react-router-dom'
function Home(){
    return(
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={home_svg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
     
      <Link to ='/signup'><button className="m-2 btn btn-primary">Sign Up</button></Link>
      <Link to ='/login'><button className="m-2 btn btn-primary">Login</button></Link>
    </div>
  </div>
</div>
    )
} 

export default Home;