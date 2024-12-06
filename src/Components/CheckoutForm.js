import React, { useState } from "react";
import "../Allcss/checkout.css";
import { useForm, Controller, useWatch } from "react-hook-form";

const CheckoutForm = () => {
  const { handleSubmit, control, formState: { errors }, reset, watch } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false); // For submission status
  const [trackingActive, setTrackingActive] = useState(false); // For map tracking
  const paymentMethod = watch("payment"); // Watch selected payment method

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
    if (paymentMethod !== "cod") {
      setTrackingActive(true); // Enable tracking
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="success-message">
          <h2>Order placed successfully!</h2>
          <p>Your order is out for delivery 🚚</p>
          {trackingActive && (
            <div className="map-container">
              <h3>Track Your Order</h3>
              {/* Embed your map component */}
              <iframe
                title="delivery-tracking-map"
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Your+Delivery+Location"
                width="100%"
                height="300"
                style={{ border: "0" }}
                allowFullScreen
              />
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="check-out">
          {/* Common Fields */}
          <div>
            <label htmlFor="name">Name</label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <input {...field} id="name" placeholder="Your Name" />
              )}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
             

          {/* Location */}
          <div>
            <label htmlFor="location">Location</label>
            <Controller
              name="location"
              control={control}
              defaultValue=""
              rules={{ required: "Location is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  id="location"
                  placeholder="Your Current Location"
                />
              )}
            />
            {errors.location && <span>{errors.location.message}</span>}
          </div>

          {/* Hometown */}
          <div>
            <label htmlFor="hometown">Hometown</label>
            <Controller
              name="hometown"
              control={control}
              defaultValue=""
              rules={{ required: "Hometown is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  id="hometown"
                  placeholder="Your Hometown"
                />
              )}
            />
            {errors.hometown && <span>{errors.hometown.message}</span>}
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address">Address</label>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              rules={{ required: "Detailed address is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  id="address"
                  placeholder="Your Detailed Address"
                />
              )}
            />
            {errors.address && <span>{errors.address.message}</span>}
          </div>

          {/* Pincode */}
          <div>
            <label htmlFor="pincode">Pincode</label>
            <Controller
              name="pincode"
              control={control}
              defaultValue=""
              rules={{
                required: "Pincode is required",
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "Pincode must be a 6-digit number",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  id="pincode"
                  placeholder="Your Pincode"
                />
              )}
            />
            {errors.pincode && <span>{errors.pincode.message}</span>}
          </div>

          {/* Payment Method */}
          <div>
            <label htmlFor="payment">Payment Method</label>
            <Controller
              name="payment"
              control={control}
              defaultValue=""
              rules={{ required: "Please select a payment method" }}
              render={({ field }) => (
                <select {...field} id="payment">
                  <option value="">Select Payment Method</option>
                  <option value="gpay">Google Pay</option>
                  <option value="phonepay">PhonePe</option>
                  <option value="creditcard">Credit Card</option>
                  <option value="cod">Cash on Delivery</option>
                </select>
              )}
            />
            {errors.payment && <span>{errors.payment.message}</span>}
          </div>

          {/* Conditional Fields for Payment */}
          {paymentMethod === "gpay" && (
            <div>
              <label htmlFor="gpay-account">Google Pay Account</label>
              <Controller
                name="gpayAccount"
                control={control}
                defaultValue=""
                rules={{ required: "Google Pay account is required" }}
                render={({ field }) => (
                  <input {...field} id="gpay-account" placeholder="Enter your GPay account" />
                )}
              />
              {errors.gpayAccount && <span>{errors.gpayAccount.message}</span>}
            </div>
          )}
          {paymentMethod === "phonepay" && (
            <div>
              <label htmlFor="phonepay-account">PhonePe Account</label>
              <Controller
                name="phonepayAccount"
                control={control}
                defaultValue=""
                rules={{ required: "PhonePe account is required" }}
                render={({ field }) => (
                  <input {...field} id="phonepay-account" placeholder="Enter your PhonePe account" />
                )}
              />
              {errors.phonepayAccount && <span>{errors.phonepayAccount.message}</span>}
            </div>
          )}
          {paymentMethod === "creditcard" && (
            <div>
              <label htmlFor="card-number">Card Number</label>
              <Controller
                name="cardNumber"
                control={control}
                defaultValue=""
                rules={{ required: "Card number is required" }}
                render={({ field }) => (
                  <input {...field} id="card-number" placeholder="Enter your Card Number" />
                )}
              />
              {errors.cardNumber && <span>{errors.cardNumber.message}</span>}
            </div>
          )}

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
