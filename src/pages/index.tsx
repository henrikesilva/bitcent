import Image from 'next/image'
import { Inter } from 'next/font/google'
import Pagina from '@/components/template/Pagina'
import Landing from '@/components/landing'
import Financas from '@/components/financas'
import { useContext } from 'react'
import AutenticacaoContext from '@/data/contexts/AutenticacaoContext'
import Carregando from '@/components/template/carregando'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   const { usuario, carregando } = useContext(AutenticacaoContext)

   if(carregando) return <Carregando />

   return usuario ? <Financas /> : <Landing />
}
