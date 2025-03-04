import React, { useState } from "react";
import CompareImage from "react-compare-image";
import { Upload, ImagePlus, XCircle } from "lucide-react";

const BeforeAfterGallery = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e, index, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prev) => {
          const updated = [...prev];
          if (!updated[index]) updated[index] = { before: "", after: "" };
          updated[index][type] = reader.result;
          return updated;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const addNewComparison = () => {
    setImages([...images, { before: "", after: "" }]);
  };

  const removeComparison = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto py-10 px-6 border border-orange-100 shadow-lg rounded-lg border-b-amber-50">
      <h2 className="text-3xl font-bold text-center mb-6">📸 Before & After Gallery</h2>
      <p className="text-center   mb-4">
        See the amazing transformations from our beauty services!
      </p>

      {images.length === 0 && (
        <div className="text-center">
          <p className=" ">No images uploaded yet.</p>
        </div>
      )}

      {images.map((image, index) => (
        <div key={index} className="mb-6 bg-white p-4 rounded-xl shadow-lg">
          {image.before && image.after ? (
            <div className="w-full max-w-lg mx-auto h-[500px] overflow-hidden">
              <CompareImage leftImage={image.before} rightImage={image.after} className="h-full w-full object-cover" />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
                <ImagePlus className="w-10 h-10 text-gray-500 mb-2" />
                <span className="text-gray-500 text-sm">Upload Before Image</span>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, index, "before")} className="hidden" />
              </label>

              <label className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
                <ImagePlus className="w-10 h-10 text-gray-500 mb-2" />
                <span className="text-gray-500 text-sm">Upload After Image</span>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, index, "after")} className="hidden" />
              </label>
            </div>
          )}

          <button
            className="flex items-center gap-2 text-red-500 hover:text-red-700 mt-3 text-sm"
            onClick={() => removeComparison(index)}
          >
            <XCircle className="w-5 h-5" /> Remove
          </button>
        </div>
      ))}

      <div className="text-center mt-4 flex justify-center">
        <button
          onClick={addNewComparison}
          className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition flex items-center gap-2"
        >
          <Upload className="w-5 h-5" /> Upload New Comparison
        </button>
      </div>
    </div>
  );
};

export default BeforeAfterGallery;