"use client"
import { TipoMecanico } from '@/types';
import React, { useState } from 'react'

export default function Mecanico({params}:{params:{id:number}}) {

  const [mecanico, setMecanico] = useState<TipoMecanico>({
    id:params.id,
    telefone: 0,
    nome: "",
    endereco:"",
    avaliacao: 0,
  });

  return (
    <main>
        {/* Essa página é a página que os usuarios veram os dados de um mecânico expecifico*/}
        
        
    </main>
  )

