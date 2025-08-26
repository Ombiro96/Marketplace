import { useId } from 'react'

export default function TabSwitch({ tabs, value, onChange }) {
  const groupId = useId()
  return (
    <div style={{ width: '100%' }}>
      <div
        role="tablist"
        aria-label="Search modes"
        style={{ display: 'inline-flex', gap: 8, borderRadius: 12, border: '1px solid #e5e7eb', background: '#fff', padding: 4, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}
      >
        {tabs.map((tab) => {
          const selected = value === tab.value
          return (
            <button
              key={tab.value}
              role="tab"
              aria-selected={selected}
              aria-controls={`${groupId}-${tab.value}`}
              onClick={() => onChange(tab.value)}
              style={{
                padding: '0 12px',
                height: 44,
                fontSize: 14,
                fontWeight: 600,
                color: selected ? '#fff' : '#15803d',
                background: selected ? '#15803d' : 'transparent',
                borderRadius: 10,
                border: '1px solid transparent',
                cursor: 'pointer',
              }}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
