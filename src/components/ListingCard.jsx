export default function ListingCard({ item }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-md">
      <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900">{item.title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {Object.entries(item.meta || {}).map(([key, val]) => (
            <span key={key} className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 bg-slate-100 text-xs text-slate-600">
              <span className="capitalize">{key}:</span>
              <span>{val}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
