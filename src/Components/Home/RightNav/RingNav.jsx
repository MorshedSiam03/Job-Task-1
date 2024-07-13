const RingNav = () => {
    return (
        <div className="flex lg:block gap-2">
                                    {/* Photos */}
            <div>
                <h1 className=" mt-2 text-2xl font-bold">Photos</h1>
                    <div className="grid grid-cols-2">
                        <img src="/src/assets/Photos and Vedios/Rectangle 2.png" className="w-20 lg:w-full" alt="" />
                        <img src="/src/assets/Photos and Vedios/Rectangle 1 (1).png" className="w-20 lg:w-full" alt="" />
                        <img src="/src/assets/Photos and Vedios/Rectangle 4.png" className="w-20 lg:w-full" alt="" />
                        <img src="/src/assets/Photos and Vedios/Rectangle 3.png" className="w-20 lg:w-full" alt="" />
                    </div>
                <p className="flex text-blue-600 font-bold cursor-pointer hover:underline justify-end" >More+</p>
            </div>
                                        {/* Video Section */}
            <div>
                <h1 className=" mt-2 text-2xl font-bold">Videos</h1>
                <div>
                    <div className="relative">
                        <img src="/src/assets/Photos and Vedios/Rectangle 5.png" className="w-48"  alt="" />
                        <img src="/src/assets/Btn Player.svg" className="w-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="" />
                    </div>
                    <div className="flex mt-1 gap-1">
                        <div className="relative">
                            <img src="/src/assets/Photos and Vedios/Rectangle 6.png" className="w-[62px]" alt="" />
                            <img src="/src/assets/Btn Player.svg" className="w-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="" />
                        </div>
                    <div className="relative">
                        <img src="/src/assets/Photos and Vedios/Rectangle 6 (1).png" className="w-[62px]" alt="" />
                        <img src="/src/assets/Btn Player.svg" className="w-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="" />  
                    </div>
                    <div className="relative">
                        <img src="/src/assets/Photos and Vedios/Rectangle 6 (2).png" className="w-[62px]" alt="" />
                        <img src="/src/assets/Btn Player.svg" className="w-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RingNav;