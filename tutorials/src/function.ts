const add = (a: number, b: number): number => {
    return a + b;
};

console.log(add(69, 420));

// export {};
// the above line is to escape the re-declaraion error from typescript when the corresponding javascript file is open in the development environment (code editor)
// to avoid the error use the export statement or just close the javascript file
