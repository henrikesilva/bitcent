import Area from "../comum/area";
import Logo from "../comum/logo";
import Menu from "./menu";

export default function Cabecalho() {
    return(
        <Area className="bg-black fixed z-50">
            <div className="flex items-center justify-between h-20">
                <Logo />
                <Menu />
            </div>
        </Area>
    )
}