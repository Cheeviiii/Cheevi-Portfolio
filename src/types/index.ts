export interface ProjetoProps {
  id?: string;
  title: string;
  image: string;
  description: string;
  published: boolean;
  repository: string;
  types: any;
}

export interface ContactProps {
  name: string;
  email: string;
  content: string;
}
