import React from "react";
import { QueryClientProvider } from "react-query";
import { MemoryRouter as Router, Route } from "react-router-dom";
import { getGlobalQueryClient } from "../query";
import {} from "@storybook/react";

type Props = {
  locationPath: string;
  routePath: string;
};

const withWrappers =
  ({ locationPath, routePath }: Props) =>
  (Story: () => React.ReactElement) => {
    return (
      <QueryClientProvider client={getGlobalQueryClient()}>
        <Router initialEntries={[locationPath]}>
          <Route path={routePath} element={<Story />} />
        </Router>
      </QueryClientProvider>
    );
  };

export default withWrappers;
