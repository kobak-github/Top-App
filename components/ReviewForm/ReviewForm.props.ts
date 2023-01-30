import { ReviewModel } from '@/interfaces/product.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { BooleanLiteral } from 'typescript';

export interface ReviewFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productId: string;
  isOpened: boolean;
}
