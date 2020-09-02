const app = document.querySelector("#app");
const app2 = document.querySelector("#app2");

function writeArray(textArray) {
    app.innerHTML = "";
    let index = 0;
    let x = 0;
    let text = textArray[index].split("");
    x = text.length;

    text.forEach((letra, i) => {
        setTimeout(() => {
            app.innerText += letra;

            if(textArray.length > 1) {
                if(i == (text.length - 1)) {
                    const timer = setInterval(() => {
                        app.innerText = textArray[index].substring(0,x);
                        x--;

                        if(x === 0) {
                            clearInterval(timer);
                            textArray.shift();
                            if(textArray.length) {
                            writeArray(textArray)
                            }
                        }

                    },300);
                }
            }
        },250 * i);
    })
}

function write(text) {
    app2.innerText = "";
    let x = 0;
    const timer = setInterval(() => {
        app2.innerText = text.substring(0,x);

        if(x === text.length) {
            clearInterval(timer);
        } else {
            x++;
        }

    },200);
}

writeArray(["Console", "Teste", "Lorem"]);
write("Uma frase qualquer");