function A() {
    let hello = document.createElement('div');
    hello.textContent = 'hello webpack 4.x';
    return hello;
}

export {A as hello}

