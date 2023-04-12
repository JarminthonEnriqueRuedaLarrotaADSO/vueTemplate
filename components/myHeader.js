export default {
    name:"my-header",
    template:/*hmtl*/`
    <header>
		<a href="#" class="logo"><img :src="configuracion.imagenes[1]" ></a>
		<div ref="menuIcon" @click="alternarMenu" class="bx bx-menu" id="menu-icon"></div>

		<ul ref="navList" class="navlist">
			<li><a href="#" class="active" v-text="configuracion.links[0]"></a></li>
			<li><a href="#"v-text="configuracion.links[1]"></a></li>
			<li><a href="#"v-text="configuracion.links[2]"></a></li>
			<li><a href="#"v-text="configuracion.links[3]"></a></li>
			<li><a href="#"v-text="configuracion.links[4]"></a></li>
			<li><a href="#"v-text="configuracion.links[5]"></a></li>
		</ul>
	</header>
    `,
	data(){
		return{
			menuAbierto: false
		}
	},
	methods: {
		alternarMenu() {
		  this.menuAbierto = !this.menuAbierto;
		  this.$refs.menuIcon.classList.toggle('bx-x');
		  this.$refs.navList.classList.toggle('open');
		}
	  },
	props:{
		configuracion:Object
	}
}