export interface IEmployee {
  id?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  dateOfBirth?: Date;
  email?: string;
  fullName?: string;
  address?: string;
}
export interface IState {
  empData: IEmployee[];
  currentPage: number;
  pagesCount: number;
}
export interface IEstate {
  employee: IEmployee;
}
