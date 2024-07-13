const Profile = () => {
    return (
        <>
        <div className="grid  mx-auto grid-cols-3 rounded-b-lg">
            <div className="-translate-y-1/2">
                <img src="/src/assets/Profile Pic.png" className="ml-10" alt="" />
            </div>
            <div className="mt-7">
                <h1 className="text-4xl font-bold">John Doe <span>•</span> <span className="font-extralight text-xl text-[#76A4CE]">@johndoe</span> </h1>
                <p className="text-xl font-medium">Astrophotographer 🌌</p>
                <p className="text-xl font-medium">Gamer 👾</p>
            </div>
            <div className="ml-4 mt-20">
                <button className="btn px-10 text-xl font-semibold bg-blue-500 text-white rounded-full">Follow</button>
            </div>
        </div>
            
        </>
    );
};

export default Profile;