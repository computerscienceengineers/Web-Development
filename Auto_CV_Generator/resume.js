function show()
{
   
    let cName = this.className;
    let cIndex = cName.lastIndexOf(" ");
    cName = cName.slice(cIndex);
    let pElement = document.getElementsByClassName(cName)[1];
    pElement.innerHTML=this.value;

    
    
}
var inputs=document.getElementsByTagName("input");
var textAreas=document.getElementsByTagName("textarea");

for( let textArea of textAreas)
{
    textArea.addEventListener("keyup",show);
}

for(let input of inputs )
{
    console.log(input);
    input.addEventListener("keyup",show);

}


