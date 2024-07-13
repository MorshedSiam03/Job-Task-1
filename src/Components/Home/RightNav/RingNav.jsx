const RingNav = () => {
    return (
        <div className="flex lg:block gap-4 mx-4">
                                    {/* Photos */}
            <div>
                <h1 className=" mt-2 text-2xl font-bold">Photos</h1>
                    <div className="grid grid-cols-2">
                        <img src="https://raw.githubusercontent.com/MorshedSiam03/Job-Task-1/main/src/assets/Photos%20and%20Vedios/Rectangle%202.png" className="w-20 lg:w-full" alt="" />
                        <img src="https://raw.githubusercontent.com/MorshedSiam03/Job-Task-1/main/src/assets/Photos%20and%20Vedios/Rectangle%201%20(1).png" className="w-20 lg:w-full" alt="" />
                        <img src="https://raw.githubusercontent.com/MorshedSiam03/Job-Task-1/main/src/assets/Photos%20and%20Vedios/Rectangle%204.png" className="w-20 lg:w-full" alt="" />
                        <img src="https://raw.githubusercontent.com/MorshedSiam03/Job-Task-1/main/src/assets/Photos%20and%20Vedios/Rectangle%203.png" className="w-20 lg:w-full" alt="" />
                    </div>
                <p className="flex text-blue-600 font-semibold cursor-pointer hover:underline justify-end" >More+</p>
            </div>
                                        {/* Video Section */}
            <div>
                <h1 className=" mt-2 text-2xl font-bold">Videos</h1>
                <div>
                    <div className="relative">
                        <img src="https://raw.githubusercontent.com/MorshedSiam03/Job-Task-1/main/src/assets/Photos%20and%20Vedios/Rectangle%205.png" className="w-48 lg:w-full"  alt="" />
                        <img src="https://raw.githubusercontent.com/MorshedSiam03/Job-Task-1/main/src/assets/Photos%20and%20Vedios/Btn%20Player.png" className="w-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="" />
                    </div>
                    <div className="flex mt-1 gap-1">
                        <div className="relative">
                            <img src="https://raw.githubusercontent.com/MorshedSiam03/Job-Task-1/main/src/assets/Photos%20and%20Vedios/Rectangle%206.png" className="w-[62px] lg:w-[100px]" alt="" />
                            <img src="https://raw.githubusercontent.com/MorshedSiam03/Job-Task-1/main/src/assets/Photos%20and%20Vedios/Btn%20Player.png" className="w-6 lg:w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="" />
                        </div>
                    <div className="relative">
                        <img src="https://raw.githubusercontent.com/MorshedSiam03/Job-Task-1/main/src/assets/Photos%20and%20Vedios/Rectangle%206%20(1).png" className="w-[62px] lg:w-[100px]" alt="" />
                        <img src="https://raw.githubusercontent.com/MorshedSiam03/Job-Task-1/main/src/assets/Photos%20and%20Vedios/Btn%20Player.png" className="w-6 lg:w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="" />  
                    </div>
                    <div className="relative">
                        <img src="https://raw.githubusercontent.com/MorshedSiam03/Job-Task-1/main/src/assets/Photos%20and%20Vedios/Rectangle%206%20(2).png" className="w-[62px] lg:w-[100px]" alt="" />
                        <img src="https://raw.githubusercontent.com/MorshedSiam03/Job-Task-1/main/src/assets/Photos%20and%20Vedios/Btn%20Player.png" className="w-6 lg:w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="" />
                    </div>
                    </div>
                    <div className="mt-4 hidden lg:block">
                        <iframe
                            className="w-full rounded-xl"
                            src="https://www.youtube.com/embed/XHTrLYShBRQ?si=5PqJ_mK8N4s4SmLW"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube Video"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RingNav;