<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({

})
</script>
<template>
<div class="container">
    <div class="space-filler"></div>

</div>
</template>
<style scoped>
.container{
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(4,1fr);
    width: 500px;
    height: 600px;
    background-color: azure;
    border: solid grey 1px;
}

.space-filler{
    background-color: lavender;
    width:100%;
    height:100%;
    border:dashed 1px grey;
}
</style>