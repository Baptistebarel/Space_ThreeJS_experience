import * as THREE from 'three'


export default  class SpaceGalaxy3
{
    constructor(_option)
    {
        this.textureLoader = _option.textureLoader
        this.galaxyChoice1Planet1 = _option.galaxyChoice1Planet1
        this.galaxyChoice1Planet2 = _option.galaxyChoice1Planet2
        this.galaxyChoice1Planet3 = _option.galaxyChoice1Planet3
        this.galaxyBlackHole = _option.galaxyBlackHole
        this.galaxyChoice2Planet1 = _option.galaxyChoice2Planet1
        this.galaxyChoice2Planet2 = _option.galaxyChoice2Planet2
        this.galaxyChoice2Planet3 = _option.galaxyChoice2Planet3

        this.container = new THREE.Object3D()

        this.setStructure()
        this.setStars()
        this.setPlanet1()
        this.setPlanet2()
        this.setPlanet3()
        this.setPlanet4()
        this.setPlanet5()
        this.setPlanet6()
        this.setBlackHole()
        this.setStarAnimation()
    }

    setStructure()
    {
        this.sphereStructure = {}
        this.sphereStructure.geometry = new THREE.SphereGeometry(100, 45, 45 )
        this.sphereStructure.material = new THREE.MeshBasicMaterial({
            side: THREE.BackSide,
            map:  this.galaxyChoice1Planet1
        })
        this.sphereStructure.mesh = new THREE.Mesh(this.sphereStructure.geometry, this.sphereStructure.material)
        this.sphereStructure.mesh.position.z =  -600
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
        this.stars.points.position.z =  -600
        this.container.add(this.stars.points)
    }

    setStarAnimation()
    {
        const loop = () =>
        {
            window.requestAnimationFrame(loop)
            {
                this.stars.points.rotation.x += 0.002
                this.stars.points.rotation.y += 0.002

                this.planete1.mesh.rotation.x += 0.02
                this.planete1.mesh.rotation.y += 0.02

                this.planete2.mesh.rotation.x += 0.02
                this.planete2.mesh.rotation.y += 0.02

                this.planete3.mesh.rotation.x += 0.02
                this.planete3.mesh.rotation.y += 0.02

                this.planete4.mesh.rotation.x += 0.02
                this.planete4.mesh.rotation.y += 0.02

                this.planete5.mesh.rotation.x += 0.02
                this.planete5.mesh.rotation.y += 0.02

                this.planete6.mesh.rotation.x += 0.02
                this.planete6.mesh.rotation.y += 0.02
            }
        }
        loop()
    }

    setPlanet1()
    {
        this.planete1 = {}
        this.planete1.geometry = new THREE.SphereGeometry(10, 45, 45 )
        this.planete1.material = new THREE.MeshBasicMaterial({
            map:  this.galaxyChoice1Planet1
        })
        this.planete1.mesh = new THREE.Mesh(this.planete1.geometry, this.planete1.material)
        this.planete1.mesh.position.z =  -640
        this.planete1.mesh.position.y =  15
        this.planete1.mesh.position.x =  -45
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
        this.planete2.mesh.position.z =  -550
        this.planete2.mesh.position.x =  -20
        this.planete2.mesh.position.y =  -40
        this.planete2.mesh.rotation.z =  -0.5
        this.container.add(this.planete2.mesh)
    }

    setPlanet3()
    {
        this.planete3 = {}
        this.planete3.geometry = new THREE.SphereGeometry(6 , 45, 45 )
        this.planete3.material = new THREE.MeshBasicMaterial({
            map:  this.galaxyChoice1Planet3
        })
        this.planete3.mesh = new THREE.Mesh(this.planete3.geometry, this.planete3.material)
        this.planete3.mesh.position.z =  -600
        this.planete3.mesh.position.x =  80
        this.planete3.mesh.position.y =  50
        this.planete3.mesh.rotation.z =  -0.5
        this.container.add(this.planete3.mesh)
    }

    setPlanet4()
    {
        this.planete4 = {}
        this.planete4.geometry = new THREE.SphereGeometry(35, 45, 45 )
        this.planete4.material = new THREE.MeshBasicMaterial({
            map:  this.galaxyChoice2Planet3
        })
        this.planete4.mesh = new THREE.Mesh(this.planete4.geometry, this.planete4.material)
        this.planete4.mesh.position.z =  -650
        this.planete4.mesh.position.x =  70
        this.planete4.mesh.position.y =  -40
        this.planete4.mesh.rotation.z =  -0.5
        this.container.add(this.planete4.mesh)
    }

    setPlanet5()
    {
        this.planete5 = {}
        this.planete5.geometry = new THREE.SphereGeometry(10, 45, 45 )
        this.planete5.material = new THREE.MeshBasicMaterial({
            map:  this.galaxyChoice2Planet2
        })
        this.planete5.mesh = new THREE.Mesh(this.planete5.geometry, this.planete5.material)
        this.planete5.mesh.position.z =  -630
        this.planete5.mesh.position.x =  -75
        this.planete5.mesh.position.y =  -45
        this.planete5.mesh.rotation.z =  -0.5
        this.container.add(this.planete5.mesh)
    }

    setPlanet6()
    {
        this.planete6 = {}
        this.planete6.geometry = new THREE.SphereGeometry(10, 45, 45 )
        this.planete6.material = new THREE.MeshBasicMaterial({
            map:  this.galaxyChoice2Planet1
        })
        this.planete6.mesh = new THREE.Mesh(this.planete6.geometry, this.planete6.material)
        this.planete6.mesh.position.z =  -600
        this.planete6.mesh.position.x =  50
        this.planete6.mesh.position.y =  10
        this.planete6.mesh.rotation.z =  -0.5
        this.container.add(this.planete3.mesh)
    }

    setBlackHole()
    {
        this.blackHole = {}
        this.blackHole.geometry = new THREE.CircleGeometry(80, 32)
        this.blackHole.material = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
            map: this.galaxyBlackHole,
            transparent: true,
        })
        this.blackHole.mesh = new THREE.Mesh(this.blackHole.geometry, this.blackHole.material)
        
        this.blackHole.mesh.position.z = -550
        this.container.add(this.blackHole.mesh)
    }
}