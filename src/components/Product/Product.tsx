import { Field, useFormik } from 'formik'
import React from 'react'

export default function Product() {
    const formik= useFormik({
        initialValues:{
            name:"",
            description:"",
            price:"",
            stock:"",
            category:"",
            images:"",
            discount:"",

        },
        onSubmit: values=> {
            alert(JSON.stringify(values,null,2))
        }
    })
  return (
    <div>
        <form  onSubmit={formik.handleSubmit}>
            <div className='flex flex-col'>
                <label htmlFor="name">Product Name</label>
                <input
                className='border px-2 py-1 rounded-md'
                type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange}  
                onBlur={(e: React.FocusEvent<HTMLInputElement>)=> {
                    const trimmedValue= e.target.value.trim();
                    formik.setFieldValue("name",trimmedValue)
                    formik.handleBlur(e)
                }} />
            
            </div>
        </form>
    </div>
  )
}
