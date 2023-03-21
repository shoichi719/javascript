const train_fare = (nenrei) => {
    if (nenrei >= 20)
        return 20000;
    if (nenrei >= 12)
        return 10000;
    if (nenrei >= 6)
        return 5000;
    return 0;
}

const test = () => {
    alert("hello javascript");
}

const test1 = (message) => {
    alert(message);
}

const test2 = () => {
    alert(sub(3,4)); 
}

const add = (a, b) => {
    return a+b;
}

const sub = (c, d) => {
    return c-d;
}