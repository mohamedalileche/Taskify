import React from "react";
import { useState } from 'react';
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { addProject } from "../../api/apis";

function NewProject({  projects }) {
    const [Titre, setTitre] = useState("");
  

    const queryClient = useQueryClient();
    
    const addProjectMutation = useMutation(addProject, {
        onSuccess: () => {
            queryClient.invalidateQueries("projects");
        },
    });


    const handleNewProjectsubmit = (e) => {
        
        e.preventDefault();

        addProjectMutation.mutate({Titre});
        setTitre("");
 
    };



    return (
        <div className="max-w-sm h-[250px] bg-white border border-gray-200 rounded-[5px] shadow dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={handleNewProjectsubmit} className="flex flex-col justify-center gap-2 shadow-sm">
                <label htmlFor="project_Titre">Nom du projets:</label>
                <input type="text" id="project_Titre" className="border-2 border-gray-300 rounded px-2 py-1" onChange={(e) => setTitre(e.target.value)}/>
                <div className="inline-flex w-full  gap-2">

             
                    <button type="submit" className="px-4 py-2 bg-black rounded text-white">Ajouter</button>

                </div>
            </form>
        </div>
    );
}

export default NewProject;







