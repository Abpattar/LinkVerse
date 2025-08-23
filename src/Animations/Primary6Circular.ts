// useCircularAnimation.ts
import { useState, useEffect } from "react";

export function Primary6Circular(speedDegreesPerFrame = 1) {
  const [angleOffset, setAngleOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setAngleOffset((prev) => (prev + speedDegreesPerFrame) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [speedDegreesPerFrame]);

  return angleOffset;
}
