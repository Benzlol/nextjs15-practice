import Image from "next/image";

export default function Zoo() {
  return (
    <div className="flex justify-start items-ead bg-orange-300 h-srceen w-full ">
        <div className="bg-white mx-8 rounded-md h-srceen">
        <Image
          className="hover:scale-110 flex justify-around mx-8"
          src="/icon.svg"
          width={30}
          height={30}
          alt="earts"
        />
        </div>
    </div>
  )
}
