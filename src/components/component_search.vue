<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template class="content">
    <div class="search-bar">
        <a href="#" class="burger-menu">
            <span class="material-symbols-outlined">menu</span>
        </a>
        <input type="text" class="search" placeholder="Calculo diferencial.">
        <div class="search-icon">
            <span class="material-symbols-outlined">search</span>
        </div>
    </div>
</template>

<script>
</script>

<style scoped> 
    .search-bar {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
    }

    .search-bar > .burger-menu, .search-bar > .search-icon {
        box-sizing: border-box;
        padding: 11px;
        display: flex;
        max-height: 100%;
        min-height: 100%;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        border-radius: 50px 0 0 50px;
    }

    .search-bar > .search-icon {
        border-radius: 0px 50px 50px 0px;
    }

    .search-bar > input{
        box-sizing: border-box;
        width: 425px;
        outline: none;
        border: none;
        padding: 15px 10px;
    }    
</style>