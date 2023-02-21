import { useCallback, useEffect, useState } from "react";

export const useHover = (ref) => {
  const [isHovering, setisHovering] = useState(false);
  const on = useCallback(() => {
    setisHovering(true);
  }, []);

  const off = useCallback(() => {
    setisHovering(false);
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    node.addEventListener("mouseenter", on);
    node.addEventListener("mousemove", on);
    node.addEventListener("mouseleave", off);

    return () => {
      node.removeEventListener("mouseenter", on);
      node.removeEventListener("mousemove", on);
      node.removeEventListener("mouseleave", off);
    };
  }, [ref.current, on, off]);

  return isHovering;
};
