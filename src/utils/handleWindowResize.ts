import { PerspectiveCamera, WebGLRenderer } from "three";

const handleWindowResize = (renderer: WebGLRenderer, camera: PerspectiveCamera) => {
    const pixelRatio = window.devicePixelRatio;
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth * pixelRatio | 0, window.innerHeight * pixelRatio | 0, false);
    camera.updateProjectionMatrix();
}

export default handleWindowResize;