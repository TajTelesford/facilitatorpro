import { IntegrationCardProp } from "@/app/api/util";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const DashboardIntegrationCard = ({
  onClick: IntegrationApiCallback,
  apiCallback: ApiCallBack,
  icon: Icon,
}: IntegrationCardProp) => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleArrowClick = () => {
    setFormVisible(!isFormVisible);
  };
  return (
    <div className="flex flex-col outline justify-between w-3/4 p-6 cursor-pointer">
      <div onClick={handleArrowClick} className="flex justify-between gap-5">
        <div className="flex gap-5">
          {Icon}
          <span>Sync With Instagram</span>
        </div>
        <ArrowRight />
      </div>
      {isFormVisible && (
        <div className="mt-4 w-full">
          {/* Your form content goes here */}
          <form className="w-full">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DashboardIntegrationCard;
