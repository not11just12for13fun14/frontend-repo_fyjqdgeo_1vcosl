export default function Skills(){
  const skills = {
    'Languages & Frameworks': ['Dart', 'Flutter (BLoC, Provider, Clean Architecture)', 'Kotlin', 'Java'],
    'Testing': ['Unit', 'Widget', 'Integration Testing'],
    'APIs & Databases': ['REST APIs', 'Firebase', 'SQLite', 'GraphQL'],
    'Version Control & CI/CD': ['Git', 'GitHub', 'Bitbucket'],
    'Other': ['Payments (Razorpay, Stripe, IAP)', 'Bluetooth/IoT', 'Agile/Scrum']
  }

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([cat, items]) => (
          <div key={cat} className="bg-white border rounded-lg p-5 shadow-sm">
            <h3 className="font-semibold text-gray-800">{cat}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="text-sm bg-gray-100 border px-3 py-1 rounded text-gray-700">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
