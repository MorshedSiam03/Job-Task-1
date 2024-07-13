import Banner from "../Banner/Banner";
import Posts from "./Posts/Posts";
import Profile from "./Profile/Profile";
import RingNav from "./RightNav/RingNav";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="flex justify-between px-4 bg-[#eae8e8] rounded-b-lg font-Lexend w-full max-w-screen-lg  lg:mx-auto">
        <div className="w-4/7 ">
          <Profile></Profile>
          <div className="lg:hidden">
            <RingNav></RingNav>
          </div>
          <Posts></Posts>
        </div>
        <div className="w-3/7 hidden lg:block">
          <RingNav></RingNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
