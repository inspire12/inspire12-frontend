import './App.css';
import MainPage from "./pages/Main";
import SimpleTopBar from "./components/TopBar/SimpleTopBar";
import TopBarProgress from "react-topbar-progress-indicator";
import SimpleLoading from "./components/Loading/SimpleLoading";

TopBarProgress.config({
    barColors: {
        "0": "#fff",
        "1.0": "#fff"
    },
    shadowBlur: 5
});

const state = {
    loading: false
}

const YourThing = () => {
    return <div>{<TopBarProgress />}</div>;
};


function App() {
    return (
        <div className="App">
            <SimpleLoading></SimpleLoading>
            {/*<YourThing></YourThing>*/}
            {/*<SimpleTopBar></SimpleTopBar>*/}
            {/*<MainPage></MainPage>*/}
        </div>
    );
}

export default App;
