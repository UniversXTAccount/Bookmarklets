function efh(html) {
    const template = document.createElement("template")
    template.innerHTML = html.trim()
    return template.content.firstChild
}

$('html').append(efh('<div id="nothingscreen" style="background-color: #000; width: 1vw; height: 1vh; position: fixed; z-index: 10; left: 0px; top: 0px;"></div>'))