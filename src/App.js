import './App.css';
import MainPage from "./pages/Main";
import SimpleTopBar from "./components/TopBar/SimpleTopBar";
import TopBarProgress from "react-topbar-progress-indicator";
import SimpleLoading from "./components/Loading/SimpleLoading";
import Player from "./artwork/Animation";
import DotAnimation from "./artwork/Animation";
import Canvas from "./artwork/Canvas";
import ReactPlayer from "react-player/lazy";
import VideoPlayer from "./components/Video/Video";
import useAddLibrary from "./hook/useAddLibrary";
import {useEffect, useState} from "react";
import FPSStats from "react-fps-stats";
/**
 * @returns 
 */
function App() {
    useEffect(() => {
        document.title = `inspire12 frontend`;
    });
    console.log(document.title);
    

    // const [scriptLoaded] = useAddLibrary('https://code.jquery.com/jqery-3.6.0.min.js', 'jQuery');
    return (
        <div className="App">
            <button className={"p-button"}>Default</button>
            <SimpleLoading></SimpleLoading>
            {/*<VideoPlayer*/}
            {/*    url={[*/}
            {/*        'https://www.youtube.com/watch?v=oUFJJNQGwhk',*/}
            {/*        'https://www.youtube.com/watch?v=jNgP6d9HraI'*/}
            {/*    ]}*/}
            {/*/>*/}
            {/*<Canvas></Canvas>*/}
            {/*<DotAnimation></DotAnimation>*/}
            {/*<SimpleLoading></SimpleLoading>*/}
            {/*<YourThing></YourThing>*/}
            {/*<SimpleTopBar></SimpleTopBar>*/}
            {/*<MainPage></MainPage>*/}
        </div>
    );
}

export default App;
