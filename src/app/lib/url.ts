export const Url = {
  collection: (params: CollectionArgs) => ({
    tab: `${Url.base}/${params.type}`,
  }),
  member: (params: MemberArgs) => ({
    accordion: `${Url.base}/${params.type}/${params.id}`,
  }),
  base: 'https://jsonplaceholder.typicode.com'
};
