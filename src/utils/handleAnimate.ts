import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

const handleAnimate = (
    renderer: WebGLRenderer,
    scene: Scene,
    camera: PerspectiveCamera,
    requestAnimationFrameCallback: Function
) => {
    renderer.render(scene, camera);

    requestAnimationFrameCallback(
        () => handleAnimate(renderer, scene, camera, requestAnimationFrameCallback)
    );
}

export default handleAnimate;