import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerSubmission = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Submission, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly owner?: string | null;
  readonly updatedAt?: string | null;
}

type LazySubmission = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Submission, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly owner?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Submission = LazyLoading extends LazyLoadingDisabled ? EagerSubmission : LazySubmission

export declare const Submission: (new (init: ModelInit<Submission>) => Submission) & {
  copyOf(source: Submission, mutator: (draft: MutableModel<Submission>) => MutableModel<Submission> | void): Submission;
}