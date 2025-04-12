"use client"
import { useCreateProductMutation, useGetAllCategoryQuery } from "@/redux/slice/productSlice";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import React, { useState } from "react";

type FormValues = {
  name: string;
  description: string;
  price: string;
  stock: string;
  category: string;
  images: File[];
  discount: string;
};

export default function Product() {
  const [previews, setPreviews] = useState<string[]>([]);
  const [createProduct] = useCreateProductMutation();
  const { data: categories = [], isLoading } = useGetAllCategoryQuery();
  const [files, setFiles] = useState<File[]>([]);

  const initialValues: FormValues = {
    name: "",
    description: "",
    price: "",
    stock: "",
    category: categories.length > 0 ? categories[0].name : "",
    images: [],
    discount: "",
  };

  const handleSubmit = async (values: FormValues) => {
    const formData = new FormData();
    
    // Append all fields except images
    Object.entries(values).forEach(([key, value]) => {
      if (key !== "images") {
        formData.append(key, String(value));
      }
    });

    // Append all image files
    files.forEach((file) => {
      formData.append("images", file);
    });

    try {
      await createProduct(formData).unwrap();
      alert("Product created successfully!");
      // Reset form
      setPreviews([]);
      setFiles([]);
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating product");
    }
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value:unknown) => void
  ) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files);
    setFiles(prev => [...prev, ...newFiles]);
    setFieldValue("images", [...files, ...newFiles]);

    // Generate previews
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviews(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number, setFieldValue: (field: string, value: unknown) => void) => {
    const updatedPreviews = [...previews];
    updatedPreviews.splice(index, 1);
    setPreviews(updatedPreviews);

    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
    setFieldValue("images", updatedFiles);
  };

  if (isLoading) return <div>Loading categories...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Add new product</h2>
        <p className="text-gray-600">Add new product to your store</p>
      </div>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting, setFieldValue }) => (
          <Form className="space-y-6">
            {/* Name and Description Section */}
            <div className="bg-white p-6 shadow-md rounded-md">
              <h2 className="text-xl font-semibold pb-4 border-b border-gray-200">
                Name and Description
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Product Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Product Description
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    id="description"
                    rows={4}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Category and Inventory Section */}
            <div className="bg-white p-6 shadow-md rounded-md">
              <h2 className="text-xl font-semibold pb-4 border-b border-gray-200">
                Product Details
              </h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <Field
                    as="select"
                    name="category"
                    id="category"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </Field>
                </div>

                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <Field
                    type="number"
                    name="price"
                    id="price"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                    Inventory
                  </label>
                  <Field
                    type="number"
                    name="stock"
                    id="stock"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
                    Discount (%)
                  </label>
                  <Field
                    type="number"
                    name="discount"
                    id="discount"
                    min="0"
                    max="100"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Images Section */}
            <div className="bg-white p-6 shadow-md rounded-md">
              <h2 className="text-xl font-semibold pb-4 border-b border-gray-200">
                Product Images
              </h2>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Images (Multiple)
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setFieldValue)}
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />

                {/* Image Previews */}
                {previews.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Selected Images:
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {previews.map((preview, index) => (
                        <div key={index} className="relative">
                          <Image
                            src={preview}
                            alt={`Preview ${index}`}
                            className="w-24 h-24 object-cover rounded-md border border-gray-200"
                            width={96}
                            height={96}
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index, setFieldValue)}
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isSubmitting ? "Saving..." : "Save Product"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}