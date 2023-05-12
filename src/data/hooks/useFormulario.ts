import { useCallback, useState } from "react"

export default function UseFormulario<T = any>(dadosIniciais?: T) {
    const [dados, setDados] = useState<T>(dadosIniciais ?? {} as T)

    const alterarDados = useCallback(function(dados: T) {
        setDados(dados)
    }, [])

    const alterarAtributo = useCallback(
        function alterarAtributo(atributo: string, fn?: Function) {
            return (valorOuEvento: any) => {
                const valor = valorOuEvento?.target?.value ?? valorOuEvento
                setDados({...dados, [atributo]: fn?.(valor) ?? valor})
            }
        }, [dados]) 

    return {
        dados,
        alterarDados,
        alterarAtributo
    }
}