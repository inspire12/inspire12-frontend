import {useRef} from "react";

const Canvas = () => {
    const size = { width: 400, height: 250 };
    const canvasRef = useRef(null);

    return (
        <canvas {...size} ref={canvasRef}></canvas>
    )
}

export default Canvas;