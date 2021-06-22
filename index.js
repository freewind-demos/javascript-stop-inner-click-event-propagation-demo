function aaa() {
  console.log('### aaa clicked')
}

function bbb(event) {
  event.stopPropagation()
  console.log('### bbb clicked')
}

function ccc() {
  console.log('### ccc clicked')
}

function hello() {
  console.log('### hello clicked')
}
