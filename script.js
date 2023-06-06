const element = document.querySelector(".resizable");
const handler = document.querySelector(".handler");

function makeResizable(element, handler) {
    const minimum_size = 100;

    handler.addEventListener("mousedown", function (event) {
        event.preventDefault();

        let initial = {
            width: element.getBoundingClientRect().width,
            height: element.getBoundingClientRect().height,
            pageX: event.pageX,
            pageY: event.pageY
        }

        function resize(event) {
            const width = initial.width + (event.pageX - initial.pageX);
            const height = initial.height + (event.pageY - initial.pageY);
      
            if (width > minimum_size) {
              element.style.width = width + "px";
            }
            if (height > minimum_size) {
              element.style.height = height + "px";
            }
        }

        window.addEventListener("mousemove", resize);
        window.addEventListener(
            "mouseup",
            () => window.removeEventListener("mousemove", resize),
            { once: true }
        );

    } );
}

makeResizable(element, handler);






