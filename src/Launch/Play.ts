import IConsole from "../Consoles/IConsole";
import ILaunch from "./ILaunch";

export default class Play implements ILaunch {
    constructor(private launch: IConsole) {
        this.playing();
    }
    playing(): void {
        this.result();
        console.log("Começando a jogatina...");
    }
    result(): void {
        console.log("Game Starts Succesfully!");
    }
}