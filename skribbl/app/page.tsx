import { useDraw } from "@/hooks/useDraw";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = () => {
  const { canvasRef } = useDraw(drawLine);
  function drawLine({ currentPoint, prevPoint, ctx }: Draw) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = "#000";
    const lineWidth = 5;
    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();
    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <canvas
        height={550}
        width={550}
        className="border border-black rounded-md"
        ref={canvasRef}
      />
    </div>
  );
};

export default page;
