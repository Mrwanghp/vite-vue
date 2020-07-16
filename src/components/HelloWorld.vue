<template>
<div>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>11112222222211111111111111asdadasdasa1fasf51afs1sa</p>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  mounted () {
    console.log(process.env)
  }
}
</script>
