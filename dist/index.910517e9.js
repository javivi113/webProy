$(function() {
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
        }
    });
    $(".balizasGuardada").draggable({
        revert: true,
        helper: "clone",
        cursor: "grabbing",
        cursorAt: {
            x: 0,
            y: 0
        }
    });
});

//# sourceMappingURL=index.910517e9.js.map
