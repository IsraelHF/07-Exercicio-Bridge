import IConsole from "./Consoles/IConsole";
import PlayStation from "./Consoles/PlayStation";
import Xbox from "./Consoles/Xbox";
import AdvancedPlay from "./Launch/AdvancedPlay";
import Play from "./Launch/Play";

function startPlay(launch: IConsole) {
    console.log("Aguarde...");
    const play = new Play(launch);
}
function startAdvancedPlay(launch: IConsole) {
    console.log("Aguarde...");
    const advPlay = new AdvancedPlay(launch);
}

startPlay(new PlayStation());

startPlay(new Xbox());

startAdvancedPlay(new PlayStation());

startAdvancedPlay(new Xbox());
