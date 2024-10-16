import React from 'react'

export default function Mecanico({params}:{params:{id:number}}) {
  return (
    <main>
        <h1>Página de visualização dos dados do Mecânico {params.id}</h1>
        {/* Essa página é para o mecânico visualizar seus dados como os sites fazem */}
    </main>
  )
}
