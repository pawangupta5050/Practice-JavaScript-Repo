// const download = () => {
//     const resume = document.getElementById("resume").innerHTML;
//     const style = document.getElementsByTagName('link')
//     console.log(style)
//     let a = window.open('', '', 'height=500, width=500');
//     a.document.write('<html><head><title>Resume</title>');
//     a.document.write('<link rel="stylesheet" href="./style.css" type="text/css" />');
//     a.document.write('</head>');
//     a.document.write('<body > <h1>Div contents are <br>');
//     a.document.write(resume);
//     a.document.write('</body></html>');
//     a.document.close();
//     a.print();
// }


// Get the div element that you want to download
var div = document.getElementById("resume");

// Get the styles for the div, including any CSS styles
var styles = window.getComputedStyle(div);

// Create a new element to hold the div's content
var newDiv = document.createElement("div");
newDiv.innerHTML = div.innerHTML;

// Add the styles to the new element
newDiv.style.cssText = styles.cssText;

// Create a link for the external css file
var css = document.createElement("link");
css.href = "./style.css";
css.rel = "stylesheet";

// Append the link to the head of the newDiv
newDiv.appendChild(css);

// Use a library like jsPDF to convert the div to a PDF
var pdf = new jsPDF();
pdf.addHTML(newDiv, function() {
    pdf.save("myDiv.pdf");
});
