/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSubmission = /* GraphQL */ `
  subscription OnCreateSubmission(
    $filter: ModelSubscriptionSubmissionFilterInput
    $owner: String
  ) {
    onCreateSubmission(filter: $filter, owner: $owner) {
      id
      content
      createdAt
      owner
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateSubmission = /* GraphQL */ `
  subscription OnUpdateSubmission(
    $filter: ModelSubscriptionSubmissionFilterInput
    $owner: String
  ) {
    onUpdateSubmission(filter: $filter, owner: $owner) {
      id
      content
      createdAt
      owner
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteSubmission = /* GraphQL */ `
  subscription OnDeleteSubmission(
    $filter: ModelSubscriptionSubmissionFilterInput
    $owner: String
  ) {
    onDeleteSubmission(filter: $filter, owner: $owner) {
      id
      content
      createdAt
      owner
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
