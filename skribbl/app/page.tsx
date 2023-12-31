import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <canvas
        height={550}
        width={550}
        className="border border-black rounded-md"
      />
    </div>
  );
};

export default page;
