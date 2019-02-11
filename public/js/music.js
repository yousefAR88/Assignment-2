AFRAME.registerComponent('music', {
    schema: {},
    init : function() {
        const Context_AF = this;

        Context_AF.soundElem = document.querySelector('#erasenoise');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            
            Context_AF.soundElem.components['sound'].playSound();
        });
    },
   
});
//this js is used for the music playing when you click on the sky