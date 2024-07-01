import Footer from "../components/Footer";
import coin from '../assets/dollar.png'

const Exchange = () => {
  return (
    <div>
      <div className="h-[90vh] w-[100vw]">
        <div className="w-full text-white text-center">
          <div className="flex justify-around mt-3">
            <div className="bg-blue-600 rounded-2xl px-10 py-5 hover:translate-y-1 duration-150">
              <p>Earn per Tap</p>
              <p className="flex justify-center items-center gap-1"><img src={coin} alt="" width={20}/>+8</p>
            </div>
            <div className="bg-blue-600 rounded-2xl px-10 py-5 hover:translate-y-1 duration-150">
              <p>Earn per Tap</p>
              <p>1M</p>
            </div>
            <div className="bg-blue-600 rounded-2xl px-10 py-5 hover:translate-y-1 duration-150">
              <p>Earn per Tap</p>
              <p>+612.5K</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <p>Welcome to @engage 24 cash</p>
          <p className="text-5xl text-blue-600 font-bold">0.000points</p>
          <button className="bg-blue-600 text-white text-xl fonr-bold px-4 py-2 rounded-lg">Start mining</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Exchange;
