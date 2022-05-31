<template>
  <div class="sidenav" id="mySidenav">
      <router-link to="/" id="home">首頁</router-link>
      <router-link to="/worktodos" id="worktodos">工作相關待辦事項</router-link>
      <router-link to="/hometodos" id="hometodos">家庭相關待辦事項</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#mySidenav{
    a{
        position: absolute;
        left:-180px;
        transition: 0.3s;
        padding: 15px;
        width: 200px;
        text-decoration: none;
        font-size: 20px;
        color: white;
        border-radius: 0 5px 5px 0;
        &:hover{
            left: 0;
        }
    }

    #home{
        top:110px;
        background-color: #ccc;
    }
    #worktodos{
        top: 170px;
        background-color: blue;
    }
    #hometodos{
        top: 230px;
        background-color: orange;
    }
}

</style>