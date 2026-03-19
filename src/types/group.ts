export type Group = {
  id: string;
  section: string | null;
  link: string;
  generalGroup: boolean;
  generalGroupMaleAndFemale: boolean;
};

export type GetGroupsResponse = {
  groups: Group[];
};
