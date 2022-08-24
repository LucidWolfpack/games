

// functions are..  
// reusable, perfroms Limited service
// excepts data as input, returns data as output
//


function greetUser() {
  console.log("hello")
}

greetUser()

//parameters are place holders, arguements are actual data

function addOne(num) {
  return num + 1
}

//two ways of writting functions: one, Declaration. two, Expression

const letter = (char) => "A" + char


console.log(
  addOne(4),
  letter("b")
)



