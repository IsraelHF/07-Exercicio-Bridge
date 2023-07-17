import IConsole from "./IConsole";

export default class Xbox implements IConsole {
    constructor() {
        this.configureGame();
        console.log("Xbox: Console configurado! \"POWER YOUR DREAMS\"...")
    }
    configureGame(): void {
        this.authToken();
        console.log("Xbox: Configurando o Console...");
    }
    authToken(): void {
        console.log("Xbox: Autenticando o Token");
    }

}