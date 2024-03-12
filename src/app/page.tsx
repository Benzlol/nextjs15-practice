import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-end items-center h-screen w-full">
      <div className="w-[500px] h-[400px] my-8">
        <Image src="/dino.png" width={100} height={100} alt="Dinosaur" />
        <div>
          <p className="font-bold my-8">No internet</p>
          <p>Try:</p>
          <p className="text-gray-500 ml-[25px]">
          • Checking the network cable, modem, and router
          </p>
          <p className="text-gray-500 ml-[25px]">• Reconnecting to Wi-Fi</p>

          <p className="text-gray-500 my-8">ERR_INTERNET_DISCONNECTED</p>
        </div>
      </div>
    </div>
  );
}
