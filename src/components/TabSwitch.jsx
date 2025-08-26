import { useId } from 'react'

export default function TabSwitch({ tabs, value, onChange }) {
  const groupId = useId()
  return (
    <div className="w-full">
      <div role="tablist" aria-label="Search modes" className="inline-flex rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {tabs.map((tab) => {
          const selected = value === tab.value
          return (
            <button
              key={tab.value}
              role="tab"
              aria-selected={selected}
              aria-controls={`${groupId}-${tab.value}`}
              onClick={() => onChange(tab.value)}
              className={`px-4 h-11 text-sm font-medium transition-colors ${selected ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
