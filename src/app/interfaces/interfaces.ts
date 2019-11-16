export interface Componente {
    icon: string;
    name: string;
    redirectTo: string;
  }

  export interface Usuario {
    avatar?: string;
    _id?: string;
    nombre?: string;
    email?: string;
    password?: string;
  }

export interface MicroContentRoot {
    MicroContent: MicroContent;
    MicroContent_Id: number;
    Name?: any;
    Title: string;
    Content?: any;
    Image?: any;
    DateStart: string;
    DateClosed: string;
    PointsApproval: number;
    PointsTotals: number;
    Groups_Ids?: any;
    Groups: any[];
    Users_Ids?: any;
    Users: any[];
    Categories_Ids?: any;
    Categories: any[];
    DateCreated?: any;
    UserCreated?: any;
    DateModified?: any;
    UserModified?: any;
  }


export interface MicroContent {
  MicroContent_Id: number;
  Name?: String;
  Title: string;
  Content?: any;
  Image?: string;
  Points?: any;
  DateStart: string;
  DateClosed: string;
  PointsApproval: number;
  PointsTotals?: any;
  DateCreated?: any;
  UserCreated?: any;
  DateModified?: any;
  UserModified?: any;
  AspNetUser_Id?: any;
  AspNetUser?: any;
  MContentCategories: any[];
  MContentGroups: any[];
  MContentUsers: any[];
}






  


  