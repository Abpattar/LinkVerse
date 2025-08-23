import { useEffect, useRef, useState } from 'react';

export function Primary6Circular(speedDegreesPerFrame = 1) {
  const angleRef = useRef(0);
  const [angleOffset, setAngleOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      angleRef.current = (angleRef.current + speedDegreesPerFrame) % 360;
      setAngleOffset(angleRef.current); // update once per frame to trigger re-render
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [speedDegreesPerFrame]);

  return angleOffset;
}
