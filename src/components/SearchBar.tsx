'use client'

/* 
  Importante: Este buscador forma parte de un formulario 
  y para que la validación sea correcta, debe pasar la id del colegio como value.
*/

import { findOneCollege } from "@/lib/api"
import { useState, Suspense } from "react"
import { useDebounce } from '../hooks/useDebounce';

interface Props {
  register: any;
  setValue: any;
  watch: any;
  errors: any;
}

export default function SearchBar({ register, setValue, watch, errors }:Props) { 
  const watchCollege = watch("college")
  const [suggestions, setSuggestions] = useState(Array)
  const [hideSuggestions, setHideSuggestions] = useState(true);

  useDebounce(
    async () => {
      if (watchCollege) {
        try {
          const collegeName = await findOneCollege(watchCollege)
  
          setSuggestions(collegeName);
        } catch (error) {
          console.log(error);
        }
      }
    },
    250,
    [watchCollege]
  );

  const handleFocus = () => {
    setHideSuggestions(false)
  };

  const handleBlur = () => {
    setTimeout(() => {
      setHideSuggestions(true);
    }, 100);
  };


  const handleSuggestionClick = (name: string, id: string) => {
    setValue('collegeId', id);
    setValue('college', name);
  };
   
  return (
      <fieldset className="mb-4">
        <label htmlFor="college" className="block mb-2 leading-none text-slate-900">
          <span className="text-red-500 text-xs leading-none align-top">*</span>
          Busca el nombre de tu instituto
        </label>

        <div onBlur={handleBlur}>
          <input
            id="college"
            name="college"
            className="block w-full px-4 py-2 rounded-lg border-solid border border-slate-950 bg-slate-100 transition duration-200 ease-in-out"
            placeholder="Ejemplo: IES LA MINILLA"
            onFocus={handleFocus}
            // onBlur={handleBlur}
            {...register('college')}
          />
          {errors.college && <span className="text-red-500 text-xs">{errors.college.message}</span>}
        </div>
        <Suspense fallback={<Loading />}>
          <div className={`${ hideSuggestions === true ? 'hidden' : 'block' } pt-2`}>
            {suggestions.map((e: any) => (
              <div
                className="px-4 py-2 rounded-lg bg-slate-100 mb-2 active:bg-slate-950 active:text-slate-100"
                key={e.id}
                onClick={() => handleSuggestionClick(e.name, e.id)}
              >
                {e.name}
              </div>
            ))}
          </div>
        </Suspense>
      </fieldset>
    )
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
/* Ver tutorial: https://upmostly.com/tutorials/how-to-create-a-search-bar-in-react */
