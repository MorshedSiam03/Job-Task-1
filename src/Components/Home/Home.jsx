import Banner from "../Banner/Banner";
import Profile from "./Profile/Profile";
import RingNav from "./RightNav/RingNav";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="flex justify-between px-4 bg-[#eae8e8] rounded-b-lg  w-full max-w-screen-lg mx-auto">
        <div className="w-5/7">
          <Profile></Profile>
        </div>
        <div className="w-2/7">
          <RingNav></RingNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
