<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type {TargetInfo} from "./SavingsSummary.vue";
import RadialProgress from "vue3-radial-progress";


export default defineComponent({
    data(){
        return{
            current:0,
            speed:1,
        }
    },
    props: {
        target:{
            type:Object as PropType<TargetInfo>,
            required:true,
    }
},
components:{RadialProgress},
methods: {
    update(){
        if(this.current >= this.target.current){ return }
        else{
            this.speed+=10
            this.current+= 5
            setTimeout(this.update,1)
            }
    },
   formatedAmount(amount:number) { //need to ask someone for help about what the best way to export import this function is??
            if(amount % 1 !== 0){
                return amount.toLocaleString('en-us')
            } else {
                return amount.toLocaleString('en-us') + '.00'
        }},
},
mounted(){
    this.update()
},

}
)

</script>

<template>

<div class="st flex-row">
      <RadialProgress 
   :diameter="60"
   :completed-steps="current"
   :total-steps="Number(target.target)"
   start-color='#FF93B6'
   stop-color='#FFBB50'
   inner-stroke-color="#FFFFFFA6"
   :stroke-width="7"
   :inner-stroke-width="7" class="progress-circle">
    <!-- Your inner content here -->
  </RadialProgress>
    <li>
        <label for="saving-target-1" class="h5" >{{target.goal}}</label>
        <div><span class="b1">${{formatedAmount(Number(target.current))}}</span><span class="b1-half">/${{formatedAmount(Number(target.target))}}</span></div>
    </li>
</div>
</template>

<style scoped>
@import "SavingsSummary.css";
.progress-circle{
    position: relative;
    top:-2px;
}

.flex-row{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
}

li{
    margin-left:25px;
}

</style>