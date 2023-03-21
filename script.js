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