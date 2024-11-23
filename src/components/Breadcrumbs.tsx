import { RxCaretRight } from "react-icons/rx";

interface BreadcrumbsProps {
    menu: string,
    subMenu: string
}

export default function Breadcrumbs({ menu, subMenu }: BreadcrumbsProps) {
    return (
        <div className="flex gap-2 items-center">
          <div>{menu}</div>
          <div><RxCaretRight /></div>
          <div className="text-[#737373]">{subMenu}</div>
        </div>
      )
}