const frame = document.getElementById('assignments')
frame.value = (localStorage.getItem('assignments')) ? '[' + JSON.parse(localStorage.getItem('assignments')) + ']' : "" ;

const addAssignment =  (key) => {
  assignments = (localStorage.getItem('assignments')) ? JSON.parse(localStorage.getItem('assignments')) : [] ;
  assignments.includes(key) ? '' : assignments.push(key) ;
  localStorage.setItem('assignments', JSON.stringify(assignments))
  frame.value = JSON.stringify(assignments)
}

const clearAssignments = () => {
    localStorage.setItem('assignments', '')
    localStorage.removeItem('assignments')
    frame.value = ''
}