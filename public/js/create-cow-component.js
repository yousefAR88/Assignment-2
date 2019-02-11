AFRAME.registerComponent('create-cow-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#createSound');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            Context_AF.createCow();
            Context_AF.createskull();
            

            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();
        });
    },
    createCow : function() {
        const Context_AF = this;

      
        // this creates one of the skulls when the tombstone is clicked
        let cowElem = document.createElement('a-entity');
        cowElem.setAttribute('obj-model', {obj:'/assets/models/VoodooSkull.obj'});
        cowElem.setAttribute('scale', {x:0.02, y:0.02, z:0.02});
        cowElem.setAttribute('rotation', {x:-35.587, z:26});
        cowElem.setAttribute('position', {x:-0.5, y:1, z:-19});
        cowElem.setAttribute('material',{src:'/assets/textures/VoodooSkullAO.png'});
        cowElem.setAttribute('shadow','cast:true; receive:true');
        
        
       // cowElem.setAttribute('material', {src:'/assets/textures/VoodooSkull.png'});
      
        
        cowElem.setAttribute('remove-component', {obj:'/assets/models/stone.obj'}); 
        
       //cowElem.setAttribute('position', {x:2, y:0, z:-4});//
       cowElem.setAttribute("cursor");
       
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(cowElem);
    },
     // this creates the other skull when the tombstone is clicked
        createskull : function() {
        const Context_AF = this;

         let skull = document.createElement('a-entity');
        skull.setAttribute('obj-model', {obj:'/assets/models/VoodooSkull.obj'});
        skull.setAttribute('scale', {x:0.02, y:0.02, z:0.02});
        skull.setAttribute('rotation', {x:-35.587, z:-26});
        skull.setAttribute('position', {x:0.5, y:1, z:-19});
       skull.setAttribute('material',{src:'/assets/textures/VoodooSkullNM.png'});
       skull.setAttribute('shadow','cast:true; receive:true');
       
       
       
       skull.setAttribute('remove-component', {obj:'/assets/models/stone.obj'}); 
        
       //cowElem.setAttribute('position', {x:2, y:0, z:-4});//
       skull.setAttribute("cursor");
       
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(skull);
    }
});