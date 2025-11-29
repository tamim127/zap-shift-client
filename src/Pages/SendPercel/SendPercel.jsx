import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors }
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);

  const regions = [...new Set(regionsDuplicate)];
  // explore useMemo useCallback
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

const districtsByRegion = (region) => {
  if (!serviceCenters || !region) return [];
  const regionDistricts = serviceCenters.filter((c) => c.region === region);
  return regionDistricts.map((d) => d.district);
};


  const handleSendParcel = (data) => {
    console.log(data);

    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = minCharge + extraCharge;
      }
    }

    console.log("cost", cost);

    Swal.fire({
      title: "Agree with the Cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree!",
    }).then((result) => {
      if (result.isConfirmed) {
        // save the parcel info to the database
        axiosSecure.post("/parcels", data).then((res) => {
          console.log("after saving parcel", res.data);
        });

        // Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        // });
      }
    });
  };

  return (
    <div className="px-4 md:px-10 py-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight">
        Send A Parcel
      </h2>

      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="bg-white/80 backdrop-blur-xl shadow-2xl border border-gray-100 rounded-3xl p-6 md:p-10 space-y-10"
      >
        {/* Parcel Type */}
        <div className="flex items-center gap-8 justify-center">
          <label className="flex items-center gap-2 cursor-pointer font-medium">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio radio-primary"
              defaultChecked
            />
            Document
          </label>

          <label className="flex items-center gap-2 cursor-pointer font-medium">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio radio-primary"
            />
            Non-Document
          </label>
        </div>

        {/* Parcel Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-2">
            <label className="font-semibold">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input input-bordered w-full focus:input-primary"
              placeholder="Parcel Name"
            />
          </div>

          <div className="space-y-2">
            <label className="font-semibold">Parcel Weight (kg)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input input-bordered w-full focus:input-primary"
              placeholder="Parcel Weight"
            />
          </div>
        </div>

        {/* Sender + Receiver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Sender */}
          <div className="border border-gray-200 bg-white shadow-md rounded-2xl p-6 space-y-4">
            <h4 className="text-2xl font-bold mb-4">Sender Details</h4>

            <div className="space-y-2">
              <label className="font-medium">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Sender Email</label>
              <input
                type="text"
                {...register("senderEmail")}
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Sender Region</label>
              <select
                {...register("senderRegion")}
                className="select select-bordered w-full"
              >
                <option disabled>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-medium">Sender District</label>
              <select
                {...register("senderDistrict")}
                className="select select-bordered w-full"
              >
                <option disabled>Pick a district</option>
                {districtsByRegion(senderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-medium">Sender Address</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Receiver */}
          <div className="border border-gray-200 bg-white shadow-md rounded-2xl p-6 space-y-4">
            <h4 className="text-2xl font-bold mb-4">Receiver Details</h4>

            <div className="space-y-2">
              <label className="font-medium">Receiver Name</label>
              <input
                type="text"
                {...register("receiverName")}
                className="input input-bordered w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Receiver Email</label>
              <input
                type="text"
                {...register("receiverEmail")}
                className="input input-bordered w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Receiver Region</label>
              <select
                {...register("receiverRegion")}
                className="select select-bordered w-full"
              >
                <option disabled>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-medium">Receiver District</label>
              <select
                {...register("receiverDistrict")}
                className="select select-bordered w-full"
              >
                <option disabled>Pick a district</option>
                {districtsByRegion(receiverRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-medium">Receiver Address</label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>

        {/* SUBMIT BUTTON — SMALL, PREMIUM, MODERN */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="
          px-8 py-2 text-base font-semibold
          bg-primary
          text-white rounded-full shadow-lg
          hover:scale-[1.03] transition-all duration-300
        "
          >
            Send Parcel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
