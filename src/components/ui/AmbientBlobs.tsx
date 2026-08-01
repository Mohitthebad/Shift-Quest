import React from "react";

/**
 * Shared ambient lighting blob background — replaces the two identical blob
 * divs that were duplicated in HeroSection and HrTransformationPage.
 */
export const AmbientBlobs: React.FC = () => (
  <>
    <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-sage/15 rounded-full blur-[90px] pointer-events-none" />
  </>
);

export default AmbientBlobs;
