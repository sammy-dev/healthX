type HeroProps = {
  handleConnectWallet: () => void;
};

const Hero = ({ handleConnectWallet }: HeroProps) => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="block text-gray-900">Revolutionizing Healthcare</span>
            <span className="block bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent mt-2">
              Powered by HealthX (HXT)
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            HealthX is transforming the healthcare ecosystem with blockchain technology. 
            Secure, decentralized, and patient-focused.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <button
              className="bg-teal-500 text-white font-semibold text-lg font-rem md:text-xl hover:bg-teal-700 py-2 px-4 rounded-lg transition duration-300"
              onClick={handleConnectWallet}
            >
              Buy $HXT
            </button>
            <a
              href="http://icpex.org/exchange?payToken=ryjl3-tyaaa-aaaaa-aaaba-cai&receiveToken=7o2p3-kaaaa-aaaam-adxsa-cai"
              target="_blank"
              className="bg-white text-teal-600 text-center font-semibold text-lg font-rem md:text-xl hover:text-white py-2 px-4 rounded-lg hover:bg-teal-600 border-2 border-teal-600 transition duration-300"
            >
              Swap on icpex
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
