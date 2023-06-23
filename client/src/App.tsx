import Chat from "./components/chat/Chat";
import Join from "./components/join/Join";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Join} />
                <Route path="/chat" Component={Chat} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
