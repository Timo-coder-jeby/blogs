export default {
  CHANGEMENU(state,payload){
    state.data.find(v => v.checked).data.forEach(item => item.checked = payload.title === item.title )
  },
  CHANGEPARENTMENU(state,payload){
    state.data.forEach(v => v.checked = v.name === payload)
  }
}
