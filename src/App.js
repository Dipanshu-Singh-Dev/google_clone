import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Homepage from "./Pages/Homepage/Homepage";
import SearchPage from "./Pages/SearchPage/Searchpage";
import VideoResults from "./Components/VideoResults/VideoResults";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route>
            <Route index element={<Homepage />} />
            <Route path="search">
              <Route index element={<SearchPage />} />
            </Route>
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
