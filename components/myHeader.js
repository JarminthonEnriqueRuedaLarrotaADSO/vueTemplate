export default {
    name:"my-header",
    template:/*hmtl*/`
    <header>
		<a href="#" class="logo"><img src="img/logo.png"></a>
		<div class="bx bx-menu" id="menu-icon"></div>

		<ul class="navlist">
			<li><a href="#" class="active">Home</a></li>
			<li><a href="#">Trainings</a></li>
			<li><a href="#">Classes</a></li>
			<li><a href="#">Shows</a></li>
			<li><a href="#">Shortcodes</a></li>
			<li><a href="#">Contact</a></li>
		</ul>
	</header>
    `,
	data(){
		return{}
	},
	props:{
		
	}
}