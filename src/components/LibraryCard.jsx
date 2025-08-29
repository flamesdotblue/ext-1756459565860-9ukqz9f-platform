import CategorySlider from './CategorySlider';

export default function LibraryCard({ gameName, setGameName, dewey, setDewey, sliders = [] }) {
  return (
    <section className="relative mx-auto">
      <div className="relative rounded-md bg-[#FFF8E8] shadow-[0_2px_0_#e7dcc5,0_6px_12px_rgba(0,0,0,0.08)] border border-[#E8DBC0]">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(14,9,5,0.06), rgba(14,9,5,0.06) 1px, transparent 1px, transparent 28px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '100% 29px, 32px 100%',
          backgroundPosition: '0 56px, 16px 0',
        }} />

        <div className="p-5 sm:p-6">
          <div className="mb-4 grid grid-cols-12 gap-3 items-end">
            <div className="col-span-8">
              <label className="block text-[10px] uppercase tracking-wider text-stone-600">Title</label>
              <input
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
                className="w-full bg-transparent border-b border-stone-400/60 focus:border-stone-800 outline-none font-mono text-lg text-stone-900"
                aria-label="Board game title"
              />
            </div>
            <div className="col-span-4">
              <label className="block text-[10px] uppercase tracking-wider text-stone-600">Dewey No.</label>
              <input
                value={dewey}
                onChange={(e) => setDewey(e.target.value)}
                className="w-full bg-transparent border-b border-stone-400/60 focus:border-stone-800 outline-none font-mono text-lg text-stone-900 text-right"
                aria-label="Dewey decimal number"
              />
            </div>
          </div>

          <div className="space-y-2">
            {sliders.map((s, idx) => (
              <div key={`${s.label}-${idx}`} className="px-2 py-1 rounded">
                <CategorySlider
                  label={s.label}
                  left={s.left}
                  mid={s.mid}
                  right={s.right}
                  value={s.value}
                  setValue={s.setValue}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
          <div className="mt-2 grid grid-cols-2 gap-3 text-[11px] text-stone-600">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-700/70" />
              <span className="font-medium">Card No.</span>
              <span className="font-mono text-stone-700">BG-{new Date().getFullYear()}</span>
            </div>
            <div className="text-right">
              <span className="font-medium">Filed</span>
              <span className="ml-2 font-mono text-stone-700">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
