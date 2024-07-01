import Footer from "../components/Footer";

const Mine = () => {
  return (
    <div>
      <div className="h-[90vh] w-[100vw]">
        <div className="w-full text-white text-center">
          <div className="flex justify-around mt-3">
            <div className="bg-blue-600 rounded-2xl px-10 py-5 hover:translate-y-1 duration-150">
              <p>Earn per Tap</p>
              <p>+8</p>
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
        <div>This is the Mine Page.</div>
      </div>
      <Footer />
    </div>
  );
};
export default Mine;
