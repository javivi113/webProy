$(function () {
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
        stop: function () {
            cursor: pointer 
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