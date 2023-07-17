import IConsole from "./IConsole";

export default class PlayStation implements IConsole {
    constructor() {
        this.configureGame();
        console.log("PlayStation: Console configurado! \"PLAY HAS NO LIMITS\"...");
    }
    configureGame(): void {
        this.authToken();
        console.log("PlayStation: Configurando o Console...")
    }
    authToken(): void {
        console.log("PlayStation: Autenticando Token...")
    }

}