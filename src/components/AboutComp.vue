<template>
  <main   class="cardAmintion"> 
    
    <div>

        <div class="mePic">
            <img src="https://i.postimg.cc/Fs7QznXb/stick-man.png" alt="" srcset="">
            <img src="https://i.postimg.cc/Fs7QznXb/stick-man.png" alt="" srcset="">
        </div>

        <div class="infoText">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates soluta, accusamus modi harum praesentium maxime, dolores sed culpa animi, ad dolorem illum? Itaque adipisci doloremque ratione illo inventore, laudantium nihil!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta veniam perferendis qui nostrum dolor rem ipsa, dignissimos incidunt tenetur officiis, consequuntur animi possimus sunt repudiandae earum ut cumque molestiae quia?</p>
        </div>
        

    </div>
</main> 
<div class="dropBtn">

    <div class="dropup-center dropdown">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        navigate to ..
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="/resume">Resume</a></li>
          <li><a class="dropdown-item" href="/projects">Projects</a></li>
          <li><a class="dropdown-item" href="/testermonals">Testermonals</a></li>
        </ul>
      </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
main{
background: rgb(232, 226, 226);
border-radius: 10px;
width: 80% ;
margin:auto;
}


.container{
    display: grid;
    padding: 10px ;
    
}
.infoText{
    font-size: 25px;
    text-align: center;
 
    
}
.dropBtn{
    margin: 12px  45%;

}
.btn{
    background: #000000;
    color: white;
    text-transform: capitalize;
}
.dropdown-item:hover{
    background-color: rgb(0, 0, 0);
    color: white;
}
.mePic{
    align-items: center;
    justify-content: center;
    display: flex;
}











@media only screen and (max-width: 600px) {

    img{
        width: 3rem;
    }
    p{
        font-size: 20px;
    }
    .dropBtn{
        margin-left:30% ;
    }
    
}
@media only screen and (max-width: 923px) {
    img{
        width: 6rem;
    }
}


</style>