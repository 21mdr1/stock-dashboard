function dateToString(timestamp: string | number): string {
    let date = new Date(Number(timestamp) * 1000);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

function round(num: number): number {
    return Math.round(num * 100) / 100;
}


export { dateToString, round };