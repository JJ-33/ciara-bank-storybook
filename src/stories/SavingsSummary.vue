
<script lang="ts">

import {defineComponent, type PropType} from 'vue'
import SavingsTarget from './SavingsTarget.vue'

export interface TargetInfo  {
    goal:String,
    current:Number,
    target:Number,
}

const defaultTarget1:TargetInfo = {
    goal:"New Iphone",
    current:521,
    target:1200
}

const defaultTarget2:TargetInfo = {
    goal:"Airfryer",
    current:184,
    target:200
}

const defaultTarget3:TargetInfo = {
    goal:"Lamp",
    current:65,
    target:98
}

const defaultTargetList: TargetInfo[] = [
    defaultTarget1,defaultTarget2,defaultTarget3
]

export default defineComponent({
    props: {
        fullName: {
            type: String,
            default: "Lola Reiner"
        },
        bsb: {
            type: Number,
            default: 123456,
        },
        accountNumber: {
            type: Number,
            default: 123456789,
        },
        accountBalance: {
            type: Number,
            default: 2348,
        },
        targets: {
            type: Object as PropType<TargetInfo[]>,
            default:defaultTargetList
        }
    },
    components: { SavingsTarget },
    methods:{
       formatedAmount(amount:number) {
            if(amount % 1 !== 0){
                return amount.toLocaleString('en-us')
            } else {
                return amount.toLocaleString('en-us') + '.00'
        }},
    }

})
</script>
<template>
<div id="savings-summary">
<div id="bg-circle-1"></div>
<div id="bg-circle-2"></div>
<div id="bg-circle-3"></div>

<div>
    <label for="name" class="h6">name</label>
    <div id="name" class="b1 p-10">{{fullName}}</div>
</div>
<div class="details">
    <div>
    <label for="bsb" class="h6">bsb</label>
    <div id="bsb" class="b1-half">{{`${String(bsb).slice(0,3)} ${String(bsb).slice(3,6)}`}}</div> 
    </div> 
    <div>  
    <label for="accnum" class="h6">account number</label>
    <div class="b1-half">{{accountNumber}}</div>
    </div>
</div>
<hr>
<div>
    <label for="balance" class="h6">account balance</label>
    <h1 id="balance" class="h1">${{formatedAmount(accountBalance)}}</h1>
</div>
<hr>
<div class>
    <h2 class="h2">Savings buckets</h2>
    <ul>
    <div class="savings-targets">
        <div v-for="target in targets" >
        <SavingsTarget :target="target"></SavingsTarget>
        </div>
    </div>
    </ul>
</div>
    <div class="options b1-half">
        <div>
            See all <svg id="forward" width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 26H32.34L22.58 35.76C21.8 36.54 21.8 37.82 22.58 38.6C23.36 39.38 24.62 39.38 25.4 38.6L38.58 25.42C39.36 24.64 39.36 23.38 38.58 22.6L25.42 9.4C24.64 8.62 23.38 8.62 22.6 9.4C21.82 10.18 21.82 11.44 22.6 12.22L32.34 22H10C8.9 22 8 22.9 8 24C8 25.1 8.9 26 10 26Z" fill="white"/>
</svg>

        </div>
        |
        <div>
            Create new <svg id="plus" width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM32 26H26V32C26 33.1 25.1 34 24 34C22.9 34 22 33.1 22 32V26H16C14.9 26 14 25.1 14 24C14 22.9 14.9 22 16 22H22V16C22 14.9 22.9 14 24 14C25.1 14 26 14.9 26 16V22H32C33.1 22 34 22.9 34 24C34 25.1 33.1 26 32 26Z" fill="white"/>
</svg>


        </div>
    </div>
</div>


</template>
<style scoped>
.options{
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 20px;
    padding: 30px 0px 20px;
}

#bg-circle-1{
    position:absolute;
    width:346px;
    height: 281px;
    border:rgba(255, 255, 255,0.1) solid 60px;
    z-index: 1;
    border-radius: 100%;
    box-sizing: border-box;
    top:-20px;
    left:-100px;
}

.savings-targets{
    display: flex;
    flex-direction: column;
    gap:18px;
}

#bg-circle-2{
    position:absolute;
    width:346px;
    height: 281px;
    border:rgba(255, 255, 255,0.05) solid 60px;
    z-index: 1;
    border-radius: 100%;
    box-sizing: border-box;
    top:250px;
    left:100px;
}

#bg-circle-3{
    position:absolute;
    width:346px;
    height: 281px;
    border:rgba(255, 255, 255,0.1) solid 60px;
    z-index: 1;
    border-radius: 100%;
    box-sizing: border-box;
    top:550px;
    left:-120px;
}

.p-10{
    padding-top:10px;
    padding-bottom:10px;
}
.details{
    display:flex;
    gap:40px;
}

#savings-summary{
    background: linear-gradient(149.54deg, #FF93B6 -24.3%, #601BCE 96.11%);
    box-shadow: 0px -5px 10px rgba(30, 30, 30, 0.22);
    border-radius: 25px;
    padding: 24px;
}

#forward
{ 
 position: relative;
 top: 1px
}

#plus{
    position: relative;
    top:4px;
}

hr{
    border-top: 3px solid #FFFFFF;
    border-bottom: 0px;
    border-left: 0px;
    border-right: 0px;
}

</style>