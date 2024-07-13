const Profile = () => {
    return (
        <>
        <div className="grid mx-auto grid-cols-7 lg:grid-cols-4 rounded-b-lg">
            <div className="-translate-y-1/2 col-span-2 lg:col-span-1 ">
                <img src="/src/assets/Profile Pic.png" className="lg:ml-3 w-24 lg:w-full" alt="" />
            </div>
            <div className="mt-1 lg:mt-7 lg:ml-6 col-span-4 lg:col-span-2">
                <h1 className="flex items-center gap-1 lg:gap-3 text-xl lg:text-4xl font-bold">John Doe <span>•</span> <span className="font-extralight  text-xl text-[#76A4CE]">@johndoe</span> </h1>
                <p className="lg:text-xl text-sm lg:mt-3 font-medium">Astrophotographer 🌌</p>
                <p className="lg:text-xl text-sm font-medium">Gamer 👾</p>
            </div>
            <div className="mt-8 ml-[-20px] lg:ml-6 lg:mt-20 ">
                <button className="py-1 lg:py-2 text-md px-3 lg:px-8 lg:text-xl font-semibold bg-blue-700 text-white rounded-full">Follow</button>
            </div>
        </div>
            
        </>
    );
};

export default Profile;