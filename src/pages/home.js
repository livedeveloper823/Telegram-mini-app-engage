import Navbar from "../components/Navbar";
import coin from "../assets/dollar.png";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Total Task Done vs Total coined Earned",
  },
};

const Home = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const webapp = await window?.Telegram?.WebApp?.initDataUnsafe;
      if (webapp && webapp["user"]) {
        setUsername(webapp["user"]["username"] || "Unknown User");
      } else {
        setUsername("Guest");
      }
    };
    fetchUserData();
  }, []);
  return (
    <div>
      <div className="h-[90vh] w-[100vw] max-w-3xl">
        <div className="flex justify-between px-10 mt-5">
          <p>{username} : Rank</p>
          <div
            className="scale-125 relative inline-block"
            onClick={() => setOpen(!open)}
          >
            <i className="bi bi-gear-fill"></i>
          </div>
          {open && (
            <div className="absolute flex flex-col gap-3 right-5 top-12 z-[1] bg-blue-600 shadow-lg shadow-black text-white rounded-lg p-2">
              <div className="hover:bg-blue-200 hover:text-blue-900 px-3 rounded-lg">
                <a href="/languages">Languages</a>
              </div>
              <div className="hover:bg-blue-200 hover:text-blue-900 px-3 rounded-lg">
                <a href="/profile">Profile</a>
              </div>
              <div className="hover:bg-blue-200 hover:text-blue-900 px-3 rounded-lg">
                <a href="/faqs">FAQs</a>
              </div>
              <div className="hover:bg-blue-200 hover:text-blue-900 px-3 rounded-lg">
                <a href="/support">Get a Support</a>
              </div>
            </div>
          )}
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
        </div>
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={data}
          options={options}
          className="mt-20"
        />
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
