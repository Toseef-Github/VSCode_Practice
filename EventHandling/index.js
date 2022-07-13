"use strict";

const removeFive = () => {
    const numb = parseFloat(numbOutput.value);
    numbOutput.value = numb -5;
}

const removeOne = () => {
    const numb = parseFloat(numbOutput.value);
    numbOutput.value = numb -1;
}

const resetNumb = () => {
    numbOutput.value = 0;
}

const addFive = () => {
    const numb = parseFloat(numbOutput.value);
    numbOutput.value = numb +5;
}

const addOne = () => {
    const numb = parseFloat(numbOutput.value);
    numbOutput.value = numb +1;
}