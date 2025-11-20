import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();

  const mapRef = useRef();

  const searchDistrict = (location) => {
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district) {
      const cord = [district.latitude, district.longitude];
      console.log("Matched:", district, cord);
      mapRef.current.flyTo(cord, 14);
    }
  };

  // Form submit
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    searchDistrict(location);
  };

  //  Button Click
  const handleClick = () => {
    const location = document.getElementById("locationInput").value;
    searchDistrict(location);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      {/* Outer Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            We are available in 64 districts
          </h1>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Search your area and check coverage details instantly.
          </p>
        </div>

        {/* Search Bar */}
        <div className=" flex flex-col md:flex-row  items-center gap-2  max-w-md mx-auto mb-12">
          <label className="flex items-center  gap-3 bg-gray-100 px-4 py-3 rounded-xl shadow-sm border border-gray-200 focus-within:ring-2 focus-within:ring-teal-400 transition">
            <svg
              className="h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <form onSubmit={handleSearch}>
              <input
                id="locationInput"
                type="search"
                name="location"
                required
                className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500"
                placeholder="Search district"
              />
            </form>
          </label>
          <button
            onClick={handleClick}
            className="btn  w-full md:w-auto   bg-primary rounded-2xl text-lg text-base-300 p-6"
          >
            Search
          </button>
        </div>

        {/* Map Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            We deliver almost all over Bangladesh
          </h3>

          <div className="rounded-xl  overflow-hidden shadow-md border border-gray-200">
            <MapContainer
              center={position}
              zoom={7}
              scrollWheelZoom={false}
              className="h-[400px]"
              ref={mapRef}
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {serviceCenters.map((center) => (
                <Marker position={[center.latitude, center.longitude]}>
                  <Popup>
                    <strong> District: {center.district}</strong> <br />{" "}
                    <strong>
                      Coverage Area: {center.covered_area.join(", ")}
                    </strong>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
