import ConditionalFooter from "@/components/ConditioalFooter";
import "./second-expression.css";

export const metadata = {
  title: {
    default: "Second Expression",
    template: "%s | Second Expression",
  },
  description:
    "Discover Second Expression — less noise, more expression. Explore contemporary fashion and personal style.",
};

export default function SecondExpressionLayout({ children }) {
  return <>{children}</>;
}
