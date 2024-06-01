let emoji = document.getElementById("emoji")
let des = document.getElementById("des")
let result;
async function fetchEmoji(){
    let res = await fetch('https://emoji-api.com/emojis?access_key=bc7d37e67bbbb04ce5f8e2502cc0f0ca569cb323')
    result = await res.json();
    // console.log(result)
}

fetchEmoji()

emoji.addEventListener('click', () => {
    let num = Math.floor(Math.random()*result.length)
    // console.log(num)
    emoji.innerHTML = result[num].character
    des.innerHTML = result[num].unicodeName.split('.')[1].substring('2')
})