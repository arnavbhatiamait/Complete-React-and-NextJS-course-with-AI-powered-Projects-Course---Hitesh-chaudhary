"use client"
import React from 'react'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'
import { Trash } from 'lucide-react'
import { cn } from '@/lib/utils'
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { updateTodo } from '@/actions/todo-actions'
const TodoItem = ({todo}) => {
     const queryClient =  useQueryClient();
    const {mutate:toggle} = useMutation({
        mutationFn: (id,completed) => updateTodo(id, completed),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:["todos"]});
            toast.success("Todo updated successfully");
        },
        onError: (error) => {
            console.error("Failed to update todo:", error);
            toast.error("Failed to update todo");
        }
    })
  return (
    <div className='p-4 border rounded-lg flex items-center justify-between shadow-sm hover:shadow-md transition-shadow mb-3'>
      <div className='flex items-center gap-3'>
        <Checkbox 
        checked={todo.completed}
        onCheckedChange={(checked) => {
            toggle({id: todo._id, completed: checked});
        }}
        id={`todo-${todo._id}`}
        className='w-4 h-4 rounded-sm' />
        <label htmlFor={`todo-${todo._id}`} className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", todo.completed
        &&           "line-through text-muted-foreground"        )}>
          {todo.title}
        </label>
        </div>
        <Button 
        variant="destructive"
        size="icon"
        onClick={() => {}}
        >
            <Trash size={18} />
        </Button>
    </div>
  )
}

export default TodoItem
