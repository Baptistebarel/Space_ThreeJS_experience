import * as THREE from 'three'


export default  class SpaceGalaxy1 
{
    constructor(_option)
    {
        this.textureLoader = _option.textureLoader
        this.galaxyChoice1 = _option.galaxyChoice1
        this.galaxyChoice1Planet1 = _option.galaxyChoice1Planet1
        this.galaxyChoice1Planet2 = _option.galaxyChoice1Planet2
        this.galaxyChoice1Planet3 = _option.galaxyChoice1Planet3
        this.galaxyChoice2Planet3 = _option.galaxyChoice2Planet3
        this.galaxySun = _option.galaxySun

        this.container = new THREE.Object3D()

        this.setStructure()
        this.setStars()
        this.setPlanet1()
        this.setPlanet2()
        this.setPlanet3()
        this.setPlanet4()
        this.setSun()

    }

    setStructure()
    {
        this.sphereStructure = {}
        this.sphereStructure.geometry = new THREE.SphereGeometry(100, 45, 45 )
        this.sphereStructure.material = new THREE.MeshBasicMaterial({
            side: THREE.BackSide,
            map:  this.galaxyChoice1
        })
        this.sphereStructure.mesh = new THREE.Mesh(this.sphereStructure.geometry, this.sphereStructure.material)
        this.sphereStructure.mesh.position.z =  -200
        this.sphereStructure.mesh.position.x =  -20
        this.sphereStructure.mesh.rotation.x =  0.4
        this.sphereStructure.mesh.rotation.y =  -0.8
        this.container.add(this.sphereStructure.mesh)
    }

    setStars()
    {
        this.stars = {}
        this.stars.geometry = new THREE.Geometry()

        for(let i = 0; i < 2000; i++)
        {
            const vertice = new THREE.Vector3()

            vertice.y = (Math.random() - 0.5) * 150
            vertice.x = (Math.random() - 0.5) * 150
            vertice.z = (Math.random() - 0.5) * 200

            this.stars.geometry.vertices.push(vertice) 
        }


        this.stars.material = new THREE.PointsMaterial({
            size: 0.1,
            sizeAttenuation: true, //grossir les particules en fonction de la distance attention lourd
        })
        this.stars.points = new THREE.Points(this.stars.geometry, this.stars.material)
        this.stars.points.position.z =  -200
        this.container.add(this.stars.points)
    }

    setPlanet1()
    {
        this.planete1 = {}
        this.planete1.geometry = new THREE.SphereGeometry(10, 45, 45 )
        this.planete1.material = new THREE.MeshBasicMaterial({
            map:  this.galaxyChoice2Planet3
        })
        this.planete1.mesh = new THREE.Mesh(this.planete1.geometry, this.planete1.material)
        this.planete1.mesh.position.z =  -240
        this.planete1.mesh.position.x =  -50
        this.planete1.mesh.rotation.z =  -0.5
        this.container.add(this.planete1.mesh)
    }

    setPlanet2()
    {
        this.planete2 = {}
        this.planete2.geometry = new THREE.SphereGeometry(10, 45, 45 )
        this.planete2.material = new THREE.MeshBasicMaterial({
            map:  this.galaxyChoice1Planet2
        })
        this.planete2.mesh = new THREE.Mesh(this.planete2.geometry, this.planete2.material)
        this.planete2.mesh.position.z =  -150
        this.planete2.mesh.position.x =  -20
        this.planete2.mesh.position.y =  -40
        this.planete2.mesh.rotation.z =  -0.5
        this.container.add(this.planete2.mesh)
    }

    setPlanet3()
    {
        this.planete3 = {}
        this.planete3.geometry = new THREE.SphereGeometry(10, 45, 45 )
        this.planete3.material = new THREE.MeshBasicMaterial({
            map:  this.galaxyChoice1Planet3
        })
        this.planete3.mesh = new THREE.Mesh(this.planete3.geometry, this.planete3.material)
        this.planete3.mesh.position.z =  -200
        this.planete3.mesh.position.x =  50
        this.planete3.mesh.position.y =  20
        this.planete3.mesh.rotation.z =  -0.5
        this.container.add(this.planete3.mesh)
    }

    setPlanet4()
    {
        this.planete4 = {}
        this.planete4.geometry = new THREE.SphereGeometry(35, 45, 45 )
        this.planete4.material = new THREE.MeshBasicMaterial({
            map:  this.galaxyChoice1Planet1
        })
        this.planete4.mesh = new THREE.Mesh(this.planete4.geometry, this.planete4.material)
        this.planete4.mesh.position.z =  -230
        this.planete4.mesh.position.x =  70
        this.planete4.mesh.position.y =  -35
        this.planete4.mesh.rotation.z =  -0.9
        this.container.add(this.planete4.mesh)
    }

    setSun()
    {
        this.sun = {}
        this.sun.geometry = new THREE.CircleGeometry(80, 32)
        this.sun.material = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
            map: this.galaxySun,
            transparent: true
        })
        this.sun.mesh = new THREE.Mesh(this.sun.geometry, this.sun.material)
        
        this.sun.mesh.position.z = -170
        this.sun.mesh.position.y = 20
        this.sun.mesh.position.x = -50
        this.sun.mesh.rotation.y = -0.7
        this.sun.mesh.rotation.x = -0.6
        this.container.add(this.sun.mesh)
    }
}