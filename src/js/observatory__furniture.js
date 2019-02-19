import * as THREE from 'three'
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'
import telescopeSource from '../models/telescope/telescope3.obj'
import telescopeTextureSource from '../models/telescope/telescope3.mtl'
import librarySource from '../models/library/library.obj'
import libraryTextureSource from '../models/library/library.mtl'
import bigLibrarySource from '../models/bigLibrary/bigLibrary.obj'
import bigLibraryTextureSource from '../models/bigLibrary/bigLibrary.mtl'
import sofaSource from '../models/sofa/sofa.obj'
import sofaTextureSource from '../models/sofa/sofa.mtl'
import paintSupportSource from '../models/paintSupport/paintSupport.obj'
import paintSupportTextureSource from '../models/paintSupport/paintSupport.mtl'

export default  class Furniture 
{
    constructor(_option)
    {

        this.textureLoader = _option.textureLoader
        this.posterTexture = _option.posterTexture

        this.container = new THREE.Object3D()
        
        this.setTelescope()
        this.setLibrary()
        this.setBigLibrary()
        this.setSofa()
        this.setPaintSupport()
        this.setWall()
    }

    setTelescope()
    {
        this.telescope = {}

        this.telescope.mtlLoader = new MTLLoader();
        this.telescope.objLoader = new OBJLoader();
 
        this.telescope.mtlLoader.load(telescopeTextureSource, (materials) => {
            materials.preload()
            this.telescope.objLoader.setMaterials(materials)
            this.telescope.objLoader.load(telescopeSource, (object) => {
                this.object = object
                this.object.position.y = -1.5
                this.object.position.z = -1.5
                this.object.position.x = -0.2
                this.object.rotation.y = -1
                this.object.scale.set(3.7, 3.7, 3.7)
                this.container.add(object)
            })
        })
    }

    setLibrary()
    {
        this.library = {}

        this.library.mtlLoader = new MTLLoader();
        this.library.objLoader = new OBJLoader();
 
        this.library.mtlLoader.load(libraryTextureSource, (materials) => {
            materials.preload()
            this.library.objLoader.setMaterials(materials)
            this.library.objLoader.load(librarySource, (object) => {
                this.object = object
                this.object.position.y = -1.8
                this.object.position.z = -1.5
                this.object.position.x = -6.5
                this.object.rotation.y = 4.3
                this.object.scale.set(3.5, 3.5, 3.5)
                this.container.add(object)
            })
        })
    }

    setBigLibrary()
    {
        this.bigLibrary = {}

        this.bigLibrary.mtlLoader = new MTLLoader();
        this.bigLibrary.objLoader = new OBJLoader();
 
        this.bigLibrary.mtlLoader.load(bigLibraryTextureSource, (materials) => {
            materials.preload()
            this.bigLibrary.objLoader.setMaterials(materials)
            this.bigLibrary.objLoader.load(bigLibrarySource, (object) => {
                this.object = object
                this.object.position.y = -0.5
                this.object.position.z = 4
                this.object.position.x = 5
                this.object.rotation.y = -1.9
                this.object.scale.set(3.5, 3.5, 3.5)
                this.container.add(object)
            })
        })
    }

    setSofa()
    {
        this.sofa = {}

        this.sofa.mtlLoader = new MTLLoader();
        this.sofa.objLoader = new OBJLoader();
 
        this.sofa.mtlLoader.load(sofaTextureSource, (materials) => {
            materials.preload()
            this.sofa.objLoader.setMaterials(materials)
            this.sofa.objLoader.load(sofaSource, (object) => {
                this.object = object
                this.object.position.y = -1.5
                this.object.position.z = -2.5
                this.object.position.x = 5.5
                this.object.rotation.y = 2.2
                this.object.scale.set(3, 3, 3)
                this.container.add(object)
            })
        })
    }

    setPaintSupport()
    {
        this.paintSupport = {}

        this.paintSupport.mtlLoader = new MTLLoader();
        this.paintSupport.objLoader = new OBJLoader();
 
        this.paintSupport.mtlLoader.load(paintSupportTextureSource, (materials) => {
            materials.preload()
            this.paintSupport.objLoader.setMaterials(materials)
            this.paintSupport.objLoader.load(paintSupportSource, (object) => {
                this.object = object
                this.object.position.z = 4
                this.object.position.y = -2
                this.object.position.x = -5
                this.object.rotation.y = -1.2
                this.object.scale.set(0.8, 0.8, 0.8)
                this.container.add(object)
            })
        })
    }


    setWall()
    {
        this.wall = {} 
        this.wall.geometry = new THREE.BoxGeometry( 0.1, 2, 3 )
        this.wall.material = new THREE.MeshBasicMaterial({
            map: this.posterTexture,
        })
        this.wall.mesh = new THREE.Mesh(this.wall.geometry, this.wall.material)
        this.wall.mesh.position.y = 2.2
        this.wall.mesh.position.z = 0.5
        this.wall.mesh.position.x = -6.5
        this.wall.mesh.rotation.y = 3.2
        this.wall.mesh.rotation.z = 0.5
        this.container.add(this.wall.mesh)
    }
}
