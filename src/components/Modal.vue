<template>
    <div class="modal" @click.stop="chagesMd"></div>
</template>

<script>
    export default {
        name: "Modal",
        props: ['isShow'],
        methods: {
          chagesMd(){
            console.log(121212);
            this.$emit('update:isShow', !this.isShow);
          }
        }
    }
</script>

<style scoped>
  .modal{
    position: fixed;
    left: 0;
    top: 1rem;
    width: 100%;
    height: calc( 100vh - 1rem);
    background-color: rgba(0,0,0,0.7);
  }
</style>
