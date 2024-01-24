<template>
	<div class="button" id="button">
		<p>+</p>
	</div>
	<div class="menu" id="menu">
		<p class="menu-item whatsapp-link"> Grupos De WhatsApp </p>
		<p class="menu-item"> Colaboradores </p>
		<p class="menu-item"> Trabaja Con Nosotros </p>
		<button class="button-close" id="button-close"> Cerrar Menu </button>
		<!-- <span class="material-symbols-outlined">arrow_back</span> -->
	</div>
</template>
  
<script>
export default {
	mounted(){
		const button = document.getElementById("button");
		button.addEventListener("click", function(){
			document.getElementById("menu").style.display = "block";
		});

		const button_close = document.getElementById("button_close");
		button_close.addEventListener("click", function(){
			document.getElementById("menu").style.display = "none";
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
	margin: -5px 0 0 24px;
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

	animation: fadeInLeftBig; /* referring directly to the animation's @keyframe declaration */
  animation-duration: .7s;
}

.menu-item:first-child {
	margin-top: 28px;
}

.menu-item {
	color: var(--md-sys-color-surface);
}

.oculto {
  display: none;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.visible {
  display: block;
  opacity: 1;
}

.button-close {
	background-color: var(--md-sys-color-surface);
	border: none;
	padding: 5px 12px;
	border-radius: 24px;
	cursor: pointer;
}
</style>