import React, { useState } from "react";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import useLocalStorage from "./customHooks/useLocalStorage";
import Login from "./components/login/Login"
import Dashboard from "./components/Dashboard";
import Calculations from "./components/calculations/Calculations";
import SearchUser from "./components/search/SearchUser";

export const Context = React.createContext(composeWithDevTools())

function App() {
  const [subscriber, setsubscriber] = useState([])
  const [toggle, setToggle] = useState(false)
  const [toggleForm, setToggleForm] = useState(false)
  const [isRefresh, setRefresh] = useState(true)
  const [name, setName] = useLocalStorage("name", "");
  const [subscribedChannel, setSubscribedChannel] = useLocalStorage("subscriber", "")
  const [showText, setShowText] = useState(false)
  const [subscriberID, setSubscriberID] = useState("")
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [login, setLogin] = useState("")
  const [showSubscriber, setShowSubscriber] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filteredUser, setFilteredUser] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [search, setSearch] = React.useState("");

  const filteredSubscribers = React.useMemo(() => {
    console.log("subscriberssssss", subscriber, search)
    return (subscriber ?? []).filter(
      item => item.name.toLowerCase().includes(search)
    );
  }, [search, subscriber]);


  return (
    <Router>
      <Context.Provider value={{
        subscriber, setsubscriber, toggle, setToggle, toggleForm, setToggleForm, isRefresh, setRefresh,
        name, setName, subscribedChannel, setSubscribedChannel, subscribedChannel, setSubscribedChannel, showText, setShowText, subscriberID, setSubscriberID
        , user, setUser, password, setPassword, login, setLogin, showSubscriber, setShowSubscriber, data, setData, page, setPage, totalPages, setTotalPages
        , filteredUser, setFilteredUser, inputValue, setInputValue, filteredSubscribers, setSearch
      }}>
        <div className="App" style={{ display: "flex" }}>
          <div>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/subscriber" element={<Dashboard />} />
              <Route path="/calculation" element={<Calculations />} />
              <Route path="/search" element={<SearchUser />} />
            </Routes>
          </div>
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
