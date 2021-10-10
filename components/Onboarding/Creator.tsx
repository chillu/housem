import { Button } from "@chakra-ui/react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

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
  templateIds: string[];
};

/**
 * Handles creation of activities from template identifiers.
 * This enables a planned feature where activities are filtered down interactively,
 * for example not everyone has a chimney to clean.
 */
export default function Creator({ templateIds }: Props) {
  const [insertActivities, { loading, error }] = useMutation(
    INSERT_ACTIVITY_MUTATION
  );
  const insertHandler = () => {
    insertActivities({
      variables: { objects: templateIds.map((id) => ({ template_id: id })) },
    });
  };

  if (loading) return <p>Submitting...</p>;
  if (error) return <p>Error :(</p>;

  return <Button onClick={insertHandler}>Get started!</Button>;
}
