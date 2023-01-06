## Code Style
- Variables/Functions: camelCase
- File names: CapitalFirstLetter
- Folder names: lower-case-dashes

## References
Navigation Bar
- From https://www.w3schools.com/howto/howto_css_topnav_right.asp
```
<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <div class="topnav-right">
    <a href="#search">Search</a>
    <a href="#about">About</a>
  </div>
</div>
```
Pop-Up Menu
- From https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

Storing and Using Images from localStorage
- From https://stackoverflow.com/questions/19183180/how-to-save-an-image-to-localstorage-and-display-it-on-the-next-page

Adding a new child element
- From https://www.w3schools.com/jsref/met_node_appendchild.asp
```
const node = document.createElement("li");
const textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);

```
Adding an event listener for all pieces in gallery view

- From https://stackoverflow.com/questions/49680484/how-to-add-one-event-listener-for-all-buttons
```
const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  console.dir(event.target.id);
})
```


