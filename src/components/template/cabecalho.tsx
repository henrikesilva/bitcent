import BoasVindas from "./boasVindas";
import MenuUsuario from "./menuUsuario";

export default function Cabecalho() {
    return (
        <div className={`
            flex justify-between items-center
            p-7 border-b border-zinc-900
        `}>
            <BoasVindas />
            <MenuUsuario />
        </div>
    )
}