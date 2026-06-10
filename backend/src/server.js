const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 4000

const mockEnergyConsumption = [
  { timestamp: '2026-06-06T00:00:00Z', kWh: 34.2 },
  { timestamp: '2026-06-07T00:00:00Z', kWh: 38.9 },
  { timestamp: '2026-06-08T00:00:00Z', kWh: 36.1 },
  { timestamp: '2026-06-09T00:00:00Z', kWh: 41.5 },
  { timestamp: '2026-06-10T00:00:00Z', kWh: 39.7 },
]

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.get('/api/energy-consumption', (_req, res) => {
  res.json({
    unit: 'kWh',
    data: mockEnergyConsumption,
  })
})

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`)
})
