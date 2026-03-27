import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-accent-900 min-h-[85vh] flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-primary-200 text-sm font-medium mb-8 backdrop-blur-sm border border-white/10">
            🚀 Welcome to the future of productivity
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Build Better
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-accent-300 to-primary-300">
            Ship Faster
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-primary-200/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          My Product empowers teams with powerful tools, seamless collaboration, and intelligent automation to transform the way you work.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl bg-white text-primary-700 hover:bg-primary-50 transition-all duration-200 shadow-2xl shadow-black/20 hover:shadow-black/30 hover:-translate-y-0.5"
          >
            Get Started Free →
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
          >
            Explore Features
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-col items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex -space-x-2">
            {['bg-primary-400', 'bg-accent-400', 'bg-indigo-400', 'bg-violet-400', 'bg-fuchsia-400'].map((bg, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full ${bg} border-2 border-primary-900 flex items-center justify-center text-white text-xs font-bold`}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <p className="text-primary-300/70 text-sm">
            Trusted by <span className="text-white font-semibold">2,500+</span> teams worldwide
          </p>
        </div>
      </div>
    </section>
  );
}