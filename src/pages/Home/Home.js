import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";
import Widgets from "../../components/widgets/Widgets";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Header />
      <div className='app_body'>
        <div className="division">
          <Sidebar />
        </div>
        <div className="division">
          <Feed />
        </div>
        <div className="division">
          <Widgets />
        </div>
      </div>
    </>
  );
};

export default Home;
