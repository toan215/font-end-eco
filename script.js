function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // clearing the console (just a CodePen thing)

console.clear();

// there are 3 parts to this
//
// Scene:           Setups and manages threejs rendering
// loadModel:       Loads the 3d obj file
// setupAnimation:  Creates all the GSAP 
//                  animtions and scroll triggers 
//
// first we call loadModel, once complete we call
// setupAnimation which creates a new Scene

class Scene
{
  constructor(model)
  {_defineProperty(this, "render",


    () =>
    {
      for (var ii = 0; ii < this.views.length; ++ii) {

        var view = this.views[ii];
        var camera = view.camera;

        var bottom = Math.floor(this.h * view.bottom);
        var height = Math.floor(this.h * view.height);

        this.renderer.setViewport(0, 0, this.w, this.h);
        this.renderer.setScissor(0, bottom, this.w, height);
        this.renderer.setScissorTest(true);

        camera.aspect = this.w / this.h;
        this.renderer.render(this.scene, camera);
      }
    });_defineProperty(this, "onResize",

    () =>
    {
      this.w = window.innerWidth;
      this.h = window.innerHeight;

      for (var ii = 0; ii < this.views.length; ++ii) {
        var view = this.views[ii];
        var camera = view.camera;
        camera.aspect = this.w / this.h;
        let camZ = (screen.width - this.w * 1) / 3;
        camera.position.z = camZ < 180 ? 180 : camZ;
        camera.updateProjectionMatrix();
      }

      this.renderer.setSize(this.w, this.h);
      this.render();
    });this.views = [{ bottom: 0, height: 1 }, { bottom: 0, height: 0 }];this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });this.renderer.setSize(window.innerWidth, window.innerHeight);this.renderer.shadowMap.enabled = true;this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;this.renderer.setPixelRatio(window.devicePixelRatio);document.body.appendChild(this.renderer.domElement); // scene
    this.scene = new THREE.Scene();for (var _ii = 0; _ii < this.views.length; ++_ii) {var _view = this.views[_ii];var _camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);_camera.position.fromArray([0, 0, 180]);_camera.layers.disableAll();_camera.layers.enable(_ii);_view.camera = _camera;_camera.lookAt(new THREE.Vector3(0, 5, 0));} //light
    this.light = new THREE.PointLight(0xffffff, 0.75);this.light.position.z = 150;this.light.position.x = 70;this.light.position.y = -20;this.scene.add(this.light);this.softLight = new THREE.AmbientLight(0xffffff, 1.5);this.scene.add(this.softLight); // group
    this.onResize();window.addEventListener('resize', this.onResize, false);var edges = new THREE.EdgesGeometry(model.children[0].geometry);let line = new THREE.LineSegments(edges);line.material.depthTest = false;line.material.opacity = 0.5;line.material.transparent = true;line.position.x = 0.5;line.position.z = -1;line.position.y = 0.2;this.modelGroup = new THREE.Group();model.layers.set(0);line.layers.set(1);this.modelGroup.add(model);this.modelGroup.add(line);this.scene.add(this.modelGroup);}}function loadModel()
{
  gsap.registerPlugin(ScrollTrigger);
  
  var object;

  function onModelLoaded() {
    object.traverse(function (child) {
      let mat = new THREE.MeshPhongMaterial({ color: 0x171511, specular: 0xD0CBC7, shininess: 5, flatShading: true });
      child.material = mat;
    });

    setupAnimation(object);
  }

  var manager = new THREE.LoadingManager(onModelLoaded);
  manager.onProgress = (item, loaded, total) => console.log(item, loaded, total);

  var loader = new THREE.OBJLoader(manager);
  loader.load('https://assets.codepen.io/557388/1405+Plane_1.obj', function (obj) {object = obj;});
}

function setupAnimation(model)
{
  let scene = new Scene(model);
  let plane = scene.modelGroup;

  gsap.fromTo('canvas', { x: "50%", autoAlpha: 0 }, { duration: 1, x: "0%", autoAlpha: 1 });
  gsap.to('.loading', { autoAlpha: 0 });
  gsap.to('.scroll-cta', { opacity: 1 });
  gsap.set('svg', { autoAlpha: 1 });

  let tau = Math.PI * 2;

  gsap.set(plane.rotation, { y: tau * .85 });
  gsap.set(plane.position, { x: 100, y: 0, z: -10000 });

  scene.render();

  var sectionDuration = 1;


  
  gsap.from('.clouds', {
    y: "25%",
    scrollTrigger: {
      trigger: ".ground-container",
      scrub: true,
      start: "top bottom",
      end: "bottom top" } });

  let tl = new gsap.timeline(
  {
    onUpdate: scene.render,
    scrollTrigger: {
      trigger: ".content",
      scrub: true,
      start: "top top",
      end: "bottom bottom" },

    defaults: { duration: sectionDuration, ease: 'power2.inOut' } });


  let delay = 0;
  tl.to(plane.rotation, { x: tau * .25, y: tau*1, z: 0, ease: 'power1.inOut' }, delay);
  tl.to(plane.position, { x: -40, y: 0, z: -60, ease: 'power1.inOut' }, delay);

  delay += sectionDuration;

  tl.to('.scroll-cta', { duration: 0.25, opacity: 0 }, delay);
  tl.to(plane.position, { x: -10, ease: 'power1.in' }, delay);

  delay += sectionDuration;

  tl.to(plane.rotation, { x: tau * .25, y: tau*1, z: -tau * 0.05, ease: 'power1.inOut' }, delay);
  tl.to(plane.position, { x: -40, y: 0, z: -60, ease: 'power1.inOut' }, delay);

  delay += sectionDuration;

  tl.to(plane.rotation, { x: tau * .25, y: tau*1, z: tau * 0.05, ease: 'power3.inOut' }, delay);
  tl.to(plane.position, { x: 40, y: 0, z: -60, ease: 'power2.inOut' }, delay);

  delay += sectionDuration;

  tl.to(plane.rotation, { x: tau * .2, y: tau*1, z: -tau * 0.1, ease: 'power3.inOut' }, delay);
  tl.to(plane.position, { x: -40, y: 0, z: -30, ease: 'power2.inOut' }, delay);

  delay += sectionDuration;

  tl.to(plane.rotation, { x: tau * .2, y: tau*1, z: tau * 0.1, ease: 'power3.inOut' }, delay);
  tl.to(plane.position, { x: 40, y: 0, z: -30, ease: 'power2.inOut' }, delay);

  delay += sectionDuration;

  tl.to(plane.rotation, { x: tau * .25, y: tau*1, z: -tau * 0.05, ease: 'power1.inOut' }, delay);
  tl.to(plane.position, { x: -40, y: 0, z: -60, ease: 'power1.inOut' }, delay);

  delay += sectionDuration;
  
  tl.to(plane.rotation, { x: tau * .2, y: tau*1, z: tau * 0.1, ease: 'power3.inOut' }, delay);
  tl.to(plane.position, { x: 40, y: 0, z: -30, ease: 'power2.inOut' }, delay);

  delay += sectionDuration;

  tl.to(plane.rotation, { x: tau * .2, y: tau*1, z: -tau * 0.1, ease: 'power3.inOut' }, delay);
  tl.to(plane.position, { x: -40, y: 0, z: -30, ease: 'power2.inOut' }, delay);

  delay += sectionDuration;

  tl.to(plane.rotation, { x: tau * .25, y: tau*1, z: tau * 0.05, ease: 'power3.inOut' }, delay);
  tl.to(plane.position, { x: 30, y: 0, z: -30, ease: 'power2.inOut' }, delay);

  delay += sectionDuration;

  
  tl.to(plane.rotation, { x: tau * .25, y: tau*1, z: -tau *0.1, ease: 'power3.inOut' }, delay);
  tl.to(plane.position, { x: 5, y: 0, z: -60, ease: 'power1.inOut' }, delay);

  
	
	delay += sectionDuration;

  tl.to(plane.rotation, { x: tau * 0.15, y: tau * .85, z: -tau * 0, ease: 'power1.in' }, delay);
  tl.to(plane.position, { z: -150, x: 0, y: 0, ease: 'power1.inOut' }, delay);

  delay += sectionDuration;

  tl.to(plane.rotation, { duration: sectionDuration, x: -tau * 0.05, y: tau, z: -tau * 0.1, ease: 'none' }, delay);
  tl.to(plane.position, { duration: sectionDuration, x: 0, y: 30, z: 320, ease: 'power1.in' }, delay);

  tl.to(scene.light.position, { duration: sectionDuration, x: 0, y: 0, z: 0 }, delay);
}

loadModel();

const cloudLayer = document.querySelector(".cloud-layer");

const clouds = 50;

document.addEventListener("DOMContentLoaded", createClouds(clouds));



function createClouds(num) {
	const frag = document.createDocumentFragment();
	const positions = Array.from({ length: num }, () => getRandomPos());
	//console.log(positions);

	for (let i = 0; i < num; i++) {
		const { x, y } = positions[i];
		const newCloud = document.createElement("div");
		newCloud.classList.add("cloud");
		newCloud.style.cssText = `right: ${x}px; bottom: ${y}px;`;
	  frag.append(newCloud);
	}
	cloudLayer.append(frag);
}


function getRandomPos() {
	const x = Math.floor(
		Math.random() * (document.documentElement.clientWidth -150)
	);
	const y = Math.floor(
		Math.random() * (document.documentElement.clientHeight -150)
	);

	return { x, y };
}

const cloudLayer2 = document.querySelector(".cloud-layer_2");

const clouds2 = 50;

document.addEventListener("DOMContentLoaded", createClouds_2(clouds2));


function createClouds_2 (number) {
	const frag2 = document.createDocumentFragment();
	const positions2 = Array.from({ length: number }, () => getRandomPos2());
	// console.log(positions);

	for (let j = 0; j < number; j++) {
		const { x, y } = positions2[j];
		const newCloud_2 = document.createElement("div");
		newCloud_2.classList.add("cloud_2");
		newCloud_2.style.cssText = `right: ${x}px; bottom: ${y}px;`;
		frag2.append(newCloud_2);
	}
	cloudLayer2.append(frag2);
}

function getRandomPos2() {
	const x = Math.floor(
		Math.random() * (document.documentElement.clientWidth - 150)
	);
	const y = Math.floor(
		Math.random() * (document.documentElement.clientHeight - 150)
	);

	return { x, y };
}

const cloudLayer3 = document.querySelector(".cloud-layer_3");

const clouds3 = 50;

document.addEventListener("DOMContentLoaded", createClouds_3(clouds3));

function createClouds_3(numbers) {
	const frag3 = document.createDocumentFragment();
	const positions3 = Array.from({ length: numbers }, () => getRandomPos_3());
	console.log(positions3);

	for (let n = 0; n < numbers; n++) {
		const { x, y } = positions3[n];
		const newCloud_3 = document.createElement("div");
		newCloud_3.classList.add("cloud_3");
		newCloud_3.style.cssText = `right: ${x}px; bottom: ${y}px;`;
		frag3.append(newCloud_3);
	}
	cloudLayer3.append(frag3);
}

function getRandomPos_3() {
	const x = Math.floor(
		Math.random() * (document.documentElement.clientWidth - 150)
	);
	const y = Math.floor(
		Math.random() * (document.documentElement.clientHeight - 150)
	);

	return { x, y };
}