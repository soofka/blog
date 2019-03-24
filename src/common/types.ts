import { EntryMetaInterface, EntryVersionInterface } from 'tools/blogData/entries';
import { ContentVersionInterface } from 'tools/blogData/helpers';
import { TalkMetaInterface, TalkVersionInterface } from 'tools/blogData/talks';

export type Language = 'pl' | 'en';
export type Environment = 'dev' | 'prod';
export type Mode = 'normal' | 'audit';

export type EntryInterface = ContentVersionInterface<EntryMetaInterface, EntryVersionInterface>;
export type EntriesInterface = {
  [s: string]: EntryInterface[];
};

export interface TalkConferenceInterface {
  name: string;
  location: string;
}
export type TalkInterface = ContentVersionInterface<TalkMetaInterface, TalkVersionInterface>;
export type TalksInterface = {
  [s: string]: TalkInterface[];
};

export interface TagInterface {
  id: string;
  url: string;
  name: string;
}
export interface TagsInterface extends Array<TagInterface> {}

export interface ArchiveItemInterface {
  id: string;
  title: string;
  niceUrl: string;
  created: string;
}
export interface ArchiveInterface extends Array<ArchiveItemInterface> {}
