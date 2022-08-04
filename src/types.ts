import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface IInquiryForm {
  name: string;
  tel: string;
  email: string;
  title: string;
  companyName: string;
  content: string;
}

export interface IProductSpec {
  title: string;
  icon: string;
  specList: string[];
}

export interface INotice {
  noticeId: string;
  siteId: string;
  title: string;
  content: string;
  isFixed: boolean;
  isUrgent: boolean;
  isActive: string;
  isDeleted: string;
  createdDateTime: Date | string;
  createdById: string;
  createdByName: string;
  updateDateTime?: Date | string;
  updatedById?: string;
  updatedByName?: string;
  deletedDateTime?: Date | string;
  deletedById?: string;
  deletedByName?: string;
}

export interface IFAQ {
  content: string;
  faqId: string;
  isDeleted: boolean;
  product: string;
  siteId?: string;
  tag?: string;
  title: string;
  createdById: string;
  createdByName: string;
  createdDateTime: Date | string;
  updatedById?: string;
  updatedByName?: string;
  updatedDateTime?: Date | string;
  deletedDateTime?: Date | string;
  deletedById?: string;
  deletedByName?: string;
}
