import "./App.css";
import Header from "./components/header/Header";
import SideMenu from "./components/side-menu/SideMenu";
import DataCardSmall from "./components/data-cards/data-card-small/DataCardSmall";
import DataCardBig from "./components/data-cards/data-card-big/DataCardBig";

function App() {
    const smallCardsValue = [
        {
            title: "Products in Data Base",
            value: "135",
            color: "primary",
            icon: "fa-clipboard-list",
        },
        {
            title: "Amount in products",
            value: "$546.456",
            color: "success",
            icon: "fa-dollar-sign",
        },
        {
            title: "Users quantity",
            value: "38",
            color: "warning",
            icon: "fa-user-check",
        },
    ];

    return (
        <div className="App">
            <div id="wrapper">
                <SideMenu />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">
                                    App Dashboard
                                </h1>
                            </div>
                            <div className="row">
                                {smallCardsValue.map((elem, index) => {
                                    return (
                                        <DataCardSmall
                                            key={index}
                                            title={elem.title}
                                            value={elem.value}
                                            icon={elem.icon}
                                            color={elem.color}
                                        />
                                    );
                                })}
                            </div>
                            <div className="row">
                                <DataCardBig />
                                <DataCardBig />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
