const formatWithSuffix=(num: number): string=> {
    if (num >= 1000000000) {
        return `${(num / 1000000000).toFixed(1).replace(/\.0$/, "")}b`;
    }
    if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1).replace(/\.0$/, "")}m`;
    }
    if (num >= 1_000) {
        return `${(num / 1000).toFixed(1).replace(/\.0$/, "")}k`;
    }
    return num?.toString();
}

export default formatWithSuffix
