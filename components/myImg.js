export default {
    name:"my-imagenes",
    template:/*html*/`
    <div class="left">
		<img :src="configuracion.imagenes[0]">
	</div>
	<div class="right">
		<img :src="configuracion.imagenes[0]">
	</div>`,
    
    props:{
        configuracion:Object
    }
}