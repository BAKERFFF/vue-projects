<template>
姓名:<input v-model="userName" /><!-- 双向绑定 userName --><br />
薪水:<input type="number" v-model="salary" /><!-- 双向绑定 salary --><br />


</template>
<script lang = "ts">
export default{
    name:"SalaryInfo"//这里是组件的名字，后续在父组件中引入时会用到
}
</script>
<script setup lang="ts">
import {ref} from "vue";
let userName = ref("张三");
let salary = ref(5000);

</script>
<style>


</style>