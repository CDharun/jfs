 import Login from  './components/login';
 import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import PremiumSubscriptionPage from './components/pro';
import LikedSongs from './sidebar/like';
import PlayList from './sidebar/playlist';
import MusicGenres from './sidebar/genre';
import MusicPlayer from './components/music1';
import AudioPlayer from './page/music1';
import Player from './page/music2';
 import AaudioPlayer from './page/music3';
 import Playerr from './page/music4';
 import Play from './page/music5';
import Playy from './page/music6';
import Playys from './page/music7';
import { Provider } from 'react-redux';
import store from './components/store';
import Feedback from './sidebar/feedback';
function App() {
  return (
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/sign" element={<SignUp />} >
           </ Route>
           <Route path="/login" element={<Login/>}/>
           <Route path="/home" element={ <Home/>}></Route>
           <Route path="/pro" element={<PremiumSubscriptionPage/>}></Route>
           <Route path="/music9" element={<MusicPlayer/>}></Route>
           <Route path="/music1" element={<AudioPlayer/>}></Route>
           <Route path="/music2" element={<Player/>}></Route>
           <Route path="/music3" element={<AaudioPlayer/>}></Route>
           <Route path="/music4" element={<Playerr/>}></Route>
           <Route path="/music5" element={<Play/>}></Route>
           <Route path="/music6" element={<Playy/>}></Route>
           <Route path="/music7" element={<Playys/>}></Route>
           <Route path="/like" element={<LikedSongs/>}></Route>
           <Route path="/play" element={<PlayList/>}></Route>
            <Route path="/do" element={<MusicGenres/>}></Route>
           <Route path="/feedback" element={<Feedback/>}></Route>


      </Routes>
    </BrowserRouter>   
    </Provider>
  );
}

export default App;