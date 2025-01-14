import React, { useState } from "react";

const Product = () => {
  const [student, setStudent] = useState([]);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
  });

  const addForm = (e) => {
    e.preventDefault();
    if (formData.Name && formData.Email && formData.Mobile) {
      setStudent((prev) => [...prev, formData]);
      setFormData({
        Name: "",
        Email: "",
        Mobile: "",
      });
    }
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="d-flex m-3 ">
        <div className="div-2 border border border-dark rounded-3 bg-secondary me-2">
            <h2 className=" pro1 text-center"> Student Details</h2>
          {/* {product.length > 0 ? ( */}
            <table className="table table-bordered table-dark table-striped ">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {student.map((stud, index) => (
                  <tr key={index}>
                    <td>{stud.Name}</td>
                    <td>{stud.Mobile}</td>
                    <td>{stud.Email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          {/* ) : (<h2 className="text-center fw-bold f-3 mt-3"> Stdent details</h2>)} */}
        </div>
        <div className="div-1 justify-content-center p-5 border border-dark rounded-3 bg-secondary ms-2">
          <h2 className="text-center">Login Student</h2>
          <form onSubmit={addForm}>
            <div className="mb-3">
              <label className="form-label fw-bold">Name : </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="Name"
                value={formData.Name}
                onChange={handleForm}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Mobile : </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Mobile"
                name="Mobile"
                value={formData.Mobile}
                onChange={handleForm}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Email : </label>
              <input
                type="text"
                className="form-control"
                placeholder="Example@gmail.com"
                name="Email"
                value={formData.Email}
                onChange={handleForm}
                required
              />
            </div>
            <div className="text-center">
            <button type="submit" className=" btn btn-primary ">
              Add Product
            </button>
            </div>  
          </form>
        </div>
      </div>
    </>
  );
};

export default Product;
