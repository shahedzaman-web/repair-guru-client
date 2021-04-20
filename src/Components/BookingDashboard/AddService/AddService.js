import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { handleSubmit } = useForm();
  const [imageURL, setIMageURL] = useState(null);

  const [serviceInfo, setServiceInfo] = useState({
    serviceTitle: "",
    description: "",
    price: "",
  });

  const handleBlur = (e) => {
    const newServiceInfo = { ...serviceInfo };
    newServiceInfo[e.target.name] = e.target.value;
    setServiceInfo(newServiceInfo);
  };
  const onSubmit = (data) => {
    const submitData = {
      serviceTitle: serviceInfo.serviceTitle,
      description: serviceInfo.description,
      price: serviceInfo.price,
      imageURL: imageURL,
    };
    const url = `https://repair-guru-sz.herokuapp.com/addServices`;
    if (submitData.imageURL === null) {
      alert("Wait please");
    } else {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      }).then((res) => console.log("server side response", res));
    }
  };
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "7fcee1f3d896c0d1ed1287f8e43f7382");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response);
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="col-md-10 col-sm-12 col-12">
        <div className="p-2 ms-2 d-block  bg-light text-dark">
          <h2>Add Service</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Service Title</label>
            <input
              type="Name"
              name="serviceTitle"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Service Title"
              onBlur={handleBlur}
            />
            <label>Description</label>
            <input
              type="Description"
              name="description"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Description"
              onBlur={handleBlur}
            />
            <label>Service Price</label>
            <input
              type="price"
              name="price"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Service Price"
              onBlur={handleBlur}
            />
            <label>Image Upload</label>
            <input
              type="file"
              name="imgUpload"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Details problem about your device"
              onChange={handleImageUpload}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddService;
