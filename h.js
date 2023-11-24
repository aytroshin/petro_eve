const form = document.getElementById('form')
function getValues(event){
  event.preventDefault();
   const fields = document.querySelectorAll('input');
   const values = {};
   fields.forEach(field => {
     const {name, value} = field;
     values[name] = value;


   });
  console.log(values)
}
form.addEventListener('submit', getValues);