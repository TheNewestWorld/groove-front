import React from "react";
import { QueryClientProvider } from "react-query";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { getGlobalQueryClient } from "../query";

type Props = {
  locationPath: string;
  routePath: string;
};

const withWrappers =
  ({ locationPath, routePath }: Props) =>
  (Story: () => React.ReactElement) => {
    return (
      <QueryClientProvider client={getGlobalQueryClient()}>
        <MemoryRouter initialEntries={[locationPath]}>
          <Routes>
            <Route path={routePath} element={<Story />} />
            <Route path="*" element={<Story />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );
  };

export default withWrappers;
