export default function StepItem({ title, text, icon }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 h-9 w-9 rounded-xl bg-slate-900 text-white flex items-center justify-center" aria-hidden="true">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
        <p className="text-slate-600 text-sm mt-1">{text}</p>
      </div>
    </div>
  )
}
