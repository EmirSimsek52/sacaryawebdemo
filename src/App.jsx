import styles from "./style";
import { Billing,  Footer, Navbar, Stats,  Hero, Araclar } from "./components";
import Information from "./components/Information";
import { BrowserRouter as Router, Routes, Route,Navigate  } from "react-router-dom";
import MainPage from "./components/MainPage";
import NavbarPro from "./components/NavbarPro";
import Sozlesme from "./components/Sozlesme";
const App = () => (
  <div className="bg-primary w-full overflow-hidden">

   <Router>
      <NavbarPro/>
      <Routes>
           <Route  path='/' element={<MainPage/>} />
           <Route path="/Araclar" element={<Araclar/>} />
           <Route path="iletisim" element={<Billing/>} />
           <Route path="hakkimizda" element={<Information/>} />
           <Route path="Sozlesme" element={<Sozlesme/>} />
        </Routes>
    </Router>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>

        <Footer />
      </div>
    </div>
  </div>
);

export default App;