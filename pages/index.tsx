import Footer from "components/Footer";
import HomeAbout from "components/Home/HomeAbout";
import HomeDoing from "components/Home/HomeDoing";
import HomeFeature from "components/Home/HomeFeature";
import HomePresent from "components/Home/HomePresent";
import HomeService from "components/Home/HomeService";
import HomeTop from "components/Home/HomeTop";
import Layout from "components/Layout";
import Navbar from "components/Navbar";
import React from "react";

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <div className="mt-16" />
      <HomeTop />
      <div className="mt-12 mb-6">
        <HomeFeature />
      </div>
      <div className="mb-8">
        <HomeAbout />
      </div>
      <div>
        <HomeDoing />
      </div>
      <div>
        <HomeService />
      </div>
      <div>
        <HomePresent />
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
