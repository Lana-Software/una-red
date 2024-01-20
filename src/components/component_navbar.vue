<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template class="content">
    <div class="nav">
        <md-tabs>
            <md-primary-tab>
                <a href="#">Inicio</a>
            </md-primary-tab>
            <md-primary-tab>
                <a href="#">Asignaturas</a>
            </md-primary-tab>
            <md-primary-tab>
                <a href="#">Profesores Recomendados</a>
            </md-primary-tab>
            <md-primary-tab>
                <a href="#">UNAL Emprende</a>
            </md-primary-tab>
            <md-primary-tab>
                <a href="../views/Team.vue">
                    <span>Lana Team</span>
                </a>
            </md-primary-tab>
        </md-tabs>
    </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only --> 
<style scoped>
    .nav{
        display: flex;
        flex: 1 0 70%;
        justify-content: center;
        align-items: center;
    }

    md-primary-tab {
        font-weight: 500;
    }

    .item:hover {
        border-bottom: 3px solid #191717;
    }
</style>
