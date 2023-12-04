import { format } from "date-fns";
import React from "react";
import toast from "react-hot-toast";
import Main from "../../../components/Main";
const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name: treatmentName, slots, price } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
      price,
    };

    // Ensure the endpoint matches your backend API
    fetch("http://localhost:8080/api/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setTreatment(null);
        toast.success("Booking confirmed");
        refetch();
      } else {
        toast.error(data.message);
      }
    })
    .catch((error) => {
      console.error('Fetch error:', error);
      toast.error("Slot is already booked");
    });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
            <input type="text" disabled value={date} className="input w-full input-bordered" />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>{slot}</option>
              ))}
            </select>
            {/* Enable name and email inputs */}
            <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" />
            <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" />
            <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
            <br />
            <input className="btn btn-accent w-full" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
