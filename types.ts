// TODO Infer from GraphQL types

export type TemplateActivity = {
  id: string;
  title: string;
};

export type Activity = {
  id: string;
  title: string;
  template: TemplateActivity;
};
