document.querySelectorAll('.clickable-item').forEach(item => {
    item.addEventListener('click', handleClick); });/*asynchronous Event Handler which runs
     constantly and is triggered when a 'clickable item' is clicked*/

document.getElementById('searchInput').addEventListener('input', searchContent);
function handleClick(event){
const clickedItemId = event.target.id;// find what the clicked item is
const iframe = document.getElementById('myIframe'); //go find the iframe
iframe.src = clickedItemId + '.html';//change the source of the iframe to the item you just clicked
}
function searchContent() {
    const query = document.getElementById('searchInput').value.toLowerCase();//shift it down ASCII makes it easier to look for
    const table = document.getElementById('contentTable'); //save what is actually existing in the html table
    const rows = table.querySelectorAll('tr');//saves all the rows
  
    rows.forEach((row, index) => {
      if (index > 0) { // Skip the header row
        const cells = row.querySelectorAll('td');// each element/cells in the table of pages
        let rowContent = '';//null
        cells.forEach(cell => {
          rowContent += cell.innerText.toLowerCase() + ' '; //convert the content to lower case so we compare each item
        });
        row.style.display = rowContent.includes(query) ? '' : 'none'; //if the row contains any of the content then it adds it otherwise it removes it from table
      }
    });
}

// this function below is added
// this function is called with HTML
////////////////////////////////////
function toggleDropdown (buttonID) {
  //buttonID.parentElement is the element containing button
  //buttonID.parentElement.nextElementSibling is the element following the element containing button
  const content = buttonID.parentElement.nextElementSibling;

  console.log(content)
    if (content.style.display != "none") {
        content.style.display = "none";
        //flips image upon toggle
        buttonID.firstElementChild.style.transform = "scaleY(1)";
    } else {
        content.style.display = 'block';
        //flips image upon toggle
        buttonID.firstElementChild.style.transform = "scaleY(-1)";
    }
    
}
