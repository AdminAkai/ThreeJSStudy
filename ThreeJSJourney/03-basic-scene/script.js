// Scene
const scene = new THREE.Scene();

// Red Cube, a mesh, which is a combination of a geometry and a material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

// Add mesh to the scene
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600
}

// Camera (FOV, Aspect Ratio)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// Add camera to the scene
scene.add(camera);

// Renderer
const canvas = document.querySelector("#webgl");
const renderer = new THREE.WebGLRenderer({
  canvas
});
renderer.setSize(sizes.width, sizes.height);

// Render, by default everything is in the center of the scene
renderer.render(scene, camera);