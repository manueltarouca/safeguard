export interface Database {
  entries: Entry[];
}

interface Entry {
  identifier: string;
  username: string;
  password: string;
  url: string;
}

export const DATA: Database = {
  entries: [
    {
      identifier: 'facebook',
      username: 'test',
      password: 'test',
      url: 'https://facebook.com'
    }
  ]
}