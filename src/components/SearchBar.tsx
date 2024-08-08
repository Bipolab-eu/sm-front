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


  const handleSuggestionClick = (name: string, id: number) => {
    setValue('collegeId', id);
    setValue('college', name);
  };

   
  return (
      <fieldset className="mb-4">
        <label htmlFor="college" className="block mb-2 leading-none text-slate-900">
          <span className="text-red-500 text-xs leading-none align-top">*</span>
          Busca el nombre de tu instituto y selecciónalo.
        </label>

        <div onBlur={handleBlur} className="relative">
          <input
            id="college"
            name="college"
            className="block w-full px-4 py-2 rounded-lg border-solid border border-slate-950 bg-slate-100"
            placeholder="Ejemplo: IES LA MINILLA"
            onFocus={handleFocus}
            {...register('college')}
          />
          <input
            type="reset"
            value="&times;"
            className="text-2xl font-light leading-none absolute inset-y-0 right-0 px-3 text-slate-500"
            onClick={() => handleSuggestionClick('', NaN)}
          />
        </div>
        {errors.collegeId && <span className="text-red-500 text-xs">{errors.collegeId.message}</span>}
        <div className={`${hideSuggestions === true ? 'hidden' : 'block'}`}>
          <Suspense fallback={<Loading />}>
            {suggestions.map((e: any) => (
              <div
                className="px-4 py-2 mt-2 rounded-lg bg-slate-100 active:bg-slate-950 active:text-slate-100"
                key={e.id}
                onClick={() => handleSuggestionClick(e.name, e.id)}
              >
                {e.name}
              </div>
            ))}
          </Suspense>
        </div>
      </fieldset>
    )
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
/* Ver tutorial: https://upmostly.com/tutorials/how-to-create-a-search-bar-in-react */
