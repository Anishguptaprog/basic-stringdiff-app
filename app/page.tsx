'use client'
import { Button, Code, Input } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
const Diff = require('diff')
export default function Home() {
  const[input1,setInput1] = useState("");
  const[input2,setInput2] = useState("");
  const[out,setOut] = useState("");
  function format(parts:any){
    const listItems = parts.map((part:Diff.Change)=>{
      const color = part.added ? 'text-green-600':
      part.removed?'text-red-500 text-decoration-line:line-through': 'text-black';
      return<span key={part.value} className={color}>{part.value}</span>
    });
    return listItems;
  }
  
  function clickhandler(event:any) :void{
    const diff= Diff.diffChars(input1,input2)
    // const out = format(diff)
    setOut(format(diff))
  } 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Sring diff tool</h1>
       <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="text" label="String 1" onValueChange={setInput1}/>
      <Input type="text" label="String 2" onValueChange={setInput2}/>
    </div>
          <Button color="primary" onClick={clickhandler}>
      Compare
    </Button>
    <Code>{out}</Code>
    </main>
  );
}
