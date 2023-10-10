import { Tarea } from "./Tarea"

type ListaTareas = {

    listaTareas: string[]  //prop para recibir una lista de tareas en todoapp
    borrarTarea: (index:number) =>void
}

export const ListaTareas=({listaTareas,borrarTarea}:ListaTareas)=>{
    return(

        <div className="tasklist">

            {listaTareas.map((tarea,index)=>(

                <Tarea key={index} tarea={tarea} borrarTarea={()=>borrarTarea(index)}></Tarea>


            )

            )}
        </div>
    )
}