const download = () => {
    const resume = document.getElementById("resume").innerHTML;
    const style = document.getElementsByTagName('link')
    console.log(style)
    let a = window.open('', '', 'height=500, width=500');
    a.document.write('<html><head><title>Resume</title>');
    a.document.write('<link rel="stylesheet" href="./style.css" type="text/css" />');
    a.document.write('</head>');
    a.document.write('<body > <h1>Div contents are <br>');
    a.document.write(resume);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}