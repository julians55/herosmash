import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTE_HOME, ROUTE_RANKING } from "./routes";
import Home from '../pages/Home/Home';
import Ranking from "../pages/Ranking/Ranking";
function MainRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path={ROUTE_HOME} element={<Home />} />
                <Route path={ROUTE_RANKING} element={<Ranking />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;