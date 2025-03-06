import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Rect } from "react-konva";

export default function DrawingBoard() {
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [frame, setFrame] = useState({ x: 0, y: 0, width: 1450, height: 750 });
  const [rectangles, setRectangles] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const startPoint = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (e) => {
    const stage = e.target.getStage();
    const pointerPos = stage.getPointerPosition();
    if (!pointerPos) return;

    // Ensure drawing starts inside the frame
    if (
      pointerPos.x < frame.x ||
      pointerPos.x > frame.x + frame.width ||
      pointerPos.y < frame.y ||
      pointerPos.y > frame.y + frame.height
    ) {
      return;
    }

    startPoint.current = { x: pointerPos.x, y: pointerPos.y };
    setIsDrawing(true);
    setRectangles([
      ...rectangles,
      { x: pointerPos.x, y: pointerPos.y, width: 0, height: 0 },
    ]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing || !startPoint.current) return;

    const stage = e.target.getStage();
    const pointerPos = stage.getPointerPosition();
    if (!pointerPos) return;

    let { x, y } = startPoint.current;
    let width = pointerPos.x - x;
    let height = pointerPos.y - y;

    // Ensure rectangle stays within the frame
    if (x + width > frame.x + frame.width) width = frame.x + frame.width - x;
    if (y + height > frame.y + frame.height)
      height = frame.y + frame.height - y;
    if (x + width < frame.x) width = frame.x - x;
    if (y + height < frame.y) height = frame.y - y;

    setRectangles((prev) => [...prev.slice(0, -1), { x, y, width, height }]);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <div className="fixed bottom-0 right-0 flex justify-center items-center h-[87vh] w-[77%]">
      <Stage
        width={frame.width}
        height={frame.height}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Layer>
          {/* Draw the frame */}
          <Rect {...frame} fill="white" />

          {/* Draw rectangles inside the frame */}
          {rectangles.map((rect, i) => (
            <Rect key={i} {...rect} stroke="black" strokeWidth={2} />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
