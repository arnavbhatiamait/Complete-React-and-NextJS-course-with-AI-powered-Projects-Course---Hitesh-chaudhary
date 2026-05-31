"use client"
import React from 'react'
import {Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
const TodoForm = () => {

    const [title, setTitle] = React.useState("");
  return (
    <div>
        <form onSubmit={(e) => {
          e.preventDefault();
        }} className='flex gap-2 mb-8'>
            <Input value={title} type={"text"} onChange={(e) => setTitle(e.target.value)} placeholder='Enter a new task' className={"flex-1"} />

            <Button type='submit' >
                <Plus size={20} className='mr-2' />
                Add
            </Button>

        </form>
      </div>
  )
}

export default TodoForm
