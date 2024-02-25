"use client";
import { useDraw } from "@/hooks/useDraw";
import { FC, useState } from "react";
import { ChromePicker } from "react-color";
import { FaPencilAlt } from "react-icons/fa";
interface pageProps {}

const page: FC<pageProps> = () => {
  const [color, setColor] = useState("#000");
  const [brushSize, setBrushSize] = useState(3);
  const { canvasRef, onMouseDown, clearCanvas } = useDraw(drawLine);
  function drawLine({ currentPoint, prevPoint, ctx }: Draw) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = color;
    const lineWidth = brushSize;
    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();
    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.fill();
  }
  function downloadCanvas() {
    if (canvasRef.current) {
      const link = document.createElement("a");
      link.download = "canvas_drawing.png";
      link.href = canvasRef.current.toDataURL("image/png");
      link.click();
    } else {
      console.error("Canvas reference is not yet available.");
    }
  }
  return (
    <>
      <div className="w-screen h-screen bg-white flex justify-center items-center gap-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-black">Color Palate</h1>
          <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
          <label htmlFor="brushSize" className="text-black">
            Brush Size:{brushSize}
          </label>
          <input
            type="range"
            id="brushSize"
            min={1}
            max={10}
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
          />

          <button
            onClick={clearCanvas}
            className="bg-purple-400 border-black rounded-md"
          >
            Clear Canvas
          </button>
          <button
            onClick={downloadCanvas}
            className="bg-purple-400 border-black rounded-md"
          >
            Download
          </button>
        </div>
        <canvas
          height={450}
          width={450}
          className="border border-black rounded-md"
          ref={canvasRef}
          onMouseDown={onMouseDown}
          style={{ cursor: FaPencilAlt() }}
        />
      </div>
    </>
  );
};

export default page;
