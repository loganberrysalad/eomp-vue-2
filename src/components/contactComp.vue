<template>
    <h1>contact form injected</h1>
    <form method="POST">

<div class="ContactForm">
    <label>Name</label>
    <input type="text" class="form-control" placeholder="e.g Jeffy" aria-label="Name">
    <label>Email</label>
    <input type="email" class="form-control" placeholder="e.g loganThomas@gmail.com" aria-label="Email">
    <label>Message</label>
    <textarea type="text" class="form-control" placeholder="Text"></textarea>

  <button class="btn btn-outline-info" type="submit">SUBMIT</button>
</div>
</form>
</template>


<style>
h1{
    text-align: center;
}
.ContactForm{
    width: 60rem;
    margin: auto;

}
.form-control{
    margin: 10px;
}
label{
    text-decoration: underline;
    text-decoration-color: rgb(61, 51, 51);
    text-decoration-style:dashed;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;

}


</style>