<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div  class="jumbotron">
    <div v-for="(job, _index) in jobs">
        <div :id="_index" class="job" v-show="job.show">
          <H2>JobName: <input v-model="job.Name"></H2><br>
          <div>
            ssh.userName: <input v-model="job.Config.User">
            ssh.password: <input v-model="job.Config.Password" type="password">
            ssh.privateKey: <input v-model="job.Config.KeyPath">
            ssh.ip:  <input v-model="job.Config.Ip">
          </div>
          <br>
          <div>
            本地命令 (执行路径 命令 参数 example:E:\github\ticket.h5\web mvn 参数用json数组[  "clean",  "package",  "-Dmaven.test.skip=true",  "-P",  "artifactory,development",  "-Dfile.encoding=UTF-8"] ):
            <button v-on:click="addlB(_index)">ADD</button>
            <br>
            <ul><li v-for="(lb, lb_index) in job.LocalBefore">
              路径:<input v-model="lb.Path" size="30">
              命令:<input v-model="lb.Command" size="30">
              参数:<input v-model="lb.Args" size="50">
              <button v-on:click="removelB(_index,lb_index)">X</button><br>
            </li></ul>
          </div>
          <div>
            远程命令<button v-on:click="addrB(_index)">ADD</button>:<br>
            <ul>
              <li v-for="(rb, index) in job.RemoteBefore">
                命令:<input v-model="rb.Command" size="150"><button v-on:click="removerB(_index,index)">X</button>
              </li>
            </ul>
          </div>
          <br>
          <div>
            上传文件: 本地目录：<input v-model="job.UploadJob.LocalPath" size="70"> 远程目录：<input v-model="job.UploadJob.RemotePath" size="70">
          </div>
          <br>
          <div>
            上传文件后本地命令 (执行路径 命令 参数 example:E:\github\ticket.h5\web mvn 参数用json数组[  "clean",  "package",  "-Dmaven.test.skip=true",  "-P",  "artifactory,development",  "-Dfile.encoding=UTF-8"] ):
            <button v-on:click="addlA(_index)">ADD</button>
            <br>
            <ul><li v-for="(la, index) in job.LocalAfter">
              路径:<input v-model="la.Path" size="30">
              命令:<input v-model="la.Command" size="30">
              参数:<input v-model="la.Args" size="50">
              <button v-on:click="removelA(_index,index)">X</button><br>
            </li></ul>
          </div>
          <div>
            上传文件后远程命令<button v-on:click="addrA(_index)">ADD</button>:<br>
            <ul>
              <li v-for="(ra, index) in job.RemoteAfter">
                <input v-model="ra.Command" size="150"><button v-on:click="removerA(_index,index)">X</button>
              </li>
            </ul>
          </div>
          <br>
          <div>
            <button v-on:click="update(_index)">save</button>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import util from '../common/util.js'
Vue.use(VueResource)
Vue.http.options.emulateHTTP = true
export default {
  data () {
    return {
      jobs: [
        {
          show: true,
          Name: '',
          Config: {},
          LocalBefore: [],
          RemoteBefore: [],
          UploadJob: {},
          LocalAfter: [],
          RemoteAfter: []
        }
      ]
    }
  },
  methods: {
    addlB: function (_index) {
      if (this.jobs[_index].LocalBefore == null) {
        this.jobs[_index].LocalBefore = [{Path: '/path', Command: 'command', Args: ['args...']}]
      } else {
        this.jobs[_index].LocalBefore.push({Path: '/path', Command: 'command', Args: ['args...']})
      }
    },
    removelB: function (_index, index) {
      this.jobs[_index].LocalBefore.splice(index, 1)
    },
    addrB: function (_index) {
      if (this.jobs[_index].RemoteBefore == null) {
        this.jobs[_index].RemoteBefore = [{ Command: '' }]
      } else {
        this.jobs[_index].RemoteBefore.push({ Command: '' })
      }
    },
    removerB: function (_index, index) {
      this.jobs[_index].RemoteBefore.splice(index, 1)
    },
    addlA: function (_index) {
      if (this.jobs[_index].LocalAfter == null) {
        this.jobs[_index].LocalAfter = [{Path: '/path', Command: 'command', Args: ['args...']}]
      } else {
        this.jobs[_index].LocalAfter.push({Path: '/path', Command: 'command', Args: ['args...']})
      }
    },
    removelA: function (_index, index) {
      this.jobs[_index].LocalAfter.splice(index, 1)
    },
    addrA: function (_index) {
      if (this.jobs[_index].RemoteAfter == null) {
        this.jobs[_index].RemoteAfter = [{ Command: '' }]
      } else {
        this.jobs[_index].RemoteAfter.push({ Command: '' })
      }
    },
    removerA: function (_index, index) {
      this.jobs[_index].RemoteAfter.splice(index, 1)
    },
    chooseJob: function (event) {
      let index = event.target.selectedIndex
      for (let i = 0; i < this.jobs.length; i++) {
        this.jobs[i].show = false
      }
      this.jobs[index].show = true
      this.addlA(this.jobs.length - 1)
      this.removelA(this.jobs.length - 1, this.jobs[this.jobs.length - 1].LocalAfter.length - 1)
    },
    update: function (_index) {
      // console.log(_index)
      // console.log(this.jobs.length)
      if (this.jobs[_index] == null) {
        console.log('name must not null!') // -> returns a promise
        return
      }
      let json = JSON.stringify(this.jobs[_index])
      json = util.filterJSON(json)
      console.log(json)
      this.$http.get('http://localhost/rest/saveOrUpdate', {params: {job: json}}).then((response) => {
        // 响应成功回调
        console.log(response)
        util.alt('create success!')
      }, (response) => {
        // 响应错误回调
        console.log(response)
      })
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
