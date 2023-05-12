import transacoesFalsas from "@/data/constants/transacoesFalsas";
import Transacao, { transacaoVazia } from "@/logic/core/financas/Transacao";
import { useContext, useState } from "react";
import Cabecalho from "../template/cabecalho";
import Conteudo from "../template/conteudo";
import Pagina from "../template/Pagina";
import Formulario from "./formulario";
import Lista from "./lista";
import NaoEncontrado from "../template/naoEncontrado";
import { Button, SegmentedControl } from "@mantine/core";
import { IconLayoutGrid, IconList, IconPlus } from "@tabler/icons-react";
import useTransacao, { TipoExibicao } from "@/data/hooks/useTransacao";
import CampoMesAno from "../template/campoMesAno";
import Grade from "./grade";

export default function Financas() {
    const { tipoExibicao, alterarTipoExibicao, data, alterarData, transacoes, transacao, selecionar, salvar, excluir } = useTransacao()

    function renderizarBotoes() {
        return (
            <div className="flex justify-between">
                <CampoMesAno
                    data={data}
                    dataMudou={alterarData}
                />
                <div className="flex gap-5">
                    <Button
                        className="bg-blue-500"
                        leftIcon={<IconPlus />}
                        onClick={() => selecionar(transacaoVazia)}
                    >
                        Nova Transação
                    </Button>

                    <SegmentedControl
                        data={[
                            { label: <IconList />, value: 'lista' },
                            { label: <IconLayoutGrid />, value: 'grade' }
                        ]}
                        onChange={tipo => alterarTipoExibicao(tipo as TipoExibicao)}
                    />
                </div>
            </div>
        )
    }

    function renderizarTransacoes() {
        const props = { transacoes, selecionarTransacao: selecionar }
        return tipoExibicao === 'lista' 
            ? <Lista {...props} />
            : <Grade {...props} />   
    }

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
                {renderizarBotoes()}

                {transacao ? (
                    <Formulario
                        transacao={transacao}
                        salvar={salvar}
                        excluir={excluir}
                        cancelar={() => selecionar(null)}
                    />
                ) : transacoes.length ? (
                    renderizarTransacoes()
                ) : (
                    <NaoEncontrado>
                        Nenhuma transação encontrada
                    </NaoEncontrado>
                )}
            </Conteudo>
        </Pagina>
    )
}