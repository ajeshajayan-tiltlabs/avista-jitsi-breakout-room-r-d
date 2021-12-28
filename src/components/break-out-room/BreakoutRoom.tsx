import './BreakoutRoom.scss'
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import React, { useEffect, useRef } from 'react';
import handleWindowResize from '../../utils/handleWindowResize';
import handleAnimate from '../../utils/handleAnimate';

export default function BreakoutRoom() {

    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let renderer: WebGLRenderer;

    useEffect(() => {
        renderer = new WebGLRenderer({
            antialias: true, canvas: canvasRef.current!
        });
        renderer.setSize(window.innerWidth, window.innerHeight);

        window.addEventListener('resize', () => handleWindowResize(renderer, camera), false);

        handleAnimate(
            renderer,
            scene,
            camera,
            requestAnimationFrame
        );
    }, []);

    return (
        <canvas id='scene' ref={canvasRef}></canvas>
    );
}