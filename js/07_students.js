;(function () {
  // convert a student JavaScript object to an HTML string
  function buildStudentHTML (student) {
    // TODO: Your code goes here.
    
    return `
    
        
    <div style="
    name: ${student.name};
   isPresent: ${student.isPresent};
    ">
    </div>

    <div style="
    name: ${student.name};
   boolean: ${student.isPresent};
    ">
    </div>
        
    `
  }

  // here we have five students, each represented by a JavaScript Object,
  // all collected into an Array.
  const studentData = [
    {
      name: 'Kamilah',
      isPresent: true
      width: 250,
      height: 100,
      color: #00FF00
    },
    {
      name: 'Kim',
      isPresent: true
    },
    {
      name: 'Stuart',
      isPresent: false
    },
    {
      name: 'Ron',
      isPresent: true
    },
    {
      name: 'Krissy',
      isPresent: false
    }
  ]
  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('studentsBtn')

  function clickStudentsBtn () {

   
    contentElement.innerHTML = `
      <div class="d-flex flex-column align-items-center">
      ${studentData.map(buildStudentHTML).join('')}
      </div>
      `
  }
  btnEl.addEventListener('click', clickStudentsBtn)
  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.

})()
