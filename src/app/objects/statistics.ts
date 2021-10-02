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

export enum StatusName {
    APPLICATION = 'Candidature',
    DISCUSSION = 'Echange',
    WAITING_ASSOCIATION_VALIDATION = 'Date à valider',
    WAITING_MANAGER_VALIDATION = 'En attente du manager',
    IN_PROGRESS = 'En cours',
    USER_HAS_PARTICIPATED = 'A participé',
    CANCELLED = 'Annulé / refusé / non finalisé'
}