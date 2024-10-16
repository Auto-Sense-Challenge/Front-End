import React from 'react'

export default function Usuario({params}:{params:{id:number}}) {
  return (
    <main>
        <h1>Página de visualização dos dados do Usuário {params.id}</h1>
        {/* Essa página é para o usuário visualizar seus dados como os sites fazem */}
    </main>
  )
}
