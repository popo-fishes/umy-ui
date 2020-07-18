// 判断数组
export const isArrayFn = (value) => {
    if (typeof Array.isArray === 'function') {
        return Array.isArray(value);
    } else {
        return Object.prototype.toString.call(value) === '[object Array]';
    }
}
export const addUuid = (arr) => {
    let idx = 0
    let _addUuid = (data => {
        data.forEach(obj => {
            obj['uuid'] = idx++
            if (isArrayFn(obj['children'])) {
                _addUuid(obj['children'])
            }
        })
    })
    _addUuid(arr)
    return arr
}
