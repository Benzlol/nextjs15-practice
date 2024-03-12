import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div className="w-[500px] h-[400px] my-8">
        <Image
          className="hover:scale-110"
          src="/dino.png"
          width={100}
          height={100}
          alt="Dinosaur"
        />
        <div>
          <button className="font-bold my-8 hover:bg-gray-200 hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
            No internet
          </button>
          <p>Try:</p>
          <p className="text-gray-500 ml-[25px]">
            • Checking the network cable, modem, and router
          </p>
          <p className="text-gray-500 ml-[25px]">• Reconnecting to Wi-Fi</p>

          <p className="text-grbg-ay-500 my-8">ERR_INTERNET_DISCONNECTED</p>
          <div className="flex flex-col">
            <Link
              href="about"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-start items-start w-[135px] hover:text-blue-600"
            >
              Go to about page
            </Link>
            <Link
              href="contact"
              className="hover:text-blue-600 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex jusify-start items-start w-[150px] hover:bg-blue-400"
            >
              Go to contact page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
