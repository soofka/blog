// import * as React from 'react';
// import { reaction } from 'mobx';
// import { inject } from 'mobx-react';
// import { RouteComponentProps } from 'react-router-dom';
//
// import AssetsProvider from 'common/AssetsProvider';
// import RequestHandler, { RequestHandlerResponseInterface } from 'common/RequestHandler';
//
// import { LanguageStoreInterface } from 'store/language';
//
// import Label from 'components/Label';
// import LoadingCover from 'components/LoadingCover';
// import ErrorBox from 'components/ErrorBox';
//
// import { EntryInterface } from 'containers/Entry';
//
// export interface ArchivePropsInterface extends RouteComponentProps<null> {
//   languageStore?: LanguageStoreInterface;
// }
//
// interface ArchiveStateInterface {
//   entries: EntryInterface[];
//   loading: boolean;
// }
//
// export class Entries extends React.Component<ArchivePropsInterface, ArchiveStateInterface> {
//   constructor(props: ArchivePropsInterface) {
//     super(props);
//     this.state = { entries: undefined, loading: false };
//
//     reaction(
//       () => this.props.languageStore.language,
//       () => {
//         this.getEntries();
//       },
//     );
//   }
//
//   componentDidMount() {
//     if (!this.state.entries) {
//       this.getEntries();
//     }
//   }
//
//   getEntries() {
//     this.setState({ loading: true });
//     AssetsProvider
//       .getEntries(this.props.languageStore.getLanguage())
//       .then((response: RequestHandlerResponseInterface) => {
//         const entries = RequestHandler.validateResponse(response)
//           ? response.data
//           : undefined;
//         this.setState({ entries, loading: false });
//       });
//   }
//
//   render() {
//     const { entries, loading } = this.state;
//
//     if (loading) {
//       return (
//         <LoadingCover />
//       );
//     }
//
//     if (!entries) {
//       return (
//         <ErrorBox
//           message={<Label name="errors__no_entries_in_db" />}
//         />
//       );
//     }
//
//     return (
//       <div>
//         {this.getMeta()}
//         <EntriesList
//           entries={entriesFiltered}
//           fullEntry={this.isEntryFull()}
//         />
//       </div>
//     );
//   }
//
//   getMeta(): JSX.Element {
//     return <EntriesMeta/>;
//   }
//
//   filterEntries(entries: EntryInterface[], params: EntriesParamsInterface): EntryInterface[] {
//     return entries;
//   }
//
//   isEntryFull(): boolean {
//     return false;
//   }
// }
//
// function prepareEntries(entries: EntryInterface[]): EntryInterface[] {
//   return filterPrivateEntries(entries);
// }
//
// function filterPrivateEntries(entries: EntryInterface[]): EntryInterface[] {
//   return entries.filter((entry: EntryInterface) => {
//     return !!entry.public;
//   });
// }
//
// export default inject('languageStore')(Entries);
