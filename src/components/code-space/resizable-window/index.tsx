import { ReactElement, useEffect, useState } from "react";
import { ResizableBox, ResizableBoxProps } from "react-resizable";

import "./resizable.css";

interface ResizableProps {
  direction: "horizontal" | "vertical";
  children: ReactElement<any>;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState(window.innerWidth * 0.5);

  useEffect(() => {
    let listener = () => {
      let timer: any;

      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
        if (window.innerWidth * 0.6 < width) {
          setWidth(window.innerWidth * 0.5);
        }
      }, 100);
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  if (direction === "vertical") {
    resizableProps = {
      className: "resizable-horizontal",
      minConstraints: [Infinity, innerHeight * 0.95],
      maxConstraints: [Infinity, innerHeight * 0.95],
      height: 300,
      width: Infinity,
      resizeHandles: ["s"],
    };
  } else {
    resizableProps = {
      minConstraints: [innerWidth * 0.5, Infinity],
      maxConstraints: [innerWidth * 0.7, Infinity],
      height: Infinity,
      width: width,
      resizeHandles: ["e"],
      onResizeStop: (event, data) => {
        setWidth(data.size.width);
      },
    };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
