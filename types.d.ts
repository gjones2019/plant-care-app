declare module '**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)' {
  import "@testing-library/jest-dom";
}
export interface Data {
  status: string;
  error?: string;
  json?: Array<{
    name: string;
    care: Record<string, string>;
  }>;
}

export interface PlantEntryProps {
  name: string;
  care: {
    [key: string]: string;
  };
  onClick: () => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
