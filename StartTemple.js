
function open_blankPage() {
    window.open();
}

function open_blankWindow() {
    var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
}

function render_color() {
    console.log("Renderd");
    style.color("red");
}