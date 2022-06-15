import React from "react";
import CardProfile from "components/Cards/CardProfile.js";
import Admin from "layouts/Admin.js";
import CreateReport from "components/Report/createReport";

export default function Report() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CreateReport />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}

Report.layout = Admin;