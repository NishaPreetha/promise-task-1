const div = document.getElementById('pasteHere');

const getData = async (url) => {
    try {
        const data = await fetch("https://dog-api.kinduff.com/api/facts")
        const payLoad = await data.json();
        console.log(payLoad);
        let y = payLoad.facts[0];

        div.innerHTML = y
        // console.log(y)
    } catch (error) {
        console.log(error)
    }
}
getData()








 