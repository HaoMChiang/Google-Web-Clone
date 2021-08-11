import Image from "next/image";

const Avatar = ({ url, className }) => {
  return (
    <div
      className={`relative w-10 flex h-10 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    >
      <Image
        src={url}
        layout="fill"
        objectFit="contain"
        alt="profile pic"
        className="rounded-full"
      />
    </div>
  );
};

export default Avatar;
