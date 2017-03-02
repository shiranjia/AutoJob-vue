export default{

  filterJSON (json) {
    while (json.indexOf(':"[') > 0) {
      json = json.replace(':"[', ':[')
    }
    while (json.indexOf(']"') > 0) {
      json = json.replace(']"', ']')
    }
    while (json.indexOf('\\"') > 0) {
      json = json.replace('\\"', '"')
    }
    while (json.indexOf('\\\\') > 0) {
      json = json.replace('\\\\', '/')
    }
    return json
  },

  alt(msg){
    alert(msg)
  }
}

