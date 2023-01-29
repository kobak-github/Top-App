import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { NamedTupleMember } from "typescript";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
  error?: FieldError
  
}