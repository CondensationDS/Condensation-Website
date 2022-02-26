export default function SectionLayout({ children }) {
    return (
      <div className="bg-red-700">

          <div className="pl-20 pt-10">
            {children}
          </div>
      </div>
    )
}