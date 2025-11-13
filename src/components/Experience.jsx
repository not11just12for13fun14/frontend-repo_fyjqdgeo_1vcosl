export default function Experience(){
  const roles = [
    {
      company: 'Cognizant',
      title: 'Sr. Software Engineer',
      period: 'Mar 2025 - Present',
      points: [
        'Developing and maintaining scalable Flutter apps for enterprise and banking',
        'Knowledge sharing and technical discussions on Flutter best practices',
      ],
    },
    {
      company: 'Cognizant',
      title: 'Associate Project',
      period: 'Jul 2024 - Mar 2025',
      points: [
        'Built remote cheque scanning, global search, multi-account management',
        'Led task distribution, reviews, and maintained production code',
        'Developed custom plugins and contributed to technical blogs',
      ],
    },
    {
      company: 'DLT Labs',
      title: 'Mobile Application Developer',
      period: 'Aug 2021 - Jul 2024',
      points: [
        'Feature development and standards compliance for banking app',
        'Debugging and production maintenance',
      ],
    },
    {
      company: 'Alternative Tech Lab Pvt Ltd',
      title: 'Senior Flutter Developer',
      period: 'Mar 2021 - Jul 2021',
      points: [
        'Led Flutter e-commerce and booking platforms',
        'Advocated clean architecture and TDD',
      ],
    },
    {
      company: 'Ongraph Technology',
      title: 'Mobile Application Developer',
      period: 'Nov 2017 - Feb 2021',
      points: [
        'Built IoT Bluetooth app for device locking/unlocking (Native Android)',
        'Recognized as Super Node for leadership and delivery',
      ],
    },
  ]
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
      <div className="mt-6 space-y-6">
        {roles.map((r) => (
          <div key={r.company+r.period} className="bg-white border rounded-lg p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">{r.title} • {r.company}</h3>
              <span className="text-sm text-gray-500">{r.period}</span>
            </div>
            <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
              {r.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
