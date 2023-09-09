import dayjs from "dayjs";

export function formatarData(stringData) {
    const data = dayjs(stringData);
    return data.format('DD-MM-YYYY');
};