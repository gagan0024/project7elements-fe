import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Stage, Layer, Line } from "react-konva";

export default function OBJFileRenderer() {
  const [object, setObject] = useState(null);
  const [lines, setLines] = useState([]);
  const [drawing, setDrawing] = useState(false);

  //   useEffect(() => {
  //     const file = localStorage.getItem("uploadedOBJ");
  //     console.log("////////////////", file);
  //     const loader = new OBJLoader();
  //     const obj = loader.parse(file);
  //   }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const contents = e.target.result;
        const loader = new OBJLoader();
        const obj = loader.parse(contents);
        console.log(obj);
        setObject(obj);
      };
      reader.readAsText(file);
    }
  };

  const handleMouseDown = (e) => {
    setDrawing(true);
    const stage = e.target.getStage();
    const pointer = stage.getPointerPosition();
    setLines([...lines, { points: [pointer.x, pointer.y] }]);
  };

  const handleMouseMove = (e) => {
    if (!drawing) return;
    const stage = e.target.getStage();
    const pointer = stage.getPointerPosition();
    let updatedLines = [...lines];
    let lastLine = updatedLines[updatedLines.length - 1];
    lastLine.points = [...lastLine.points, pointer.x, pointer.y];
    setLines(updatedLines);
  };

  const handleMouseUp = () => {
    setDrawing(false);
    console.log("Drawn Coordinates:", JSON.stringify(lines, null, 2));
  };

  return (
    <div
      className="fixed bottom-0 right-0 flex flex-col h-[87vh] w-[70%]"
      style={{
        border: "1px solid black",
      }}
    >
      <input
        type="file"
        accept=".obj"
        onChange={handleFileUpload}
        style={{ margin: "10px" }}
      />
      <Canvas style={{ flex: 1 }} camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} />
        <OrbitControls />
        {object && <primitive object={object} scale={1} />}
      </Canvas>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="red"
              strokeWidth={2}
              tension={0.5}
              lineCap="round"
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
