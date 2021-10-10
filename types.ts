// TODO Infer from GraphQL types

export type Area = {
  id: string;
  title: string;
};

export type Template = {
  id: string;
  title: string;
  area: Area;
};

export type Activity = {
  id: string;
  title: string;
  template: Template;
  area: Area;
};
