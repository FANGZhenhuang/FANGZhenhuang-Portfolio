export interface Project {
  id: string;
  title: string;
  category: string[];
  date: string;
  role?: string;
  description: string;
  longDescription?: string[];
  tags: string[];
  imageUrl?: string;
  gallery?: { imageUrl: string; caption: string }[];
  videoEmbed?: string;
  videoCaption?: string;
  links?: { label: string; url: string }[];
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  tasks: string[];
}

export interface Award {
  title: string;
  description?: string;
}