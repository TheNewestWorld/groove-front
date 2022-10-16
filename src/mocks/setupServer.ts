import {
  RequestHandler,
  rest,
  RestRequest,
  ResponseComposition,
  DefaultBodyType,
  PathParams,
} from "msw";
import { setupServer as MswSetupServer } from "msw/node";

const passedApiHandler = (
  req: RestRequest<DefaultBodyType, PathParams>,
  res: ResponseComposition<any>
) => {
  return res();
};

export const setupServer = (...handlers: RequestHandler[]) => {
  const server = MswSetupServer(
    ...handlers,

    rest.all("*", passedApiHandler)
  );

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  return server;
};
