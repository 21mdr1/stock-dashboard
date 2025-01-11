interface iDayData {
    t: Array<number>;
    o: Array<number>;
    c: Array<number>;
    h: Array<number>;
    l: Array<number>;
    v: Array<number>;
    s: string;
}

interface iMomentData {
    c: number,
    d: number,
    dp: number,
    h: number,
    l: number,
    o: number,
    pc: number,
    t: number
}

export type { iDayData, iMomentData };