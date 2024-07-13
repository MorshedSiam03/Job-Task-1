const RingNav = () => {
    return (
        <div>
            <h1 className=" mt-2 text-2xl font-bold">Photos</h1>
            <div className="grid grid-cols-2">
                <img src="/src/assets/Photos and Vedios/Rectangle 2.png" alt="" />
                <img src="/src/assets/Photos and Vedios/Rectangle 1 (1).png" alt="" />
                <img src="/src/assets/Photos and Vedios/Rectangle 4.png" alt="" />
                <img src="/src/assets/Photos and Vedios/Rectangle 3.png" alt="" />
            </div>
            <p className="flex text-blue-600 font-bold cursor-pointer hover:underline justify-end" >More+</p>
            <h1 className=" mt-2 text-2xl font-bold">Videos</h1>
            <div>
                <div className="relative">
                    <img src="/src/assets/Photos and Vedios/Rectangle 5.png"  alt="" />
                    <img src="/src/assets/Btn Player.svg" className="w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="" />
                </div>
                {/* <div className="flex w-20">
                <img src="/src/assets/Photos and Vedios/Rectangle 6 (2).png" alt="" />
                <img src="/src/assets/Photos and Vedios/Rectangle 6 (2).png" alt="" />
                <img src="/src/assets/Photos and Vedios/Rectangle 6 (2).png" alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default RingNav;