export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps};
        }
        return u;
    })
}

export const parseStr = (str) => {
    let flag = false;
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i]===">") {
            flag=true;
            continue;
        }

        if (flag && str[i]!=")") result+=str[i];
    }

    return result.toLowerCase();
}