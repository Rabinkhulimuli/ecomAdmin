import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi= createApi({
    reducerPath:'admin',
    baseQuery: fetchBaseQuery({
        baseUrl:process.env.NEXT_PUBLIC_BASE_URL,
    }),
    endpoints:(builder)=> ({
        createProduct:builder.mutation<productType,Partial<FormData>>({
            query:(data)=> ({
                url:"/admin/create-product",
                method:"POST",
                body:data
            }),
            
        }),
        createCategory:builder.mutation({
            query:(data)=> ({
                url:"/admin/create-category",
                method:'POST',
                body:data
            })
        })
    })
})
export const {useCreateProductMutation,useCreateCategoryMutation}= productApi
export default productApi