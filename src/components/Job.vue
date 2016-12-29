<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="job">
    <H2>JobName: {{jobName}}</H2><br>
    {{msg}}
    <div>
      ssh.userName: <input v-model="userName">
      ssh.password: <input v-model="password">
      ssh.ip:  <input v-model="ip">
    </div>
    <br>
    <div>
      本地命令 (执行路径;命令;参数(参数用空格隔开) example:E:\github\ticket.h5\web;mvn;clean package -Dmaven.test.skip=true -P artifactory,development -Dfile.encoding=UTF-8 ):
      <button v-on:click="addlB()">ADD</button>
      <br>
      <ul><li v-for="(lb, index) in localBefore">
        <input v-model="lb.text" size="150"><button v-on:click="removelB(index)">X</button>
      </li></ul>
    </div>
    <div>
      远程命令<button v-on:click="addrB()">ADD</button>:<br>
      <ul>
        <li v-for="(rb, index) in remoteBefore">
          <input v-model="rb.text" size="150"><button v-on:click="removerB(index)">X</button>
        </li>
      </ul>
    </div>
    <br>
    <div>
      上传文件: 本地目录：<input v-model="localPath" size="70"> 远程目录：<input v-model="remotePath" size="70">
    </div>
    <br>
    <div>
      上传文件后本地命令 (执行路径;命令;参数(参数用空格隔开) example:E:\github\ticket.h5\web;mvn;clean package -Dmaven.test.skip=true -P artifactory,development -Dfile.encoding=UTF-8 ):
      <button v-on:click="addlA()">ADD</button>
      <br>
      <ul><li v-for="(la, index) in localAfter">
        <input v-model="la.text" size="150"><button v-on:click="removelA(index)">X</button>
      </li></ul>
    </div>
    <div>
      上传文件后远程命令<button v-on:click="addrA()">ADD</button>:<br>
      <ul>
        <li v-for="(ra, index) in remoteAfter">
          <input v-model="ra.text" size="150"><button v-on:click="removerA(index)">X</button>
        </li>
      </ul>
    </div>
    <br>
    <div>
      <button>deploy</button><button>update</button><button>remove</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ip: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      jobName: 'h5',
      userName: '192.168.1.1',
      password: '123a',

      localBefore: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue.js' },
            { text: 'Build Something Awesome' }],
      remoteBefore: [
             { text: 'Learn JavaScript' },
             { text: 'Learn Vue.js' },
             { text: 'Build Something Awesome' }],
      localPath: '',
      remotePath: '',
      localAfter: [
             { text: 'Learn JavaScript' },
             { text: 'Learn Vue.js' },
             { text: 'Build Something Awesome' }],
      remoteAfter: [
              { text: 'Learn JavaScript' },
              { text: 'Learn Vue.js' },
              { text: 'Build Something Awesome' }],
      msg: ''
    }
  },
  methods: {
    goBack: function (e) {
      console.log('a')
    },
    addlB: function () {
      this.localBefore.push({ text: '' })
    },
    removelB: function (index) {
      this.localBefore.splice(index, 1)
    },
    addrB: function () {
      this.remoteBefore.push({ text: '' })
    },
    removerB: function (index) {
      this.remoteBefore.splice(index, 1)
    },
    addlA: function () {
      this.localAfter.push({ text: '' })
    },
    removelA: function (index) {
      this.localAfter.splice(index, 1)
    },
    addrA: function () {
      this.remoteAfter.push({ text: '' })
    },
    removerA: function (index) {
      this.remoteAfter.splice(index, 1)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
