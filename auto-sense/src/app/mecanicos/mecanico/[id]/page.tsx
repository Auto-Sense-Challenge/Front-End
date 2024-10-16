import React from 'react'

export default function page({params}:{params:{id:number}}) {
  return (
    <main>
        <h1>Página do mecânico {params.id}</h1>
    </main>
  )
}
