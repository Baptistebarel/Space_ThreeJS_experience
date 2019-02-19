import * as THREE from 'three'

export default  class Structure 
{
    constructor(_option)
    {
        this.textureLoader = _option.textureLoader
        this.floorTexture = _option.floorTexture
        this.galaxieTexture = _option.galaxieTexture

        this.container = new THREE.Object3D()
        
        this.setRoof()
        this.setFloor()
        this.setRing()
        this.setWall()
        this.setSky()
    }

    setSky()
    {
        this.sky = {}
        this.sky.geometry = new THREE.SphereGeometry(10, 45, 45)
        this.sky.material = new THREE.MeshBasicMaterial({
            side: THREE.BackSide,
            map:  this.galaxieTexture
        })
        this.sky.mesh = new THREE.Mesh(this.sky.geometry, this.sky.material)
        this.sky.mesh.position.y = - 2.5
        this.container.add(this.sky.mesh)
    }

    setRoof()
    {
        this.roof = {}
        this.roof.geometry = new THREE.SphereGeometry(9, 45, 45, 0, 4.8)
        this.roof.material = new THREE.MeshBasicMaterial({
            color: 0X908570,
            side: THREE.DoubleSide
        })
        this.roof.mesh = new THREE.Mesh(this.roof.geometry, this.roof.material)
        this.roof.mesh.position.y = -3.5
        this.roof.mesh.rotation.y = -0.8
        this.container.add(this.roof.mesh)
    }
    setFloor()
    {
        this.floor = {}
        this.floor.geometry = new THREE.CircleGeometry(9, 36)
        this.floor.material = new THREE.MeshStandardMaterial({  
            map: this.floorTexture,
            side: THREE.DoubleSide
        })
        this.floor.mesh = new THREE.Mesh(this.floor.geometry, this.floor.material)
        this.floor.mesh.rotation.x = - Math.PI * 0.5
        this.floor.mesh.position.y = - 3.5
        this.container.add(this.floor.mesh)
    }
    setRing()
    {
        this.ring = {}
        this.ring.geometry = new THREE.RingGeometry(1, 8, 30)
        this.ring.material = new THREE.MeshStandardMaterial({  
            color: 0X908570,
            side: THREE.DoubleSide
        })
        this.ring.mesh = new THREE.Mesh(this.ring.geometry, this.ring.material)
        this.ring.mesh.rotation.x = 1
        this.ring.mesh.position.z = -3.5
        this.ring.mesh.position.y = 2.5
        this.container.add(this.ring.mesh)
    }

    setWall()
    {
        this.wall = {} 
        this.wall.geometry = new THREE.BoxGeometry( 0.1, 6, 14 )
        this.wall.material = new THREE.MeshBasicMaterial({
            color: 0X908570,
        })
        this.wall.mesh = new THREE.Mesh(this.wall.geometry, this.wall.material)
        this.wall.mesh.rotation.y = - Math.PI * 0.5 
        this.wall.mesh.position.y = -1.8
        this.wall.mesh.position.z = -5.5
        this.container.add(this.wall.mesh)
    }
}