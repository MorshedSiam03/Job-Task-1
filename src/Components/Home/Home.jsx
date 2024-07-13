import Banner from "../Banner/Banner";
import Profile from "../Profile/Profile";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="flex justify-between bg-[#eae8e8] rounded-b-lg items-center w-full max-w-screen-lg mx-auto">
            <Profile></Profile>
            </div>
        </div>
    );
};

export default Home;