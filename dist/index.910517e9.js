$(".iconoDragabble").draggable({
    revert: true,
    revertDuration: 200,
    helper: "clone",
    cursor: "grabbing",
    cursorAt: {
        x: 0,
        y: 0
    },
    containment: "#dDragMovible",
    stop: function() {
        $("#dDatoParam3").css("border", "none").css("background-color", "white");
        $(".balizasGuardada").css("background-color", "white");
    },
    start: function() {
        $("#dDatoParam3").css("border", "1px dashed black").css("height", "50px").css("width", "50px").css("margin", "auto").css("background-color", "yellow");
        $(".balizasGuardada").css("background-color", "lightyellow");
    }
});
function crearBloqueDraggable() {
    $(".balizasGuardada").draggable({
        revert: true,
        revertDuration: 150,
        helper: "clone",
        cursor: "grabbing",
        cursorAt: {
            x: 0,
            y: 0
        },
        start: function(event, ui) {
            $("#iBasura").show();
        },
        stop: function(event, ui) {
            $("#iBasura").hide();
        }
    });
}

//# sourceMappingURL=index.910517e9.js.map
