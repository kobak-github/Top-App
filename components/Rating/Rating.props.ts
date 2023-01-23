import { DetailedHTMLProps, HTMLAttributes } from "react";
import { NamedTupleMember } from "typescript";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void
}