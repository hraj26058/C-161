AFRAME.registerComponent("bullets",{
    init:function(){
        this.shootBullet();
    },
    shootBullet:function(){
        window.addEventListener("keydown",(e) =>{
            if(e.key==="z"){
                var bullets=document.createElement("a-entity");
                bullets.setAttribute("geometry",{
                    primitive:"sphere",
                    radius:0.1
                });
                bullets.setAttribute("material","color","black");
                var cam=document.querySelector("#camera");
                pos =cam.getAttribute("position");
                bullets.setAttribute("position",{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                });
                var camera=document.querySelector("#camera").object3D;
                var direction=new THREE.Vector3();
                camera.getWorldDirection(direction);
                bullets.setAttribute("velocity",direction.multiplyScalar(-10));
                var scene=document.querySelector("#scene");
                scene.appendChild(bullets);
            }
        })
    }
})