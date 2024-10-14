"use client";

const App = () => {
  return (
    <div className="h-screen flex ">
      <div className="absolute pointer-events-none  inset-32 shadow-[0_0_15px_rgba(0,0,0,0.3)]"></div>
      {/* LEFT */}
      <div className="bg-[#1AEBB7] flex items-center felx-1 justify-end pl-28 2x1:pr-16">
        <img src="/image 1.png" alt="image" />
      </div>
      {/* RIGHT */}
      <div className="flex flex-col justify-center items-center w-3/5">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="uppercase text-6xl font-bold text-black/70">LOGIN</h1>
          <input
            className="w-[442.27px] h-[58.85px] border-2"
            type="text"
            placeholder="Username"
          />
          <input
            className="w-[442.27px] h-[58.85px] border-2"
            type="password"
            placeholder="Password"
          />
          <div className="flex justify-between gap-6">
            <button className="bg-[#1AEBB7] text-2xl py-2 px-3 font-semibold uppercase flex-grow text-white w-[222px] h-[64px]">
              LOGIN
            </button>
            <div className="flex flex-col font-semibold justify-start items-end text-xl gap-2">
              <a href="#">
                <p>Forgot Password</p>
              </a>
              <a href="#">
                <p>Register</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
