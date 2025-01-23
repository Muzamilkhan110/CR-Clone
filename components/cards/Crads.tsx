import React from "react";
import useRouter from "next";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  const router = useRouter;
  const handleClick = () => {};

  return (
    <div className=" rounded-2xl bg-zinc-900 hover:bg-zinc-700">
      <Image
        className="flex my-8 ml-4 h-auto"
        src={imageSrc}
        width={40}
        height={40}
        alt={imageAlt}
      />
      <div className="mx-4 overflow-hidden">
        <h2 className="text-sm md:text-xl font-semibold  ml-1">{title}</h2>
        <p className="py-4 text-neutral-300 text-base">{description}</p>
      </div>
    </div>
  );
};
export default Card;
