"use client"
import React from 'react'

export default function ClientComponent() {
  return (
    <div>
      <button onClick={()=>window.alert("hello")}>its me button</button>
        Client
    </div>
  )
}
