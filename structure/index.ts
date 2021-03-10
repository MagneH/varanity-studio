import documentStore from 'part:@sanity/base/datastore/document';
import S from '@sanity/desk-tool/structure-builder'
import { map } from 'rxjs/operators';
import { SanityDocument } from '@sanity/types';
import { CgFileDocument } from 'react-icons/cg';
import { BsFolder } from 'react-icons/bs';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Articles')
        .child(
          documentStore
            .listenQuery(`*[_type == "category" && parent -> slug.current == "categories"]`)
            .pipe(
              map(documents => {
                const sanityDocuments = documents as (SanityDocument & {
                  title: { en: string; no: string; };
                  slug: { current: string };
                })[];
                return S.list()
                  .id('articles')
                  .title('Articles')
                  .items(
                    sanityDocuments &&
                    sanityDocuments
                      .filter(
                        e =>
                          e.isTagOnly !== true &&
                          !e._id.startsWith('drafts.'),
                      )
                      .sort(
                        (e1, e2) =>
                          e2._type.localeCompare(e1._type) || !!e1.title.en && !!e2.title.en && e1.title.en.localeCompare(e2.title.en),
                      )
                      .map(document => {
                        const id = document._id.replace('drafts.', '');
                        return S.listItem()
                          .id(id)
                          .title(document.title.en || document.title)
                          .icon(document._type === 'article' ? CgFileDocument : BsFolder)
                          .child(recursiveChildList(id, document.title.en || document.title, document._type));
                      }),
                  );
              }),
            ),
        ),
      ...S.documentTypeListItems().filter(
        listItem =>
          !['article'].includes(
            listItem.getId()
          )
      )
    ])

const recursiveChildList = (id, title, type) => parentId => {
  if (type === 'article') {
    return S.document().id(id).title(title);
  }
  return documentStore
    .listenQuery(
      `*[_type in ["category", "article"] && parent._ref == "${parentId}" || mainCategory._ref == "${parentId}"]`,
    )
    .pipe(
      map(documents => {
        const sanityDocuments = documents as (SanityDocument & {
          title: { en: string; no: string };
          slug: { current: string };
        })[];
        return S.list()
          .id(parentId)
          .title(title)
          .initialValueTemplates([
            S.initialValueTemplateItem('articleWithParentCategory', { categoryId: parentId }),
          ])
          .items(
            sanityDocuments &&
            sanityDocuments
              .filter(e => {
                const isDraft = e._id.startsWith('drafts.');
                let isFirstDraft = false;
                if (isDraft) {
                  const id = e._id.replace('drafts.', '');
                  isFirstDraft = sanityDocuments.findIndex(e1 => e1._id === id) === -1;
                }
                return !isDraft || isFirstDraft;
              })
              .sort((e1, e2) => {
                if (!!e2.title.en || !!e1.title.en) {
                  return -1;
                }
                return e2._type.localeCompare(e1._type) || !!e1.title.en && e2.title.en && e1.title.en.localeCompare(e2.title.en);
              })
              .map(document => {
                const id = document._id.replace('drafts.', '');
                return S.listItem()
                  .id(id)
                  .title(document.title.en || document.title || 'Undefined')
                  .icon(document._type === 'article' ? CgFileDocument : BsFolder)
                  .child(recursiveChildList(id, document.title.en || document.title, document._type));
              }),
          );
      }),
    );
};
