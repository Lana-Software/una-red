<template>
	<div class="button" id="button">  
		<p>+</p>
	</div>
	<div class="menu" id="menu">
		<div class="items">
			<router-link to="/info"><p class="menu-item whatsapp-link"> Grupos de WhatsApp </p></router-link>
			<router-link to="/"><p class="menu-item"> Colaboradores </p></router-link>
			<router-link to="/"><p class="menu-item"> Trabaja con nosotros </p></router-link>
			<button class="button-close" id="button-close"> Cerrar menú </button>
		</div>
	</div>
</template>
  
<script>
export default {
	mounted(){
		const button = document.getElementById("button");
		button.addEventListener("click", function(){
			document.getElementById("menu").style.display = "block";
		});
		
		const button_close = document.getElementById("button-close");
		button_close.addEventListener("click", function(){
			document.getElementById("menu").classList.add("menu-hide");
			setTimeout(function () {
				document.getElementById("menu").style.display = "none";
				document.getElementById("menu").classList.remove("menu-hide");
			}, 680);
		})
	}
}
</script>
  
<style scoped>
.button {
	width: 36px;
	height: 36px;
	position: absolute;
	float: left;
	background-color: var(--md-sys-color-primary);
	color: var(--md-sys-color-surface);
	margin: -7px 0 0 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	cursor: pointer;
}

.menu {
	display: none;
	width: 30%;
	height: 100%;
	position: absolute;
  top: 0;
  left: 0; 
	background: var(--md-sys-color-primary);
	text-align: center;

	animation: fadeInLeftBig;
  animation-duration: .7s;
}

.items {
	margin-top: 28px;
}

.menu-item {
	color: var(--md-sys-color-surface);
}

.menu-hide {
	animation: fadeOutLeft;
  animation-duration: .7s;
}

.button-close {
	background-color: var(--md-sys-color-surface);
	border: none;
	padding: 5px 12px;
	border-radius: 24px;
	cursor: pointer;
}
</style>