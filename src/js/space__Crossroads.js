import * as THREE from 'three'

export default  class SpaceCrossroads 
{
    constructor(_option)
    {
        this.textureLoader = _option.textureLoader
        this.nightSkyTexture = _option.nightSkyTexture
        this.spaceImageChoice1 = _option.spaceChoice1
        this.spaceImageChoice2 = _option.spaceChoice2
        this.spaceImageChoice3 = _option.spaceChoice3
        this.star = _option.galaxyStar
        
        this.container = new THREE.Object3D()
        
        this.setSky()
        this.spaceChoice1()
        this.spaceChoice2()
        this.spaceChoice3()
        this.setStars()

    }

    setSky()
    {
        this.sky = {}
        this.sky.geometry = new THREE.SphereGeometry(45, 45, 45)
        this.sky.material = new THREE.MeshBasicMaterial({
            side: THREE.BackSide,
            map:  this.nightSkyTexture,
        })
        this.sky.mesh = new THREE.Mesh(this.sky.geometry, this.sky.material)
        this.sky.mesh.position.y = - 5.5
        this.sky.mesh.position.z =  -55.5
        this.sky.mesh.rotation.y =  -2
        this.container.add(this.sky.mesh)
    }

    spaceChoice1()
    {
        this.choice1 = {}
        this.choice1.geometry = new THREE.CircleGeometry(14, 30)
        this.choice1.material = new THREE.MeshBasicMaterial({
            side: THREE.BackSide,
            map: this.spaceImageChoice3,
            transparent: true
        })
        this.choice1.mesh = new THREE.Mesh(this.choice1.geometry, this.choice1.material)
        this.choice1.mesh.position.y = 5
        this.choice1.mesh.position.z =  -42
        this.container.add(this.choice1.mesh)
    }

    spaceChoice2()
    {
        this.choice2 = {}
        this.choice2.geometry = new THREE.CircleGeometry(12, 30)
        this.choice2.material = new THREE.MeshBasicMaterial({
            side: THREE.BackSide,
            map:  this.spaceImageChoice2,
            transparent: true
        })
        this.choice2.mesh = new THREE.Mesh(this.choice2.geometry, this.choice2.material)
        this.choice2.mesh.position.y = 5
        this.choice2.mesh.position.z =  -50
        this.choice2.mesh.position.x =  30
        this.choice2.mesh.rotation.y =  45
        this.container.add(this.choice2.mesh)
    }

    spaceChoice3()
    {
        this.choice3 = {}
        this.choice3.geometry = new THREE.CircleGeometry(12, 30)
        this.choice3.material = new THREE.MeshBasicMaterial({
            side: THREE.BackSide,
            map:  this.spaceImageChoice1,
            transparent: true
        })
        this.choice3.mesh = new THREE.Mesh(this.choice3.geometry, this.choice3.material)
        this.choice3.mesh.position.y = 5
        this.choice3.mesh.position.z =  -50
        this.choice3.mesh.position.x =  -30
        this.choice3.mesh.rotation.y =  -45
        this.container.add(this.choice3.mesh)
    }

    setStars()
    {
        this.stars = {}
        this.stars.geometry = new THREE.Geometry()

        for(let i = 0; i < 1800; i++)
        {
            const vertice = new THREE.Vector3()

            vertice.y = (Math.random() - 0.5) * 120
            vertice.x = (Math.random() - 0.5) * 120
            vertice.z = (Math.random() - 0.5) * 40

            this.stars.geometry.vertices.push(vertice) 
        }


        this.stars.material = new THREE.PointsMaterial({
            size: 0.5,
            sizeAttenuation: true, //grossir les particules en fonction de la distance attention lourd
            map: this.star,
            transparent: true
        })
        this.stars.points = new THREE.Points(this.stars.geometry, this.stars.material)
        this.stars.points.position.z =  -60
        this.container.add(this.stars.points)
    }
}