import React, { useState } from "react";
import Layout from "../components/shared/Layout";
import NewProjectModal from "../components/modals/NewProjectModal";

export default function DesignCalculation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Layout>
      <div className="h-full flex flex-col">
        {isOpen && <NewProjectModal close={setIsOpen} />}
        <div className="flex justify-end">
          <button
            className="text-sm font-medium bg-blue-500 p-2 text-white rounded-sm cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            Add New
          </button>
        </div>
        <div className="h-full flex justify-center items-center">
          <div className="flex flex-col items-center gap-2">
            <img
              src="/images/noprojects.svg"
              alt="No Projects"
              className="mix-blend-multiply"
            />
            <div className="text-gray-700 text-sm font-medium">
              No project to show
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
