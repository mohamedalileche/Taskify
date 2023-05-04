
import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { get_Project } from "../../api/apis";
import { removeProject } from "../../api/apis";




const Project = () => {
  const [, setTitre] = useState("");
  

  const queryClient = useQueryClient();
  
  const removeProjectMutation = useMutation(removeProject, {
      onSuccess: () => {
          queryClient.invalidateQueries("projects");
      },
  });


  const handleremove = (e) => {
      
      e.preventDefault();

      removeProjectMutation.mutate();
      setTitre("");

  };
  
  const {data, refetch} = useQuery({queryKey:["ff"], queryFn: async () => {
    const data = await get_Project()
    return data
  }});
  

  return (
    <div>
      <h1 className='text-white mb-2 text-2xl justify-center flex wrap items-center p-[50px]'>Vos Projets</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">

{
  data?.map((projet)=>{

    return  <div className="p-5" key={projet._id}>
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{projet.Titre}</h5>
    <button onClick={handleremove} className="px-2 py-1">Supprimer</button>
    <button>Modifier</button>

    </div>
  })
}
       
      </div>
   
      

      
     </div>
    </div>
  );
};

export default Project;
