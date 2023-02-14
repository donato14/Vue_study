<template>
  <div>
    <div>
      <h5><router-link to="/detail/0">{{블로그글[0].title}}</router-link></h5>
      <p>{{블로그글[0].date}}</p>
    </div>
    <div>
      <h5 @click="$router.push('/detail/1')">{{블로그글[1].title}}</h5>
      <p>{{블로그글[1].date}}</p>
    </div>
    <div>
      <h5><router-link to="/detail/2">{{블로그글[2].title}}</router-link></h5>
      <p>{{블로그글[2].date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListContent",
  props: {
    블로그글 : Array,
  }
}
</script>

<style>

</style>