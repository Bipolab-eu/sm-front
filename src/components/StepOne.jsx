'use client'
// Este componente envía el Nombre y la Id 
// del centro educativo, así como toda la información del estudiante

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';

export default function StepOne({ collegesData, submitData }) {

  const StudentSchema = Yup.object().shape({

    college: Yup.string()
      .oneOf(collegesData.map(college => college.id.toString()),'*Tienes que elegir tu centro escolar')
      .required('Required'),
  
    course: Yup.string()
      .oneOf(['ESO 1º', 'ESO 2º', 'ESO 3º', 'ESO 4º'], '*Tienes que elegir tu curso') 
      .required('Required'),
      
    gender: Yup.string()
      .oneOf(['Masculino', 'Femenino', 'Otro'], '*Elige tu género') 
      .required('Required'),
  
  });

  return (
    <Formik
      initialValues={{
        college: 'default',
        course: 'default',
        gender: 'default'
      }}

      validationSchema={StudentSchema}

      onSubmit={ values => { submitData(values) }}
    >
      <Form>
        {/* Seleciona el nombre del centro escolar */}
        <Field
          component='select'
          id='college'
          name='college'
        >
          <option value='default' disabled>Elige tu centro</option>
          {
          collegesData.map((e) =>
            <option key={e.id} value={e.id}>{e.name}</option>
          )
        }
        </Field>
        <ErrorMessage name='college' component="span" className="pl-4 pt-2 text-sm text-red-500"/>

        {/* Seleciona el curso escolar */}
        <Field
          component='select'
          id='course'
          name='course'
        >
          <option value='default' disabled>Elige tu curso</option>
          <option value='ESO 1º'>1º ESO</option>
          <option value='ESO 2º'>2º ESO</option>
          <option value='ESO 3º'>3º ESO</option>
          <option value='ESO 4º'>4º ESO</option>
        </Field>
        <ErrorMessage name="course" component="span" className="pl-4 pt-2 text-sm text-red-500"/>

        {/* Seleciona el género */}
        <Field
          component='select'
          id='gender'
          name='gender'
        >
          <option value='default' disabled>Elige tu género</option>
          <option value='Masculino'>Masculino</option>
          <option value='Femenino'>Femenino</option>
          <option value='Otro'>Otro</option>
        </Field>
        <ErrorMessage name="gender" component="span" className="pl-4 pt-2 text-sm text-red-500" />

      {/* Submit */}
      <button type="submit">Siguiente</button>

      </Form>
    </Formik>
  )
}
