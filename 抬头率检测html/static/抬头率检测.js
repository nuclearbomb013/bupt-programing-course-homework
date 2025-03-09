function test(){
    alert("1")
}
function upload()
{

}
function calculate(){
number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;
fetch(`/calculate?number1=${number1}&number2=${number2}`)
.then(response =>response.json())
.then(data =>{
document.getElementById("result").innerText="结果:"+data.result;
})
.catch(error => console.error('Error:', error));
}