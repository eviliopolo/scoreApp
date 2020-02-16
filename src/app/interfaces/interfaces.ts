export interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

export interface Usuario {
  avatar?: string;
  _id?: string;
  nombre?: string;
  apellido?: string;
  usuario?: string;
  email?: string;
  password?: string;
  currentpassword?: string;
  confirmpassword?: string;

}

export interface MicroContentRoot {
  MicroContent: MicroContent;
  MicroContent_Id: number;
  Name?: string;
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

export interface RootUsuario {
  Result: UsuarioEstudiante;
  Response: boolean;
  Message: string;
  Function?: any;
  Href?: any;
  Validations?: any;
}

export interface UsuarioEstudiante {
  Id?: string;
  Email?: string;
  UserName?: string;
  FirstName?: string;
  LastName?: string;
  Avatar?: string;
}


export interface MicroContentMobile {
  id: number;
  name: string;
  image?: string;
  points: number;
  title:string;
  content:string;
  imagebase64:any;
  endDate:Date;
}

export interface ContentManager {
  id: number;
  name: string;
  points:number;
}

export interface objectLearningMobile {
  id: number;
  name: string;
  title: string;
  points: number;
  contenttype:number;
  content:string;
  Image:string;
}

export interface question {
  id: string;
  ObjectLearning_Id: number;
  Question_Id: number;
  Text: string;
  Points: number;  
  Responses: response[];
}

export interface response {
  id: string;
  ResponseIndex: number;
  Response_Id: number;
  Text: string;
  IsAproved: boolean;
  AplyByType: boolean;
  selected : boolean;
}

export interface countobject {
  activenumber: number;
  inactivednumber: number;
  totalpoints: number;
}










