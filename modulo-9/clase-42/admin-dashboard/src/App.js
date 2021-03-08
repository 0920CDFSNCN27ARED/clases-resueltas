import "./App.css";
import Header from "./components/header/Header";
import SideMenu from "./components/side-menu/SideMenu";

function App() {
    return (
        <div className="App">
            <div id="wrapper">
                <SideMenu />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Header />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
