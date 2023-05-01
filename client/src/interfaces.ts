export interface CompanyInfoProps {
  id: null | undefined
  companyInfo: {
    company_name: string, 
    repos: string[],
    id: string | number
  }
}