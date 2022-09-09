class constants {
    #baseUrl: string;
    constructor() {
        this.#baseUrl ="https://opentdb.com/api.php"
    }
    getBaseUrl() {
        return this.#baseUrl
    }
}

export const constant = new constants()

