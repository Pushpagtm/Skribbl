import { useEffect, useRef } from "react"

export const useDraw=()=>{
    const canvasRef=useRef<HTMLCanvasElement>(null)
    useEffect(()=>{

    },[])
    return {canvasRef}
}