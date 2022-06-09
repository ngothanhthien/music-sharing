export const removeElementFromArray=(array,value)=>{
    const index=array.indexOf(value);
    if (index > -1) {
        array.splice(index, 1);
        return true;
    }
    return false;
}
export const addElementUniqueToArray=(array,value)=>{
    if(array.indexOf(value) === -1) {
        array.push(value);
        return true;
    }
    return false;
}
export const deleteAllElementFromArray=(array)=>{
    array.splice(0,array.length);
}