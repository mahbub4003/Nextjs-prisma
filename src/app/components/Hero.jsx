const Hero = () => {
  return (
    <div className=" bg-[url('https://images.unsplash.com/photo-1487611459768-bd414656ea10?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center  bg-cover sm:h-[500px] h-[650px] after:bg-slate-800 after:w-[100%] sm:after:h-[500px] after:h-[650px] after:opacity-50 after:absolute  after:top-[45PX] after:bottom-0 flex flex-col sm:flex-row">
      <div className="sm:flex z-30 flex-1 items-center justify-center m-[20px] ">
        <h1 className="text-3xl sm:text-6xl sm:leading-[70px] font-bold sm:text-white text-[#f7f3f3fa]  rounded-lg  p-[20px] ">
          The best place to discover, read{"  "}
          <span className="border border-solid border-black rounded-full px-[5px] bg-[#77dada3d]">
            &
          </span>
          engage with blog.
        </h1>
        <hr className="sm:hidden w-[100%] h-2 opacity-100 bg-white" />
      </div>
      <div className="sm:flex items-center justify-between flex-1 m-[20px] z-20 relative before:relative">
        <div className="sm:flex  before:before-component-1 after:content[''] absolute top-[20px] left-[20px] sm:before:top-[45px] sm:before:right-[-50px] sm:before:rotate-[-30deg] sm:before:h-[330px] before:h-[180px] before:left-[30px] before:top-[60px] before:rotate-[-40deg] shadow-2xl shadow-white">
          <p className=" font-bold text-neutral-50 z-10  p-[20px]">
            To improve your knowledge read the blogs
          </p>
        </div>
        <div className="sm:flex  absolute sm:bottom-[20px] sm:right-[0px]  z-30  sm:before:top-[-310px] sm:before:left-[-80px] after:content[''] sm:before:rotate-[-30deg] sm:before:h-[330px] mt-[250px]  before:before-component-2 before:bottom-[70px] before:rotate-[-40deg] before:right-[100px] before:h-[180px] shadow-2xl shadow-white mb-6 box-border">
          <p className=" font-bold text-neutral-50 z-10  bg-white bg-opacity-30 p-[20px]">
            Read a blog to enhance your knowledge
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
