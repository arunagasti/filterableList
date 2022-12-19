let filterInput = document.getElementById('filterInput');

let listItem = document.querySelector('#names');

filterInput.addEventListener('keyup',filterEvents);

function filterEvents(e)
{
    var name = e.target.value.toLowerCase();

    var list = listItem.querySelectorAll('#insideNames');

   Array.from(list).forEach(function(item){
    var listText = item.firstChild.textContent;
    if(listText.toLowerCase().indexOf(name) !=-1)
    {
        item.style.display = 'block';
    }
    else
    {
        item.style.display = 'none';
    }
   }); 



}
