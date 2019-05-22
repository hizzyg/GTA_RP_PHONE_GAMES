<template>
  <canvas style="align:center;border: lpx solid black" id="myCanvas" height="700" width="400"></canvas>
</template>


<script>
src="/Bank.js"
</script>

<style scoped>
.screen{
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 18px;
  background-color: white;
}
.title{
  padding-left: 16px;
  height: 34px;
  line-height: 34px;
  font-weight: 700;
  color: white;
  background-color: rgb(76, 175, 80);
}
.elements{
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}
.hr{
  width: 100;
  height: 4px;
  margin-top: 4px;
  background-color: #EB202D;
}
.logo_maze {
  width: 100%; 
  height: auto;
  flex-shrink: 0;
}
.element-content{
  margin-top: 24px;
  display: block;
  height: 40px;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  color: #EB202D;
}
</style>
