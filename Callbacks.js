// Callbacks
function loadScript(src){
    var script = document.createElement("script")
    script.src = src;
    script.onload = function(){
        console.log("SRC: " + src())
    }
    document.body.appendChild(script);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",script)
