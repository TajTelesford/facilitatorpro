import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mt-60 p-6 flex flex-col items-center  min-h-screen ">
        <div className="flex flex-col items-center p-10">
          <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
            Automate your social media with Notion
          </h1>
          <span className="text-center text-sm">
            One stop shop for your social media automation, plug and play Notion
            integration
          </span>
        </div>
      </div>
    </div>
  );
}
