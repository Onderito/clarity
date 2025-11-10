"use client";

export default function FeatureCardWrapper({ children }) {
  return (
    <div className="border-[0.5px] border-[#E2E6EC] rounded-3xl w-full p-4 overflow-hidden relative">
      {children}
    </div>
  );
}
