import { useState } from 'react'
import {
    Area,
    AreaChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart, Pie, PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const data = [
    {date: '2026-12-07', cashIn: 1284, cashOut: 2013},
    {date: '2026-12-04', cashIn: 1483, cashOut: 2234},
    {date: '2026-12-21', cashIn: 1433, cashOut: 1034},
    {date: '2026-12-30', cashIn: 1983, cashOut: 4392},
    {date: '2026-12-03', cashIn: 1223, cashOut: 3093},
    {date: '2026-12-04', cashIn: 1083, cashOut: 3453},
    {date: '2026-12-08', cashIn: 1993, cashOut: 8894},
    {date: '2026-12-04', cashIn: 1243, cashOut: 9433},
    {date: '2026-12-02', cashIn: 1283, cashOut: 2031},
]
const data2 = [
    {date: '2026-12-07', cashIn: 1284, cashOut: 2013},
    {date: '2026-12-04', cashIn: 1483, cashOut: 2234},
    {date: '2026-12-21', cashIn: 1433, cashOut: 1034},
    {date: '2026-12-30', cashIn: 1983, cashOut: 4392},
    {date: '2026-12-03', cashIn: 1223, cashOut: 3093},
]

function App() {

  return (
      <div className="min-h-screen flex items-center justify-center bg-cyber-bg overflow-x-hidden p-4 sm:p-6 md:p-8">

          <main className=" w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className=" w-full  border border-cyber-neon/25 rounded-md  overflow-hidden flex flex-col">
                  {/*En tete du conteneur du Gsraphique*/}
                  <div className="p-5  flex items-center justify-between ">
                      <h4 className="font-bold text-white text-sm">Volume & Revenues</h4>
                      <div className="flex gap-2">
                          <div className="flex items-center gap-1.5 ">
                              <div className="w-2 h-2 rounded-full bg-cyber-purple"></div><span className="text-[10px] font-bold text-slate-400">CashIn</span>
                              <div className="w-2 h-2 rounded-full bg-cyber-error"></div><span className="text-[10px] font-bold text-slate-400">CashOut</span>
                          </div>
                      </div>
                  </div>
                 {/* Le graphique*/}
                 <div className="p-5 h-80">
                     <ResponsiveContainer width="100%" height="100%">
                         <AreaChart data={data}>
                             <defs>
                                 <linearGradient id="cashIn-gradient" x1="0" y1="0" x2="0" y2="1">
                                     <stop offset="0%" stopColor="#d8b4fe" stopOpacity={0.4} />
                                     <stop offset="75%" stopColor="#9333ea" stopOpacity={0.05} />
                                 </linearGradient>
                                 <linearGradient id="cashOut-gradient" x1="0" y1="0" x2="0" y2="1">
                                     <stop offset="0%" stopColor="#f9a8d4" stopOpacity={0.4} />
                                     <stop offset="75%" stopColor="#db2777" stopOpacity={0.05} />
                                 </linearGradient>
                             </defs>
                             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#3f3f46"/>
                             <XAxis dataKey="date" tickLine={true} axisLine={true} stroke="#a855f7"
                                    opacity={0.5}
                                    interval={3}
                                    tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }}
                             />
                             <YAxis stroke="#a855f7"  tickLine={true} axisLine={true}
                                    opacity={0.5}
                                    tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }}
                             />
                             <Tooltip
                                 contentStyle={{borderRadius: '12px', border: '1px solid #a855f7', fontSize: '12px', fontWeight: 500}}
                                 cursor={{
                                     fill: "#a855f7",
                                     radius: 4,
                                     stroke: "#7e22ce"
                                 }}
                             />
                             <Legend/>
                             <Area dataKey="cashIn" type="monotone" stroke="#7e22ce" fill="url(#cashIn-gradient)" strokeWidth={3} fillOpacity={1}/>
                             <Area dataKey="cashOut" type="monotone" stroke="#be185d" fill="url(#cashOut-gradient)" strokeWidth={3} fillOpacity={1}/>
                         </AreaChart>
                     </ResponsiveContainer>
                 </div>
              </div>
              <div className=" w-full  border border-cyber-neon/25 rounded-md  overflow-hidden flex flex-col">
                  {/*En tete du conteneur du Gsraphique*/}
                  <div className="p-5 flex items-center justify-between">
                      <h4 className="font-bold text-white text-sm">Volume & Revenues</h4>
                      <div className="flex gap-2">
                          <div className="flex items-center gap-1.5 ">
                              <div className="w-2 h-2 rounded-full bg-cyber-purple"></div><span className="text-[10px] font-bold text-slate-400">CashIn</span>
                              <div className="w-2 h-2 rounded-full bg-cyber-error"></div><span className="text-[10px] font-bold text-slate-400">CashOut</span>
                          </div>
                      </div>
                  </div>
                 {/* Le graphique*/}
                 <div className="p-5 h-80">
                     <ResponsiveContainer width="100%" height="100%">
                         <LineChart data={data}>
                             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#3f3f46"/>
                             <XAxis dataKey="date" tickLine={true} axisLine={true} stroke="#a855f7"
                                    opacity={0.5}
                                    interval={3}
                                    tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }}
                             />
                             <YAxis stroke="#a855f7"  tickLine={true} axisLine={true}
                                    opacity={0.5}
                                    tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }}
                             />
                             <Tooltip contentStyle={{borderRadius: '12px', border: '1px solid #a855f7', fontSize: '12px', fontWeight: 500}}/>
                             <Legend/>
                             <Line dataKey="cashIn" type="monotone" stroke="#7e22ce" fill="url(#cashIn-gradient)" strokeWidth={3} fillOpacity={1}/>
                             <Line dataKey="cashOut" type="monotone" stroke="#be185d" fill="url(#cashOut-gradient)" strokeWidth={3} fillOpacity={1}/>
                         </LineChart>
                     </ResponsiveContainer>
                 </div>
              </div>
              <div className=" w-full  border border-cyber-neon/25 rounded-md  overflow-hidden flex flex-col">
                  {/*En tete du conteneur du Gsraphique*/}
                  <div className="p-5 flex items-center justify-between">
                      <h4 className="font-bold text-white text-sm">Volume & Revenues</h4>
                      <div className="flex gap-2">
                          <div className="flex items-center gap-1.5 ">
                              <div className="w-2 h-2 rounded-full bg-cyber-purple"></div><span className="text-[10px] font-bold text-slate-400">CashIn</span>
                              <div className="w-2 h-2 rounded-full bg-cyber-error"></div><span className="text-[10px] font-bold text-slate-400">CashOut</span>
                          </div>
                      </div>
                  </div>
                 {/* Le graphique*/}
                 <div className="p-5 h-80">
                     <ResponsiveContainer width="100%" height="100%">
                         <PieChart>
                             <Tooltip contentStyle={{borderRadius: '12px', border: '1px solid #a855f7', fontSize: '12px', fontWeight: 500}}/>
                             <Pie data={data} dataKey="cashIn"  stroke="white" cx="50%" cy="50%" fill="#a855f7"  outerRadius={50} paddingAngle={5} />
                             <Pie data={data2} dataKey="cashOut"  stroke="white" cx="50%" cy="50%" fill="#ec4899" innerRadius={60} outerRadius={80} paddingAngle={5} label/>
                         </PieChart>
                     </ResponsiveContainer>
                 </div>
              </div>

          </main>
      </div>
  )
}

export default App
