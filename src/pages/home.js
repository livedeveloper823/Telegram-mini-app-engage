import Navbar from "../components/Navbar";
import coin from "../assets/dollar.png";

const Home = () => {
  return (
    <div>
      <div className="h-[90vh] w-[100vw]">
        <div className="flex justify-between px-10 mt-5">
          <p>Name : Rank</p>
          <p className="scale-125"><i class="bi bi-gear-fill"></i></p>
        </div>
        <div className="w-full text-white text-center">
          <div className="flex justify-around mt-3">
            <div className="bg-blue-600 rounded-2xl px-5 py-3 hover:translate-y-1 duration-150">
              <p>Earn per Tap</p>
              <p className="flex justify-center items-center gap-1">
                <img src={coin} alt="" width={20} />
                +8
              </p>
            </div>
            <div className="bg-blue-600 rounded-2xl px-5 py-3 hover:translate-y-1 duration-150">
              <p>Earn per Tap</p>
              <p>1M</p>
            </div>
            <div className="bg-blue-600 rounded-2xl px-5 py-3 hover:translate-y-1 duration-150">
              <p>Earn per Tap</p>
              <p>+612.5K</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-5xl text-blue-600 font-bold">TOTAL E4C COIN</p>
          <div className="flex justify-end">
            <p className="text-3xl text-blue-600 font-bold">AVAILABLE COIN</p>
          </div>
          {/* <button className="bg-blue-600 text-white text-xl fonr-bold px-4 py-2 rounded-lg">Start mining</button> */}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
