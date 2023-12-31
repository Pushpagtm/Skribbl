"use client";
import { useDraw } from "@/hooks/useDraw";
import { FC, useState } from "react";
import { ChromePicker } from "react-color";
interface pageProps {}

const page: FC<pageProps> = () => {
  const [color, setColor] = useState("#000");
  const { canvasRef, onMouseDown, clearCanvas } = useDraw(drawLine);
  function drawLine({ currentPoint, prevPoint, ctx }: Draw) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = color;
    const lineWidth = 3;
    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();
    ctx.fillStyle = lineColor;
    ctx.beginPath();
    // ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }
  return (
    <>
      <div className="w-screen h-screen bg-white flex justify-center items-center gap-2">
        <div className="flex flex-col gap-2">
          <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
          <button
            onClick={clearCanvas}
            className="bg-purple-400 border-black rounded-md"
          >
            Clear Canvas
          </button>
        </div>
        <canvas
          height={450}
          width={450}
          className="border border-black rounded-md"
          ref={canvasRef}
          onMouseDown={onMouseDown}
        />
      </div>
    </>
  );
};

export default page;
