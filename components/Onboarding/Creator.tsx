import { Button } from "@chakra-ui/react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Template } from "../../types";

const INSERT_ACTIVITY_MUTATION = gql`
  mutation insertActivities($objects: [activities_insert_input!]!) {
    insert_activities(objects: $objects) {
      returning {
        id
      }
    }
  }
`;

type Props = {
  templates: Template[];
};

/**
 * Handles creation of activities from template identifiers.
 * This enables a planned feature where activities are filtered down interactively,
 * for example not everyone has a chimney to clean.
 */
export default function Creator({ templates }: Props) {
  const [insertActivities, { loading, error }] = useMutation(
    INSERT_ACTIVITY_MUTATION
  );
  const insertHandler = () => {
    insertActivities({
      variables: {
        objects: templates.map((t) => ({
          template_id: t.id,
          area_id: t.area.id,
        })),
      },
    });
  };

  if (loading) return <p>Submitting...</p>;
  if (error) return <p>Error :(</p>;

  return <Button onClick={insertHandler}>Get started!</Button>;
}
