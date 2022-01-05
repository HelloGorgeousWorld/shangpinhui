<template>
  <div>
    <h1>params参数---{{$route.params.keywords}}---{{keywords}}</h1>
    <h1>query参数---{{$route.query.k}}---{{k}}</h1>
  </div>
</template>

<script>
export default {
  name: '',
  props:['keywords','k']
}
</script>

<style>

</style>