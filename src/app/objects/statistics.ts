export class StatisticsIO {
    status: string;
    count: number;
}

export class Statistics {
    status: string;
    count: number;

    constructor(props: Partial<StatisticsIO>) {
        this.status = props.status;
        this.count = props.count;
    }
}