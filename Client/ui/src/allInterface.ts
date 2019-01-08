export interface IEmployee {
  employeeId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: Date;
  email: string;
}
export interface IState {
  empData: IEmployee[];
  currentPage: number;
  pagesCount: number;
}
