export default function SearchField({ label, children, helper }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      {children}
      {helper ? <span className="text-xs text-slate-500">{helper}</span> : null}
    </label>
  )
}
