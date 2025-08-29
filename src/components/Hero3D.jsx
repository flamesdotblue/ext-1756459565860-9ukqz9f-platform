import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh]">
      <Spline
        scene="https://prod.spline.design/rwKT-aWtlkdY-8UV/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-200/30" />
      <div className="absolute inset-x-0 top-6 flex justify-center">
        <h1 className="select-none rounded-full bg-white/70 px-6 py-2 text-sm sm:text-base tracking-wide text-stone-700 shadow-sm border border-white/60">
          Board Game Library Card
        </h1>
      </div>
    </section>
  );
}
