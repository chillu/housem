import { Button } from "@chakra-ui/react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import Creator from "./Creator";

const GET_TEMPLATES_QUERY = gql`
  query getTemplates {
    templates {
      id
      title
    }
  }
`;

/**
 * Shown when the user doesn't have any activities yet,
 * and needs to choose which ones to add. We don't auto-add them because
 * not all activities apply to all users, and it needs to be an interactive selection process.
 */
export default function Onboarding() {
  const { loading, error, data } = useQuery(GET_TEMPLATES_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return <Creator templateIds={data.templates.map((t) => t.id)} />;
}
