<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template class="content">
    <div class="search-bar">
        <a href="#" class="burger-menu">
            <span class="material-symbols-outlined">menu</span>
        </a>
        <input type="text" class="search" placeholder="Calculo diferencial.">
        <div class="search-icon">
            <!-- <img src="../assets/magnifying-glass.png" alt="" width="24px"> -->
        </div>
    </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
    .search-bar {
        /* max-height: 46px; */
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
    }

    .search-bar > .burger-menu{
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

    .search-bar > input{
        box-sizing: border-box;

        width: 425px;
        outline: none;
        border: none;
        border-radius: 0px 50px 50px 0;
        padding: 15px 20px;
    }
    
    </style>