import CreditCardD from "./Pages/CreditCardD";
// import Login from "./Login";
import Pending from "./Pages/Pending";
import Bank from "./Pages/Bank";
import "./index.css";
import BankSlip from "./Pages/BankSlip";
import StudentList from "./Pages/StudentList";
import Alcourse from "./Pages/Alcourse";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import LoginPage from "./Pages/LoginPage";
import Login from "./Pages/Login";
import Doantate from "./components/Doantate";
import MainMenu from "./Pages/MainMenu";
import Donorlist from "./Pages/Donorlist";
import View from "./Pages/View";
import Edit from "./Pages/Edit";
import Blog from "./Pages/Blog";
import Accordion from "./components/Accordion";
import Bloglist from "./components/Bloglist";
import Practice from "./Pages/Practice";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="creditC" element={<CreditCardD />} />
        <Route path="/bank" element={<Bank />} />
        {/* <LoginPage path="/login" element={<LoginPage />} /> */}
        <Route path="bloglist" element={<Bloglist />} />
        <Route path="bloglist" element={<Bloglist />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/accor" element={<Accordion />} />
        <Route path="/bankslip" element={<BankSlip />} />
        <Route path="/student" element={<StudentList />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/course" element={<Alcourse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/donatate" element={<Doantate />} />
        <Route path="/donar" element={<Donorlist />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
      {/* <Pending /> */}
      {/* <Login /> */}
      {/* <Header /> */}
      {/* <Bank /> */}
      {/* <BankSlip /> */}
      {/* <StudentList /> */}
      {/* <Alcourse /> */}
      {/* <MainMenu /> */}
    </>
    //*

    //

    //
  );
}
