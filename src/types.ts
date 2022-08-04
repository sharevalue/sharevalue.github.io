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
