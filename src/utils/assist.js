// 判断参数是否是其中之一
export function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) return true
    }
    return false;
}

// 获取
export function getExtremum (value, min, max) {
    return Math.min(max, Math.max(min, value))
}