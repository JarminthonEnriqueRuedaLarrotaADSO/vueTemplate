export default {
    name:"my-section",
    template:/*html*/`
    <section class="main">
		<div class="main-text">
			<h1 v-text="configuracion.textSection1"></h1>
			<button type="button" v-text="configuracion.textSectionButton"></button>
		</div>
	</section>
    
    
    `,
   
    props:{
        configuracion:Object
    }
}