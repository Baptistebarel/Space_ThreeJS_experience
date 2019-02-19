import * as THREE from 'three'
import './css/style.styl'

// Images & sound

import audio from './sounds/space.mp3'
import floorTextureSource from './images/floor.jpg'
import posterTextureSource from './images/poster.png'
import nightSkyTextureSource from './images/background.png'
import galaxieTextureSource from './images/galaxie.jpg'
import spaceChoice1Source from './images/choice1.png'
import spaceChoice2Source from './images/choice2.png'
import spaceChoice3Source from './images/choice3.png'
import galaxyChoice1Source from './images/galaxies/galaxy1/galaxy1.png'
import galaxyChoice1Planet1Source from './images/galaxies/galaxy1/planet1.1.png'
import galaxyChoice1Planet2Source from './images/galaxies/galaxy1/planet1.2.png'
import galaxyChoice1Planet3Source from './images/galaxies/galaxy1/planet1.3.png'
import galaxyChoice2Source from './images/galaxies/galaxy2/galaxy2.png'
import galaxyChoice2Planet1Source from './images/galaxies/galaxy2/planet2.1.png'
import galaxyChoice2Planet2Source from './images/galaxies/galaxy2/planet2.2.png'
import galaxyChoice2Planet3Source from './images/galaxies/galaxy2/planet2.3.png'
import galaxySunSource from './images/galaxies/sun.png'
import galaxyBlackHoleSource from './images/galaxies/blackHole.png'
import galaxyStarSource from './images/star.png'

// JS files

import Furniture from './js/observatory__furniture'
import Structure from './js/observatory__structure'
import SpaceCrossroads from './js/space__Crossroads'
import SpaceGalaxy1 from './js/space__galaxy1'
import SpaceGalaxy2 from './js/space__galaxy2'
import SpaceGalaxy3 from './js/space__galaxy3'
import OrbitControls from './js/OrbitControls'

/****
 * 
 * DOM recuperation
 * 
****/

const divGalaxy1 = document.querySelector('.galaxy1')
const divGalaxy2 = document.querySelector('.galaxy2')
const divGalaxy3 = document.querySelector('.galaxy3')

// Start message

const container_start = document.querySelector('.container_start')
const line = document.querySelector('.line')

// Scroll message

const container_scroll = document.querySelector('.container_scroll')

// Sound

let sound = document.querySelector('.sound')
sound.setAttribute("src", audio)

const container_equalizer = document.querySelector('.container_equalizer')
const bar1 = document.querySelector('.bar-1')
const bar2 = document.querySelector('.bar-2')
const bar3 = document.querySelector('.bar-3')
const bar4 = document.querySelector('.bar-4')
const bar5 = document.querySelector('.bar-5')

/****
 * 
 * Textures
 * 
****/

const textureLoader = new THREE.TextureLoader() 

// Observatory floor 
const floorTexture = textureLoader.load(floorTextureSource)
floorTexture.wrapS = THREE.RepeatWrapping
floorTexture.wrapT = THREE.RepeatWrapping
floorTexture.repeat.x = 4
floorTexture.repeat.y = 4

// Observatory poster  
const posterTexture = textureLoader.load(posterTextureSource)
posterTexture.wrapS = THREE.RepeatWrapping
posterTexture.wrapT = THREE.RepeatWrapping
posterTexture.repeat.x = 1
posterTexture.repeat.y = 1

// Observatory nightSky  
const galaxieTexture = textureLoader.load(galaxieTextureSource)

// Background crossroad
const nightSkyTexture = textureLoader.load(nightSkyTextureSource)
nightSkyTexture.wrapS = THREE.RepeatWrapping
nightSkyTexture.wrapT = THREE.RepeatWrapping
nightSkyTexture.repeat.x = 1
nightSkyTexture.repeat.y = 1

// Space choices 

const spaceChoice1 = textureLoader.load(spaceChoice1Source)
const spaceChoice2 = textureLoader.load(spaceChoice2Source)
const spaceChoice3 = textureLoader.load(spaceChoice3Source)

// Galaxy 1
const galaxyChoice1 = textureLoader.load(galaxyChoice1Source)
const galaxyChoice1Planet1 = textureLoader.load(galaxyChoice1Planet1Source)
const galaxyChoice1Planet2 = textureLoader.load(galaxyChoice1Planet2Source)
const galaxyChoice1Planet3 = textureLoader.load(galaxyChoice1Planet3Source)

// Galaxy 2
const galaxyChoice2 = textureLoader.load(galaxyChoice2Source)
const galaxyChoice2Planet1 = textureLoader.load(galaxyChoice2Planet1Source)
const galaxyChoice2Planet2 = textureLoader.load(galaxyChoice2Planet2Source)
const galaxyChoice2Planet3 = textureLoader.load(galaxyChoice2Planet3Source)

// Galaxy decoration
const galaxySun = textureLoader.load(galaxySunSource)
const galaxyBlackHole = textureLoader.load(galaxyBlackHoleSource)
const galaxyStar = textureLoader.load(galaxyStarSource)


/****
 * 
 * Screen sizes
 * 
****/

const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    activeCamera.aspect = sizes.width / sizes.height
    activeCamera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})

/****
 * 
 * Cursor
 * 
****/

const cursor  = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (_event) => 
{
    cursor.x = _event.clientX / sizes.width - 0.5 
    cursor.y = _event.clientY / sizes.height - 0.5
})


/****
 * 
 * Click
 * 
****/

// Space crossroad 

divGalaxy1.addEventListener('click', () =>
{
    if (activeCamera === space1Camera)
    {
        activeCamera = space_Galaxy1Camera
        divGalaxy1.style.cursor = 'default'
        divGalaxy2.style.cursor = 'default'
        divGalaxy3.style.cursor = 'default'
        container_scroll.style.display = 'block'
    }
})

divGalaxy2.addEventListener('click', () =>
{
    if (activeCamera === space1Camera)
    {
        activeCamera = space_Galaxy3Camera
        divGalaxy1.style.cursor = 'default'
        divGalaxy2.style.cursor = 'default'
        divGalaxy3.style.cursor = 'default'
        container_scroll.style.display = 'block'
    }
})

divGalaxy3.addEventListener('click', () =>
{
    if (activeCamera === space1Camera)
    {
        activeCamera = space_Galaxy2Camera
        divGalaxy1.style.cursor = 'default'
        divGalaxy2.style.cursor = 'default'
        divGalaxy3.style.cursor = 'default'
        container_scroll.style.display = 'block'
    }
})

// Sound button 

container_equalizer.addEventListener('click', () =>
{
    if (bar1.classList.contains("active"))
    {
        bar1.classList.remove("active")
        bar2.classList.remove("active")
        bar3.classList.remove("active")
        bar4.classList.remove("active")
        bar5.classList.remove("active")
        sound.pause()
    }

    else
    {
        bar1.classList.add("active")
        bar2.classList.add("active")
        bar3.classList.add("active")
        bar4.classList.add("active")
        bar5.classList.add("active")
        sound.play()
    }
})

/****
 * 
 * Scene
 * 
****/

const scene = new THREE.Scene()


/**
 * Observatory
*/

const observatory = new THREE.Object3D()
scene.add(observatory)

// Structure

const structure = new Structure({
    textureLoader, 
    floorTexture, 
    galaxieTexture
})
observatory.add(structure.container)

// Furniture

const furniture = new Furniture({
    textureLoader, 
    posterTexture
})
observatory.add(furniture.container)


/**
 * Space
*/

const space = new THREE.Object3D()
scene.add(space)

// Crossroad

const spaceCrossroads = new SpaceCrossroads({
    textureLoader, 
    nightSkyTexture, 
    spaceChoice1, 
    spaceChoice2, 
    spaceChoice3, 
    galaxyStar
})
space.add(spaceCrossroads.container)

// Galaxy 1

const spaceGalaxy1 = new SpaceGalaxy1({
    textureLoader, 
    galaxyChoice1, 
    galaxyChoice1Planet1, 
    galaxyChoice1Planet2, 
    galaxyChoice1Planet3, 
    galaxySun, 
    galaxyChoice2Planet3
})
space.add(spaceGalaxy1.container)

// Galaxy 2

const spaceGalaxy2 = new SpaceGalaxy2({
    textureLoader, 
    galaxyChoice2, 
    galaxyChoice2Planet1, 
    galaxyChoice2Planet2, 
    galaxyChoice2Planet3, 
    galaxyChoice1Planet2, 
    galaxySun
})
space.add(spaceGalaxy2.container)

// Galaxy 3

const spaceGalaxy3 = new SpaceGalaxy3({
    textureLoader, 
    galaxyChoice1Planet1, 
    galaxyChoice1Planet2, 
    galaxyChoice1Planet3, 
    galaxyBlackHole, 
    galaxyChoice2Planet1, 
    galaxyChoice2Planet2, 
    galaxyChoice2Planet3
})
space.add(spaceGalaxy3.container)

/****
 * 
 * Camera
 * 
****/

//Observatory 

const observatoryCamera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height) 
observatoryCamera.position.z = 5 

//Space crossroad 

const space1Camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height) 
space1Camera.position.z = -88
scene.add(space1Camera)

//galaxies 

const space_Galaxy1Camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height) 
scene.add(space_Galaxy1Camera)

const space_Galaxy2Camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height) 
space_Galaxy2Camera.position.z = -500
scene.add(space_Galaxy2Camera)

const space_Galaxy3Camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height) 
space_Galaxy3Camera.position.z = -720
scene.add(space_Galaxy3Camera)

let activeCamera = observatoryCamera

/****
 * 
 * Keybord controls
 * 
****/

window.addEventListener('keydown', (_event) =>
{
    switch('keydown', (_event.keyCode))
    {
        case 81:
            activeCamera = observatoryCamera
            divGalaxy1.style.cursor = 'default'
            divGalaxy2.style.cursor = 'default'
            divGalaxy3.style.cursor = 'default'
            container_scroll.style.display = 'none'
            container_equalizer.style.display = 'none'
            break;

        case 82:
            container_start.style.display = 'none' 
            line.style.display = 'none'
            activeCamera = space1Camera
            divGalaxy1.style.cursor = 'pointer'
            divGalaxy2.style.cursor = 'pointer'
            divGalaxy3.style.cursor = 'pointer'
            container_scroll.style.display = 'none'
            sound.play()
            bar1.classList.add('active')
            bar2.classList.add('active')
            bar3.classList.add('active')
            bar4.classList.add('active')
            bar5.classList.add('active')
            container_equalizer.style.display = 'block'
            break;
    }
})

/****
 * 
 * Light
 * 
****/

const ambientLight = new THREE.AmbientLight(0x555555)
scene.add(ambientLight)

const lampLight = new THREE.DirectionalLight(0xffffff, 0.6)
lampLight.position.x = 1
lampLight.position.y = 1
lampLight.position.z = 1
lampLight.castShadow = true
lampLight.shadow.camera.top = 1.20
lampLight.shadow.camera.right = 1.20
lampLight.shadow.camera.bottom = -1.20
lampLight.shadow.camera.left = -1.20 
scene.add(lampLight)


/****
 * 
 * Renderer
 * 
****/

const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)


/****
* 
* Orbit controls
* 
****/
 
// Galaxy 1

const controls = new THREE.OrbitControls(space_Galaxy1Camera);

space_Galaxy1Camera.position.set( 0, 0, -300 );
controls.update();

function animate() {

	requestAnimationFrame( animate );

    controls.maxDistance = 300;
    controls.minDistance = 150;
    controls.update();
	renderer.render( scene, space_Galaxy1Camera );
}
animate()

// Galaxy 2

const controls2 = new THREE.OrbitControls(space_Galaxy2Camera);

space_Galaxy1Camera.position.set( 0, 0, -500 );
controls2.update();

function animate2() {

	requestAnimationFrame( animate );

    controls2.maxDistance = 500;
    controls2.minDistance = 350;
    controls2.update();
	renderer.render( scene, space_Galaxy1Camera );
}
animate2()

// Galaxy 3

const controls3 = new THREE.OrbitControls(space_Galaxy3Camera);

space_Galaxy1Camera.position.set( 0, 0, -720 );
controls3.update();

function animate3() {

	requestAnimationFrame( animate );

    controls3.maxDistance = 720;
    controls3.minDistance = 570;
    controls3.update();
	renderer.render( scene, space_Galaxy1Camera );
}
animate3()

/****
 * 
 * Loop
 * 
****/

const loop = () => 
{
    window.requestAnimationFrame(loop)

    activeCamera.position.x = cursor.x * 4
    activeCamera.position.y = - cursor.y * 4


    if(activeCamera === space1Camera)
    {
        renderer.render(scene, space1Camera)
        activeCamera.lookAt(scene.position)
        
    }
    else if(activeCamera === observatoryCamera)
    {
        renderer.render(scene, observatoryCamera)
        activeCamera.lookAt(scene.position)
    }
    else if(activeCamera === space_Galaxy1Camera)
    {
        renderer.render(scene, space_Galaxy1Camera)
        activeCamera.lookAt(scene.position)
    }
    else if(activeCamera === space_Galaxy2Camera)
    {
        renderer.render(scene, space_Galaxy2Camera)
        activeCamera.lookAt(scene.position)
    }
    else if(activeCamera === space_Galaxy3Camera)
    {
        renderer.render(scene, space_Galaxy3Camera)
        activeCamera.lookAt(scene.position)
    }
}
loop()