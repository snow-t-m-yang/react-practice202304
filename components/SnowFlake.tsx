"use client";

import React, { useState } from "react";

interface SnowflakeProps {
  size: number;
  strokeWidth: number;
  strokeColor: string;
  fillColor: string;
}

const Snowflake: React.FC<SnowflakeProps> = ({
  size,
  strokeWidth,
  strokeColor,
  fillColor,
}) => {
  const randomInRange = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  const createSnowflakePath = (size: number): string => {
    const numPoints = 6;
    const angleStep = (Math.PI * 2) / numPoints;

    // Generate random starting angle
    let angle = randomInRange(0, Math.PI * 2);

    // Generate random line segment lengths and curve control point offsets
    const segmentLengths: number[] = [];
    const controlOffsets: number[] = [];
    for (let i = 0; i < numPoints * 2; i++) {
      segmentLengths.push(randomInRange(size * 0.1, size * 0.5));
      controlOffsets.push(randomInRange(-size * 0.3, size * 0.3));
    }

    // Generate path segments
    const pathSegments: string[] = [];
    for (let i = 0; i < numPoints; i++) {
      const x1 = Math.cos(angle) * size;
      const y1 = Math.sin(angle) * size;

      const x2 = Math.cos(angle + angleStep) * size;
      const y2 = Math.sin(angle + angleStep) * size;

      const cx1 = x1 + Math.cos(angle + angleStep / 2) * controlOffsets[i * 2];
      const cy1 = y1 + Math.sin(angle + angleStep / 2) * controlOffsets[i * 2];
      const cx2 =
        x2 + Math.cos(angle + angleStep / 2) * controlOffsets[i * 2 + 1];
      const cy2 =
        y2 + Math.sin(angle + angleStep / 2) * controlOffsets[i * 2 + 1];

      pathSegments.push(
        `M${x1},${y1} Q${cx1},${cy1} ${x2},${y2} Q${cx2},${cy2} ${x1},${y1}`,
      );

      angle += angleStep;
    }

    return pathSegments.join(" ");
  };

  const snowflakePath = createSnowflakePath(size);

  return (
    <div className="grid h-screen mt-48">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <path
          d={snowflakePath}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth.toString()}
        />
      </svg>
    </div>
  );
};

const SnowFlakeGenerator: React.FC = () => {
  const [size, setSize] = useState(50);
  const [strokeWidth, setStrokeWidth] = useState(1);
  const [strokeColor, setStrokeColor] = useState("black");
  const [fillColor, setFillColor] = useState("white");

  const renderSnowflake = (): JSX.Element => {
    return (
      <Snowflake
        size={size}
        strokeWidth={strokeWidth}
        strokeColor={strokeColor}
        fillColor={fillColor}
      />
    );
  };

  return (
    <div className="grid pt-32 place-content-center">
      <div>
        <label htmlFor="size">Size:</label>
        <input
          type="number"
          id="size"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="strokeWidth">Stroke Width:</label>
        <input
          type="number"
          id="strokeWidth"
          value={strokeWidth}
          onChange={(e) => setStrokeWidth(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="strokeColor">Stroke Color:</label>
        <input
          type="text"
          id="strokeColor"
          value={strokeColor}
          onChange={(e) => setStrokeColor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="fillColor">Fill Color:</label>
        <input
          type="text"
          id="fillColor"
          value={fillColor}
          onChange={(e) => setFillColor(e.target.value)}
        />
      </div>
      <div>{renderSnowflake()}</div>
    </div>
  );
};

export default SnowFlakeGenerator;
