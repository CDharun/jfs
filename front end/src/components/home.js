import PersistentDrawerLeft from "./searchbar";
import React from "react";
import '../asset/home.css';
import { Link } from "react-router-dom";



function Home(){
    return (
      <><PersistentDrawerLeft /> 
     

     <div className="body">
  <h1>Welcome Home</h1>
  
  <div className="music-panels">
    <div className="panel">
      <a href="">Recommended Song</a>
      <div className="panel-images">
        <Link to="/music1">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689215685/music/Kurumugil-From-Sita-Ramam_co83bb.jpg" alt="s" />
        </Link>
        <Link to="/music2">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689215679/music/Good-Night_gpu6rk.jpg" alt="s" />
        </Link>
        <Link to="/music9">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689215672/music/b_t83wpf.jpg" alt="s" />
        </Link>
        <Link to="/music3">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689215683/music/i_we5n2z.jpg" alt="s" />
        </Link>
        <Link to="/music4">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689216043/music/p_i40res.jpg" alt="s" />
        </Link>
        <Link to="/music5">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689216037/music/artworks-yspyugkMKTDY-0-t500x500_ysscgg.jpg" alt="s" />
        </Link>
        
      </div>
    </div>
  
    {/* <div className="panel">
      <a href="">Trending Song</a>
      <div className="panel-images">
        <Link to="/music2">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689223028/music/download_3_blh5xr.jpg" alt="s" />
        </Link>
        <Link to="/music3">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689222506/music/download_coh5e5.jpg" alt="s" />
        </Link>
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689223028/music/download_3_blh5xr.jpg" alt="s" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689222505/music/download_1_szo1ik.jpg" alt="s" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689216043/music/p_i40res.jpg" alt="s" />
        <Link to="/music7">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689222506/music/download_2_gwkala.jpg" alt="s" />
        </Link>
      </div>
    </div> */}
  
    <div className="panel">
      <a href="">Evergreen Song</a>
      <div className="panel-images">
      <Link to="/music6">
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689221152/music/mallipoo-_l8vnyk.jpg" alt="s" />
        </Link>
        <Link to="/music7">
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689221144/music/images_hbkfht.jpg" alt="s" />
        </Link>
        <Link to="/music8">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689223758/music/saa_obqlde.jpg" alt="s" />
        </Link>
        <Link to="/music6">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689223490/music/images_5_qyammx.jpg" alt="s" />
        </Link>
        <Link to="/music11">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689223489/music/UthamaVillain_posters_aw0no5.jpg" alt="s" />
        </Link>
        <Link to="/music12">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689223488/music/MV5BYjBlOGQ0MzctMTQwYS00M_lwb824.jpg" alt="s" />
        </Link>
      </div>
    </div>
  </div>
</div>

    
    </>
    )
}
export default Home;