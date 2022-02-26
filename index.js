let adviceNums = document.querySelector('.adviceNums');
const dice = document.querySelector('.generator');
let adviceText = document.querySelector('.adviceText');

const fetchQuote = async () => {
    try {
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json();
        return data;
    } catch (e) {
        adviceText.innerText = 'Error';
    }
};

const changeText = () => {
    fetchQuote()
    adviceText.innerText = data.slip.advice;
    adviceNums.innerText = `A D V I C E #${data.slip.id}`;
}

dice.addEventListener('click', () => changeText());
