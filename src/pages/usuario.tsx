import Cabecalho from "@/components/template/cabecalho";
import Conteudo from "@/components/template/conteudo";
import Pagina from "@/components/template/Pagina";
import TituloPagina from "@/components/template/tituloPagina";
import Formularios from "@/components/usuario/formularios";
import usuario from "@/data/constants/usuarioFake";
import { IconForms } from "@tabler/icons-react";


export default function CadastroUsuario() {
    return (
        <Pagina>
            <Cabecalho />
            <Conteudo>
                <TituloPagina 
                    icone={<IconForms />}
                    principal="Dados Cadastrais"
                    secundario={`Informações de ${usuario.email}`}
                />
                
                <Formularios />
            </Conteudo>
        </Pagina>    
    )
}