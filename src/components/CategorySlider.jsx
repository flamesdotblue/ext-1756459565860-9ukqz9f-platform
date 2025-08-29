import { useId } from 'react';

export default function CategorySlider({ label, left, mid, right, value, setValue }) {
  const id = useId();

  const handleChange = (e) => {
    const v = Number(e.target.value);
    // Snap to 0,1,2 (already stepped) but keep for safety
    const snapped = Math.max(0, Math.min(2, Math.round(v)));
    setValue(snapped);
  };

  const emphasis = (pos) => (value === pos ? 'text-stone-900' : 'text-stone-500');
  const weight = (pos) => (value === pos ? 'font-semibold' : 'font-normal');

  return (
    <div className="py-3">
      <div className="mb-2 flex items-baseline justify-between">
        <span className="uppercase tracking-wider text-[11px] text-stone-600">{label}</span>
        <span className="text-[10px] text-stone-400">A • B • C</span>
      </div>

      <div className="grid grid-cols-3 gap-2 items-center">
        <div className={`text-xs ${weight(0)} ${emphasis(0)} leading-tight select-none`}>{left}</div>
        <div className={`text-xs text-center ${weight(1)} ${emphasis(1)} leading-tight select-none`}>{mid}</div>
        <div className={`text-xs text-right ${weight(2)} ${emphasis(2)} leading-tight select-none`}>{right}</div>
      </div>

      <div className="mt-2">
        <div className="relative h-9">
          <div className="absolute inset-x-1 top-1/2 -translate-y-1/2">
            <div className="h-1 rounded-full bg-gradient-to-r from-stone-300 via-stone-400 to-stone-300" />
            <div className="relative -mt-1 flex justify-between">
              <span className="h-3 w-px bg-stone-500/60" />
              <span className="h-3 w-px bg-stone-500/60" />
              <span className="h-3 w-px bg-stone-500/60" />
            </div>
          </div>

          <input
            id={id}
            type="range"
            min={0}
            max={2}
            step={1}
            value={value}
            onChange={handleChange}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 appearance-none w-full bg-transparent focus:outline-none"
            aria-label={`${label} preference`}
          />

          <style>{`
            input[type='range']::-webkit-slider-thumb {
              -webkit-appearance: none;
              height: 18px;
              width: 18px;
              margin-top: -8px;
              border-radius: 9999px;
              background: white;
              border: 1px solid rgb(87 83 78 / 0.6);
              box-shadow: 0 1px 0 rgb(0 0 0 / 0.05);
            }
            input[type='range']::-moz-range-thumb {
              height: 18px;
              width: 18px;
              border-radius: 9999px;
              background: white;
              border: 1px solid rgb(87 83 78 / 0.6);
              box-shadow: 0 1px 0 rgb(0 0 0 / 0.05);
            }
            input[type='range']::-webkit-slider-runnable-track {
              height: 2px;
              background: transparent;
            }
            input[type='range']::-moz-range-track {
              height: 2px;
              background: transparent;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
