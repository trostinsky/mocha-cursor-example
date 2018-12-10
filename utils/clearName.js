// vlad12341 -> Vlad

module.exports = (dirtyName) => {
    let clearName = 'default';
    if(typeof dirtyName === 'string') {
        clearName = dirtyName.replace(/[^a-z]+/gi, '');
    }
    return clearName.slice(0, 1).toUpperCase() + clearName.slice(1).toLowerCase();
};