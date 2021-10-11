import { graphql } from "msw";

const activities = [
  {
    id: "1",
    title: "Wash roof",
    area: {
      id: "101",
      title: "Roof",
    },
  },
  {
    id: "2",
    title: "Clean chimney",
    area: {
      id: "101",
      title: "Roof",
    },
  },
  {
    id: "3",
    title: "Wash walls",
    area: {
      id: "102",
      title: "Walls",
    },
  },
];

export const handlers = [
  graphql.query("activities", (req, res, ctx) => {
    return res(ctx.data(activities));
  }),
];
