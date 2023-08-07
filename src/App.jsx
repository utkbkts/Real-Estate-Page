import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RoutLayout from "./layout/RootLayout.jsx";
import HelpLayout from "./layout/HelpLayout.jsx";
import Sss from "./pages/Sss";
import Contact, { contactAction } from "./pages/Contact";
import NotFound from "./pages/NotFound";
import KonutLayout from "./layout/KonutLayout";
import Konutlar, { Konutlarloader } from "./pages/konutlar/Konutlar";
import Konutdetay, { konutdetayLoader } from "./pages/konutlar/Konutdetay";
import Konuthata from "./pages/konutlar/Konuthata";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RoutLayout />}>
      <Route index element={<Home />} />
      <Route path="/Hakkimizda" element={<About />} />
      <Route path="/help" element={<HelpLayout />}>
        <Route path="sss" element={<Sss />} />
        <Route path="Contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/konutlar" element={<KonutLayout />} errorElement={<Konuthata/>}>
        <Route index element={<Konutlar />} loader={Konutlarloader} />
        <Route path=":id" element={<Konutdetay />} loader={konutdetayLoader} ></Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
