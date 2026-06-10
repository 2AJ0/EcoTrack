function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold">Energy Tracking Dashboard</h1>
            <p className="text-sm text-slate-500">Monitor your usage trends and efficiency goals.</p>
          </div>
          <button className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
            Export Report
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-6 py-6 md:grid-cols-3">
        <section className="grid gap-4 md:col-span-3 md:grid-cols-3">
          {[
            { label: 'Today', value: '42.1 kWh' },
            { label: 'This Week', value: '278.4 kWh' },
            { label: 'This Month', value: '1,149.2 kWh' },
          ].map((stat) => (
            <article key={stat.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
            </article>
          ))}
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:col-span-2">
          <h2 className="text-lg font-semibold">Consumption Trend</h2>
          <div className="mt-4 h-64 rounded-md border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
            Line chart placeholder (daily energy consumption)
          </div>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Energy Mix</h2>
          <div className="mt-4 h-64 rounded-md border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
            Pie chart placeholder (source breakdown)
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
