import React from 'react';
import "./checkout.css"
import { useForm, Controller } from 'react-hook-form';

const CheckoutForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <input {...field} id="name" placeholder="Your Name" />}
        />
        {errors.name && <span>Name is required</span>}
      </div>

      <div>
        <label htmlFor="home">Home</label>
        <Controller
          name="home"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <input {...field} id="home" placeholder="Your Home Address" />}
        />
        {errors.home && <span>Home is required</span>}
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <Controller
          name="location"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <input {...field} id="location" placeholder="Your Current Location" />}
        />
        {errors.location && <span>Location is required</span>}
      </div>

      <div>
        <label htmlFor="hometown">Hometown</label>
        <Controller
          name="hometown"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <input {...field} id="hometown" placeholder="Your Hometown" />}
        />
        {errors.hometown && <span>Hometown is required</span>}
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <Controller
          name="address"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <input {...field} id="address" placeholder="Your Detailed Address" />}
        />
        {errors.address && <span>Address is required</span>}
      </div>

      <div>
        <label htmlFor="pincode">Pincode</label>
        <Controller
          name="pincode"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <input {...field} id="pincode" placeholder="Your Pincode" />}
        />
        {errors.pincode && <span>Pincode is required</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckoutForm;
