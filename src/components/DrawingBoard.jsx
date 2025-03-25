// import React, { useState, useRef, useEffect } from "react";
// import { Stage, Layer, Rect } from "react-konva";
// import { useSelector } from "react-redux";

// export default function DrawingBoard() {
//   const [frame, setFrame] = useState({ x: 0, y: 0, width: 1450, height: 750 });
//   const [rectangles, setRectangles] = useState([]);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [dpi, setDpi] = useState(null);
//   const currentScale = useSelector((state) => state.project.scale);
//   const [area, setArea] = useState();
//   const [scale, setScale] = useState("");
//   const startPoint = useRef(null);
//   const calculateDPI = () => {
//     const width = window.screen.width;
//     const height = window.screen.height;
//     const screenSize = window.devicePixelRatio;
//     const diagonalPixels = Math.sqrt(width ** 2 + height ** 2);
//     const calculatedDPI = diagonalPixels / screenSize;
//     setDpi(calculatedDPI.toFixed(2));
//   };
//   useEffect(() => {
//     if (currentScale != "") setScale(currentScale);
//     calculateDPI();
//   }, [currentScale]);

//   const handleMouseDown = (e) => {
//     const stage = e.target.getStage();
//     const pointerPos = stage.getPointerPosition();
//     if (!pointerPos) return;
//     // Ensure drawing starts inside the frame
//     if (
//       pointerPos.x < frame.x ||
//       pointerPos.x > frame.x + frame.width ||
//       pointerPos.y < frame.y ||
//       pointerPos.y > frame.y + frame.height
//     ) {
//       return;
//     }

//     startPoint.current = { x: pointerPos.x, y: pointerPos.y };
//     setIsDrawing(true);
//     setRectangles([
//       ...rectangles,
//       { x: pointerPos.x, y: pointerPos.y, width: 0, height: 0 },
//     ]);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDrawing || !startPoint.current) return;

//     const stage = e.target.getStage();
//     const pointerPos = stage.getPointerPosition();
//     if (!pointerPos) return;

//     let { x, y } = startPoint.current;
//     let width = pointerPos.x - x;
//     let height = pointerPos.y - y;
//     let pixelArea = height * width;

//     console.log("----------------", scale);
//     // Convert area to inches
//     const areaInInches = pixelArea / dpi;

//     // Convert to meters (1 inch = 0.0254 meters)
//     const areaInMeters = areaInInches * 0.0254;

//     // Convert to feet (1 inch = 1/12 feet)
//     const areaInFeet = areaInInches / 12;

//     // Convert to square yards (1 square yard = 9 square feet)
//     const areaInSquareYards = areaInFeet / 9;
//     if (scale === "Inches") {
//       setArea(areaInInches);
//       localStorage.setItem("area", areaInInches);
//     } else if (scale === "Meter") {
//       setArea(areaInMeters);
//       localStorage.setItem("area", areaInMeters);
//     } else if (scale === "Feet") {
//       setArea(areaInFeet);
//       localStorage.setItem("area", areaInFeet);
//     } else if (scale === "Square Yards") {
//       setArea(areaInSquareYards);
//       localStorage.setItem("area", areaInSquareYards);
//     }

//     // Ensure rectangle stays within the frame
//     if (x + width > frame.x + frame.width) width = frame.x + frame.width - x;
//     if (y + height > frame.y + frame.height)
//       height = frame.y + frame.height - y;
//     if (x + width < frame.x) width = frame.x - x;
//     if (y + height < frame.y) height = frame.y - y;

//     setRectangles((prev) => [
//       ...prev.slice(0, -1),
//       { x, y, width, height, area },
//     ]);
//   };

//   const handleMouseUp = () => {
//     setIsDrawing(false);
//     console.log(rectangles);
//   };

//   return (
//     <div className="fixed bottom-0 right-0 flex justify-center items-center h-[87vh] w-[77%]">
//       <Stage
//         width={frame.width}
//         height={frame.height}
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//       >
//         <Layer>
//           {/* Draw the frame */}
//           <Rect {...frame} fill="white" />

//           {/* Draw rectangles inside the frame */}
//           {rectangles.map((rect, i) => (
//             <Rect key={i} {...rect} stroke="black" strokeWidth={2} />
//           ))}
//         </Layer>
//       </Stage>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Line, Circle, Rect } from "react-konva";
import ShapeModal from "./modals/ShapeModal";

const AllShapes = () => {
  const [lines, setLines] = useState([]);
  const [frame, setFrame] = useState({ x: 0, y: 0, width: 1450, height: 750 });
  const [points, setPoints] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  // const [mode, setMode] = useState("line");
  const stageRef = useRef(null);
  const [shapes, setShapes] = useState([]);
  const [preview, setPreview] = useState(null);
  const [mode, setMode] = useState(localStorage.getItem("mode") || "line");
  const [isOpen, setIsOpen] = useState(false);
  const [room, setRoom] = useState([]);

  useEffect(() => {
    const checkStorage = () => {
      const newMode = localStorage.getItem("mode");
      if (newMode !== mode) {
        setMode(newMode);
      }
    };

    const intervalId = setInterval(checkStorage, 500); // Poll every 500ms

    return () => clearInterval(intervalId);
  }, [mode]);

  const handleMouseDown = (e) => {
    const pos = e.target.getStage().getPointerPosition();

    if (mode === "rectangle" || mode === "circle") {
      setIsDrawing(true);
      setPoints([pos]);
    } else if (mode === "line") {
      if (!isDrawing) {
        setIsDrawing(true);
        setPoints([pos]);
      } else {
        setPoints((prev) => [...prev, pos]);
        setLines((prev) => [
          ...prev,
          [prev.length ? prev[prev.length - 1][1] : points[0], pos],
        ]);

        if (isShapeClosed([...points, pos])) {
          setLines((prev) => [...prev, [pos, points[0]]]);
          const area = calculateArea([...points, pos]);
          setIsDrawing(false);
          console.log(`Room created! Area: ${area.toFixed(2)} square units`);
          setRoom(area.toFixed(2));
          setIsOpen(true);
        }
      }
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const pos = e.target.getStage().getPointerPosition();

    if (mode === "rectangle") {
      const startPos = points[0];
      const width = pos.x - startPos.x;
      const height = pos.y - startPos.y;
      setPreview({
        type: "rectangle",
        x: startPos.x,
        y: startPos.y,
        width,
        height,
      });
    } else if (mode === "circle") {
      const startPos = points[0];
      const radius = Math.hypot(pos.x - startPos.x, pos.y - startPos.y);
      setPreview({ type: "circle", x: startPos.x, y: startPos.y, radius });
    } else if (mode === "line" && points.length) {
      setPreview({ type: "line", start: points[points.length - 1], end: pos });
    }
  };

  const handleMouseUp = (e) => {
    if (mode === "rectangle" || mode === "circle") {
      const pos = e.target.getStage().getPointerPosition();
      const startPos = points[0];
      if (mode === "rectangle") {
        const width = Math.abs(pos.x - startPos.x);
        const height = Math.abs(pos.y - startPos.y);
        const rect = {
          x: Math.min(startPos.x, pos.x),
          y: Math.min(startPos.y, pos.y),
          width,
          height,
        };
        setShapes((prev) => [...prev, { type: "rectangle", ...rect }]);
        console.log(`Rectangle created! Area: ${width * height} square units`);
        setRoom(width * height);
        setIsOpen(true);
      } else if (mode === "circle") {
        const radius = Math.hypot(pos.x - startPos.x, pos.y - startPos.y);
        const circle = { x: startPos.x, y: startPos.y, radius };
        setShapes((prev) => [...prev, { type: "circle", ...circle }]);
        console.log(
          `Circle created! Area: ${(Math.PI * radius * radius).toFixed(
            2
          )} square units`
        );
        setRoom((Math.PI * radius * radius).toFixed(2));
        setIsOpen(true);
      }
      setIsDrawing(false);
      setPoints([]);
      setPreview(null);
    }
  };

  const isShapeClosed = (pts) => {
    if (pts.length < 3) return false;
    const threshold = 10;
    const startX = pts[0].x;
    const startY = pts[0].y;
    const endX = pts[pts.length - 1].x;
    const endY = pts[pts.length - 1].y;
    return Math.hypot(endX - startX, endY - startY) < threshold;
  };

  const calculateArea = (pts) => {
    let area = 0;
    const n = pts.length;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      area += pts[i].x * pts[j].y - pts[j].x * pts[i].y;
    }
    return Math.abs(area / 2);
  };

  return (
    <div className="fixed bottom-0 right-0 flex justify-center items-center h-[87vh] w-[77%]">
      {/* <button onClick={() => setMode("line")}>Random Shapes</button>
      <button onClick={() => setMode("rectangle")}>Rectangle</button>
      <button onClick={() => setMode("circle")}>Circle</button> */}
      {isOpen && <ShapeModal close={setIsOpen} val={room} />}

      <Stage
        width={frame.width}
        height={frame.height}
        ref={stageRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="bg-white"
      >
        <Layer>
          {lines.map((line, index) => (
            <Line
              key={index}
              points={[line[0].x, line[0].y, line[1].x, line[1].y]}
              stroke="black"
              strokeWidth={2}
            />
          ))}
          {preview?.type === "line" && (
            <Line
              points={[
                preview.start.x,
                preview.start.y,
                preview.end.x,
                preview.end.y,
              ]}
              stroke="blue"
              strokeWidth={2}
              dash={[10, 5]}
            />
          )}
          {points.map((point, index) => (
            <Circle key={index} x={point.x} y={point.y} radius={3} fill="red" />
          ))}
          {shapes.map((shape, index) =>
            shape.type === "rectangle" ? (
              <Rect key={index} {...shape} stroke="black" strokeWidth={2} />
            ) : (
              <Circle key={index} {...shape} stroke="black" strokeWidth={2} />
            )
          )}
          {preview &&
            preview.type !== "line" &&
            (preview.type === "rectangle" ? (
              <Rect {...preview} stroke="blue" strokeWidth={2} dash={[10, 5]} />
            ) : (
              <Circle
                {...preview}
                stroke="blue"
                strokeWidth={2}
                dash={[10, 5]}
              />
            ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default AllShapes;
