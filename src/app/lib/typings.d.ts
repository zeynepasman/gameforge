declare interface CollectionArgs {
  type: string;
}

declare interface MemberArgs {
  type: string;
  id: number;
}


declare type AppTabs = 'users' | 'posts' | 'comments';

declare interface IAccordion {
    id: number,
    body: string
    name: string
}
