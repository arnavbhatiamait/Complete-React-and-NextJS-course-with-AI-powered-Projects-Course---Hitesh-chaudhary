"use client"
import React from 'react'
import {Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo } from '@/actions/todo-actions';
import { toast } from 'sonner';
const TodoForm = () => {
    const queryClient = useQueryClient();
    const [title, setTitle] = React.useState("");
    const mutation= useMutation({
        mutationFn: (data) => addTodo(data),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:["todos"]});
            toast.success("Todo added successfully");

        },
        onError: (error) => {
            toast.error("Failed to add todo");
        }

    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        mutation.mutate({title},{
            onSuccess: () => {
                setTitle("");
            }
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex items-center gap-2'>
            <Input value={title} type={"text"} onChange={(e) => setTitle(e.target.value)} placeholder='Enter a new task' className={"flex-1"} 
            disabled={mutation.isPending}
            />

            <Button type='submit' >
                <Plus size={20} className='mr-2' />

                {
mutation.isPending ? "Adding..." : "Add"
                }
            </Button>

        </form>
      </div>
  )
}

export default TodoForm
